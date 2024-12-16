
"use client"
import { useSearchParams } from 'next/navigation'
import { useRef, useState, useEffect } from 'react';

import Image from "next/image";
import { useRouter } from 'next/navigation'
export const ContenidoDealleReserva=({contenidoDetalle}:any)=>{
  const router = useRouter()
    let localData:any;
    let reservaClienteLocal:any;
    const [reservaCliente, setReservaCliente] = useState<any | null>(null);

    const inputCupon:any = useRef<HTMLInputElement>(null);
    const [dataCupon, setDataCupon] = useState<string | null>(null);
    const [loadingCupon, setLoadingCupon] = useState<boolean>(false); // Estado de carga
    const [errorCupon, setErrorCupon] = useState<string | null>(null);
    const [detalleCupon, setDetalleCupon] = useState<string | null>("");
    const [montoCupon, setMontoCupon] = useState<number | null>(0);
    const [cuponActivo, setCuponActivo] = useState<boolean>(false);



      useEffect(() => {
        localData=localStorage.getItem("datareserva");

        if(localData){
          console.log("hay data")
          let reservaClienteLocal=JSON.parse(localData.toString());
          calularMontoInicial(reservaClienteLocal);
          setReservaCliente(reservaClienteLocal)
        }else{
          console.log("no hay data")
        }
      }, []);

      const calularMontoInicial=(reservaClienteLocal:any)=>{
        let monto_servicio=0;
       reservaClienteLocal.aditional_services.map((item:any)=>{
          monto_servicio=monto_servicio+item.price
        })

        let monto_reserva=reservaClienteLocal.price_web;
        if(reservaClienteLocal.tipo_pago=="2"){
          monto_reserva=reservaClienteLocal.price_hotel;
        }


        let monto=monto_reserva+monto_servicio;
        reservaClienteLocal.total_pago=monto;

      }


      const actualizarTipoPago=(tipo:any)=>{

        reservaCliente.tipo_pago=tipo;
        let monto=reservaCliente.price_web;
        if(tipo=="2"){
          monto=reservaCliente.price_hotel;
        }
        let monto_servicio=0;
        reservaCliente.aditional_services.map((item:any)=>{
          monto_servicio=monto_servicio+item.price
      })
        reservaCliente.total_pago=monto+monto_servicio;
        actualizarLocal();
        handleChange("tipo_pago",tipo)
        handleChange("total_pago",monto+monto_servicio)
        removerCupon()
      }


    const removerServicio= (index:any)=>{

      let actual_servicios:any=[];
      let monto_actual_servicios:any=0;
      reservaCliente.aditional_services.map((item:any)=>{

        if(index!==item.id){
          actual_servicios.push(item)
          monto_actual_servicios=monto_actual_servicios+item.price;
        }
      })


      let monto_reserva=reservaCliente.price_web;
      if(reservaCliente.tipo_pago=="2"){
        monto_reserva=reservaCliente.price_hotel;
      }

      reservaCliente.aditional_services=actual_servicios;
      reservaCliente.total_pago=monto_reserva+monto_actual_servicios;
      actualizarLocal();
      handleChange("aditional_services",actual_servicios);
      handleChange("total_pago",monto_reserva+monto_actual_servicios)

    }

    const removerCupon=()=>{
      setMontoCupon(0);
      setCuponActivo(false);
      setDetalleCupon("");
    }
    const validarCupon=async ()=>{

     setDetalleCupon("")
     setLoadingCupon(true); // Iniciar estado de carga
     setErrorCupon(null); // Reiniciar errores previos

     try {
       const username = process.env.NEXT_PUBLIC_API_USER;
       const password = process.env.NEXT_PUBLIC_API_PASS;
       const apiUrl = process.env.NEXT_PUBLIC_API_URL;
       // Codifica las credenciales en Base64
       const auth = btoa(`${username}:${password}`);
       const params = new URLSearchParams({
         name: inputCupon.current.value,
         id_room:"1",
         id_roomstype:"1"
       })

       const response = await fetch(`${apiUrl}/api/coupon?${params.toString()}`,{
           method: "GET", // GET es el valor predeterminado
           headers: {
               Authorization: `Basic ${auth}`, // Encabezado de autenticación
               "Content-Type": "application/json" // Opcional, depende del servicio
           }
       } );
       if (!response.ok) throw new Error('Error en la solicitud');

       const result = await response.json();
       if(result.records){

       let totalactual=reservaCliente.total_pago;

       setCuponActivo(true);
       setDetalleCupon(result.payload.description_coupon)
         if(result.payload.type_coupon=="porc")
         {
          reservaCliente.total_pago=totalactual*((100-result.payload.amount_coupon)/100);
          actualizarLocal();
           handleChange("total_pago",totalactual*((100-result.payload.amount_coupon)/100));
           setMontoCupon(totalactual-totalactual*((100-result.payload.amount_coupon)/100))
         }
         else{
          reservaCliente.total_pago=totalactual-result.payload.amount_coupon;
          actualizarLocal();
           handleChange("total_pago",totalactual-result.payload.amount_coupon);
           setMontoCupon(result.payload.amount_coupon)
         }



       }
       else{
         setDetalleCupon(result.message)
       }



   } catch (error:any) {
     setErrorCupon(error.message);       // Asigna el mensaje de error al estado
   } finally {
     setLoadingCupon(false);             // Finaliza el indicador de carga
   }


    }

    const handleChange = (key:any, value: string | number) => {
      setReservaCliente((prev:any) => ({
        ...prev, // Mantener las propiedades existentes
        [key]: value, // Actualizar solo la propiedad específica
      }));

   };


      const actualizarLocal=()=>{
        localStorage.setItem("datareserva",JSON.stringify(reservaCliente));

      };

      const itemserviciolist=(item:any)=>
      {
        let objServicio:any=null;
        reservaCliente.aditional_services_aviables.map((aviable:any)=>{
          if(aviable.id==item){
            objServicio=aviable;
          }
        })

        return (
          <>
           <li className="item_servicio" key={item}>
              <h3>{objServicio.name}</h3>
              <span>US$ {objServicio.price}</span>
              <Image width={18} height={18} src="/img/icon_delete_servicio.svg"  onClick={()=>removerServicio(item)} alt="icon-close" />
          </li>
          </>
        )
      }




      console.log(reservaCliente);

      if(reservaCliente){
          return (<>
                        <div className="box_informacion_reserva">
                                  <h1>{contenidoDetalle.info_reserva.title}</h1>

                                  <div className="info_date">
                                    <h2>{contenidoDetalle.info_reserva.label_datein}</h2>
                                    <p>{reservaCliente.date_in}   <span>{reservaCliente.check_in} </span></p>

                                    <h2>{contenidoDetalle.info_reserva.label_dateout}</h2>
                                    <p>{reservaCliente.date_out}    <span>{reservaCliente.check_out}</span></p>
                                  </div>

                                  <div className="line_separator"></div>

                                  <div className="info_room">
                                    <h2>Habitación doble estándar</h2>
                                    <p>{contenidoDetalle.info_reserva.label_people}:  {parseFloat(reservaCliente.adults)+parseFloat(reservaCliente.children) }</p>
                                    <p>{contenidoDetalle.info_reserva.label_time}: {reservaCliente.diffInDays} {contenidoDetalle.info_reserva.label_days}</p>
                                  </div>

                                  <div className="line_separator"></div>

                                  <div className="info_precio">
                                    <h2>{contenidoDetalle.info_reserva.label_precio}</h2>

                                    <div className={reservaCliente.tipo_pago === 1 ? 'item_precio active' : 'item_precio'} onClick={() => actualizarTipoPago(1)  }  >
                                      <div className="radio_btn"></div>
                                      <h3>{contenidoDetalle.info_reserva.label_tp_payment1}</h3>
                                      <span>US$ {reservaCliente.price_web}</span>
                                    </div>

                                    <div className={reservaCliente.tipo_pago === 2 ? 'item_precio active' : 'item_precio'} onClick={() => actualizarTipoPago(2) } >
                                      <div className="radio_btn"></div>
                                      <h3>{contenidoDetalle.info_reserva.label_tp_payment2}</h3>
                                      <span>US$ {reservaCliente.price_hotel}</span>
                                    </div>
                                  </div>
                                  {
                                    reservaCliente.aditional_services.length > 0 ?  <> <div className="info_servicios">
                                    <h2>{contenidoDetalle.info_reserva.label_servicios}</h2>
                                    <ul>
                                    {
                                        reservaCliente.aditional_services.map((item:any)=>{

                                          return (
                                            <>
                                             <li className="item_servicio" key={item.id}>
                                                <h3>{item.name}</h3>
                                                <span>US$ {item.price}</span>
                                                <Image width={18} height={18} src="/img/icon_delete_servicio.svg"  onClick={()=>removerServicio(item.id)} alt="icon-close" />
                                            </li>
                                            </>
                                          )
                                        })
                                      }



                                    </ul>

                                  </div>
                                    <div className="line_separator"></div>
                                    </> :""

                                  }




                                  <div className="info_cupon">
                                    <div className="cupon_title">
                                      <h2>{contenidoDetalle.info_reserva.label_cupon}</h2>
                                      { //<Image width={18} height={11} src="/img/select_arrow.png" alt="icon-arrow"/>
                                      }
                                    </div>

                                    <div className="cupon_detail">
                                      <input type="text"
                                     // Vincula el valor del input al estado
                                        ref={inputCupon}
                                       maxLength={30} placeholder={contenidoDetalle.info_reserva.label_cupon_placeholder}/>
                                      <p className='text-cupon-detalle'>{detalleCupon}</p>
                                      <p className="text_error"></p>
                                      <div className="ui_boton_cupon" onClick={()=>validarCupon()}>
                                        <h2>{contenidoDetalle.info_reserva.label_cupon_boton}</h2>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="line_separator"></div>
                                  {cuponActivo ?  <div className="info_total total-descuento">
                                    <h2>Descuento:</h2>
                                    <span data-total-descuento={montoCupon} id="pago-total-descuento">US$ {montoCupon}</span>

                                  </div> : <></>}


                                  <div className="info_total">
                                    <h2>Total:</h2>
                                    <span data-total={reservaCliente.total_pago} id="pago-total">US$ {reservaCliente.total_pago}</span>

                                  </div>


                        </div>
                      </>)
      }else{
        return (<></>)
      }

}
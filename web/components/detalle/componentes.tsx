
"use client"
import { useSearchParams } from 'next/navigation'
import { useState } from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation'
export const ContenidoDealleReserva=({contenidoDetalle}:any)=>{

    const router = useRouter()
    let localData:any=localStorage.getItem("datareserva");

    let reservaClienteLocal=JSON.parse(localData.toString());

 

    let monto_servicio=0;
    reservaClienteLocal.aditional_services.map((item:any)=>{
      monto_servicio=monto_servicio+reservaClienteLocal.aditional_services_aviables[item].price
    })

    let monto_reserva=reservaClienteLocal.price_web;
    if(reservaClienteLocal.tipo_pago=="2"){
      monto_reserva=reservaClienteLocal.price_hotel;
    }


    let monto=reservaClienteLocal.total_pago+monto_servicio;
    reservaClienteLocal.total_pago=monto+monto_reserva;




    const [reservaCliente, setReservaCliente] = useState(reservaClienteLocal);
    console.log(reservaClienteLocal);


    const handleChange = (key:any, value: string | number) => {
      setReservaCliente((prev:any) => ({
        ...prev, // Mantener las propiedades existentes
        [key]: value, // Actualizar solo la propiedad específica
      }));
    };
    const actualizarTipoPago=(tipo:any)=>{
      handleChange("tipo_pago",tipo)
      let monto=reservaCliente.price_web;
      if(tipo=="2"){
        monto=reservaCliente.price_hotel;
      }

      let monto_servicio=0;
      reservaCliente.aditional_services.map((item:any)=>{
        monto_servicio=monto_servicio+reservaCliente.aditional_services_aviables[item].price
    })

      actualizarTotal(monto+monto_servicio);

    }


    const actualizarTotal=(monto:any)=>{
      handleChange("total_pago",monto)
    }

    const removerServicio= (index:any)=>{
      console.log(reservaCliente.aditional_services)
      let actual_servicios:any=[];
      reservaCliente.aditional_services.map((item:any)=>{
        console.log(item)
        if(index!==item){
          actual_servicios.push(item)
        }
      })
      console.log(actual_servicios);
      handleChange("aditional_services",actual_servicios);
     // console.log(index);
      //reservaCliente.aditional_services.filter((item:any) => item !== index)
     // handleChange(reservaCliente);
    }
   /* const [isPrecioActivo, setPrecioActivo] = useState(null);
    let montoinicial=0;

    let monto_reserva=reservaCliente.price_hotel;


      reservaCliente.aditional_services.map((item:any)=>{
        montoinicial=montoinicial+reservaCliente.aditional_services_aviables[item].price

      })
      if(reservaCliente.tipo_pago==1){
        monto_reserva=reservaCliente.price_web;
      }

      const [isTotal,setTotal]=useState(montoinicial+monto_reserva);

      const [isPrecioSeleccionado,setPrecioSeleccionado]=useState(reservaCliente.tipo_pago);

      const actualizarTipoPago=(id:any)=>{
        setPrecioSeleccionado(id)

        if(id==1){
          monto_reserva=reservaCliente.price_web;
         }else{
          monto_reserva=reservaCliente.price_hotel;
         }
         console.log(monto_reserva);
         setTotal(monto_reserva);

       actualizarMontoTotal();

      }
*/
     /* const actualizarMontoTotal=()=>{
       let monto_reserva=0;
       if(isPrecioSeleccionado==1){
        monto_reserva=reservaCliente.price_web;
       }else{
        monto_reserva=reservaCliente.price_hotel;
       }
       setTotal(monto_reserva);
      }*/
     const validarCupon=()=>{
      console.log("validarCupon");
     }
     console.log( reservaCliente.aditional_services.length)
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
                                 return(
  
                                    <li className="item_servicio" key={item}>
                                        <h3>{reservaCliente.aditional_services_aviables[item].name}</h3>
                                        <span>US$ {reservaCliente.aditional_services_aviables[item].price}</span>
                                        <Image width={18} height={18} src="/img/icon_delete_servicio.svg"  onClick={()=>removerServicio(item)} alt="icon-close" />
                                    </li>
  
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
                              <Image width={18} height={11} src="/img/icon-arrow-cupon.png" alt="icon-arrow"/>
                            </div>

                            <div className="cupon_detail">
                              <input type="text" maxLength={30} placeholder={contenidoDetalle.info_reserva.label_cupon_placeholder}/>
                              <p className="text_error"></p>
                              <div className="ui_boton_cupon" onClick={()=>validarCupon()}>
                                <h2>{contenidoDetalle.info_reserva.label_cupon_boton}</h2>
                              </div>
                            </div>
                          </div>

                          <div className="line_separator"></div>

                          <div className="info_total">
                            <h2>Total:</h2>
                            <span data-total={reservaCliente.total_pago} id="pago-total">US$ {reservaCliente.total_pago}</span>
                          </div>

                </div>
              </>)




}
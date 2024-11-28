"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export const ContenidoDetalleReserva = ({contenidoDetalle}:any) => {
    const [dataReserva, setDataReserva] = useState(null);        // Estado para almacenar los datos
    const [loading, setLoading] = useState(true);   // Estado para el indicador de carga
    const [error, setError] = useState(null);


    useEffect(() => {
        // Función para obtener los datos de la API
        const fetchData = async () => {
            try {
                /*const username = "#|~4139h*II7yN@";
                const password = "r)qFV.Ey8W6PX5>";*/

                // Codifica las credenciales en Base64
                //const auth = btoa(`${username}:${password}`);
                const response = await fetch(`https://creasoft.com.pe/hotelier_api/pages/page-detalle-reserva.json`,{
                    method: "GET", // GET es el valor predeterminado
                   /* headers: {
                        Authorization: `Basic ${auth}`, // Encabezado de autenticación
                        "Content-Type": "application/json" // Opcional, depende del servicio
                    }*/
                } );
                if (!response.ok) throw new Error('Error en la solicitud');

                const result = await response.json();

                setDataReserva(result.payload["es"]); // Asigna los datos obtenidos al estado
            } catch (error:any) {
                setError(error.message);       // Asigna el mensaje de error al estado
            } finally {
                setLoading(false);             // Finaliza el indicador de carga
            }
        };

        fetchData(); // Llama a la función de fetch
    }, []); // Dependencia vacía para ejecutar solo en el montaje

    if (loading) return <div></div>; // Indicador de carga
    if (error) return <div></div>;




    /**/
    let string_reserva:any=localStorage.getItem("pre_reserva");
    let pre_reserva=JSON.parse(string_reserva);
    return (
        <>
          <div className="box_informacion_reserva">
                <h1>{contenidoDetalle.info_reserva.title}</h1>

                <div className="info_date">
                  <h2>{contenidoDetalle.info_reserva.label_datein}</h2>
                  <p>{pre_reserva.date_in}   <span>09:00 a.m.</span></p>

                  <h2>{contenidoDetalle.info_reserva.label_dateout}</h2>
                  <p>{pre_reserva.date_out}    <span>09:00 a.m.</span></p>
                </div>

                <div className="line_separator"></div>

                <div className="info_room">
                  <h2>Habitación doble estándar</h2>
                  <p>{contenidoDetalle.info_reserva.label_people}: 2</p>
                  <p>{contenidoDetalle.info_reserva.label_people}: 3 {contenidoDetalle.info_reserva.label_days}</p>
                </div>

                <div className="line_separator"></div>

                <div className="info_precio">
                  <h2>{contenidoDetalle.info_reserva.label_precio}</h2>

                  <div className="item_precio active">
                    <div className="radio_btn"></div>
                    <h3>{contenidoDetalle.info_reserva.label_tp_payment1}</h3>
                    <span>US$ 360</span>
                  </div>

                  <div className="item_precio">
                    <div className="radio_btn"></div>
                    <h3>{contenidoDetalle.info_reserva.label_tp_payment2}</h3>
                    <span>US$ 360</span>
                  </div>
                </div>

                <div className="info_servicios">
                  <h2>{contenidoDetalle.info_reserva.label_servicios}</h2>
                  <ul>

                    <li className="item_servicio">
                        <h3>Servicio de transporte</h3>
                        <span>US$ 40.00</span>
                        <Image width={18} height={18} src="/img/icon_delete_servicio.svg" alt="icon-close" />
                    </li>
                    <li className="item_servicio">
                        <h3>Servicio de bienvenida</h3>
                        <span>US$ 20.00</span>
                        <Image width={18} height={18} src="/img/icon_delete_servicio.svg" alt="icon-close" />
                    </li>
                  </ul>

                </div>

                <div className="line_separator"></div>

                <div className="info_cupon">
                  <div className="cupon_title">
                    <h2>{contenidoDetalle.info_reserva.label_cupon}</h2>
                    <Image width={18} height={11} src="/img/icon-arrow-cupon.png" alt="icon-arrow"/>
                  </div>

                  <div className="cupon_detail">
                    <input type="text" maxLength={30} placeholder={contenidoDetalle.info_reserva.label_cupon_placeholder}/>
                    <p className="text_error"></p>
                    <div className="ui_boton_cupon">
                      <h2>{contenidoDetalle.info_reserva.label_cupon_boton}</h2>
                    </div>
                  </div>
                </div>

                <div className="line_separator"></div>

                <div className="info_total">
                  <h2>Total:</h2>
                  <span>US$ 480.00</span>
                </div>

              </div>
        </>
    )
}



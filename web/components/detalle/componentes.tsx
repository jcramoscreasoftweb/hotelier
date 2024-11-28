
"use client"
import { useSearchParams } from 'next/navigation'
import Image from "next/image";

export const ContenidoDealleReserva=({contenidoDetalle}:any)=>{
    

    let localData:any=localStorage.getItem("datareserva");
    let data_reserva=JSON.parse(localData.toString());
 
    return (<>
      <div className="box_informacion_reserva">
                <h1>{contenidoDetalle.info_reserva.title}</h1>

                <div className="info_date">
                  <h2>{contenidoDetalle.info_reserva.label_datein}</h2>
                  <p>{data_reserva.date_in}   <span>{data_reserva.check_in} </span></p>

                  <h2>{contenidoDetalle.info_reserva.label_dateout}</h2>
                  <p>{data_reserva.date_out}    <span>{data_reserva.check_out}</span></p>
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
                  <span>US$ {data_reserva.total_pago}</span>
                </div>

              </div>
              </>)

}
import  { Metadata } from "next";
import {
  FooterSite,
  HeaderSitev2,
} from "@/components";

import {DetalleReservaResponse, PhoneCodeResponse} from"@/interfaces";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata:Metadata={
    title:"Detalle reserva",
    description:"Detalle reserva",
    keywords:["Detalle","reserva","Hotelier"]
}
export default  async function Nosotros() {
  let url = "https://creasoft.com.pe/hotelier_api/pages/page-detalle-reserva.json";
  let requestAPI: any = await fetch(url);
  requestAPI = await requestAPI.json();
  let contenidoDetalle: DetalleReservaResponse = requestAPI.payload["es"];

  let url_phonecode = "https://creasoft.com.pe/hotelier_api/get-phonecode.json";
  let requestAPI_phone: any = await fetch(url_phonecode);
  requestAPI_phone = await requestAPI_phone.json();
  let phoneCode: PhoneCodeResponse[] = requestAPI_phone.payload["es"];
  
  return (
    <>
        <HeaderSitev2 />
        
        <section className="ui_seccion_1_detalle">
          <div className="contenedor page_detalle">
            <h1>{contenidoDetalle.title_page}</h1>
            

            <div className="ui_box_container">
              <div className="box_informacion_reserva">
                <h1>{contenidoDetalle.info_reserva.title}</h1>

                <div className="info_date">
                  <h2>{contenidoDetalle.info_reserva.label_datein}</h2>
                  <p>Lunes, 03 junio 2024   <span>09:00 a.m.</span></p>

                  <h2>{contenidoDetalle.info_reserva.label_dateout}</h2>
                  <p>Lunes, 03 junio 2024   <span>09:00 a.m.</span></p>
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
                    <Image className="" width={18} height={11} src="/img/icon-arrow-cupon.png" alt="icon-arrow"/>
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

              <div className="right_side">
                <div className="box_informacion_huesped">
                <form className="ui_formulario_pago" action="" >
                  <h3>{contenidoDetalle.info_form.title}</h3>
                  
                  <div className="row-inputs">
                    <div className="item_input">
                      <span>{contenidoDetalle.info_form.label_lastname_1}</span>
                      <input type="text" id="first_lastname" name="first_lastname" maxLength={30} required/>
                      <p></p>
                    </div>
                    <div className="item_input">
                      <span>{contenidoDetalle.info_form.label_lastname_2}</span>
                      <input type="text" id="second_lastname" name="second_lastname" maxLength={30} required/>
                      <p></p>
                      </div>
                  </div>

                  <div className="row-inputs">
                    <div className="item_input">
                      <span>{contenidoDetalle.info_form.label_names}</span>
                      <input type="text" id="name" name="name" maxLength={30} required/>
                      <p></p>
                    </div>
                    <div className="item_input">
                      <span>{contenidoDetalle.info_form.label_tpdoc}</span>
                      <div className="ui_selector_input">
                          <select name="tpdoc" id="tpdoc">
                              <option value="1">DNI</option>
                              <option value="2">Pasaporte</option>
                          </select>
                          <input type="text" id="doc_number" name="doc_number" required/>
                      </div>
                      <p></p>
                    </div>
                  </div>
                  
                  <div className="row-inputs">
                    <div className="item_input">
                      <span>{contenidoDetalle.info_form.label_email}</span>
                      <input type="text" id="email" name="email" maxLength={30} required/>
                      <p></p>
                    </div>
                    <div className="item_input">
                      <span>Teléfono</span>
                      <div className="ui_selector_input">
                          <select name="id_country" id="id_country" defaultValue={139}>
                            {phoneCode.map((item : any) => {
                              return(
                                  <option key={item.id} value={item.id}>+ {item.code_phone} {item.country_name}</option>
                              );
                            })}
                          </select>
                          <input type="text" id="phone" name="phone" required/>
                      </div>
                      <p></p>
                    </div>
                  </div>

                  <div className="row-inputs">
                    <div className="item_input">
                      <span>{contenidoDetalle.info_form.label_time}</span>
                      <input type="time" name="hour" id="hour" required/>
                      <p></p>
                    </div>
                  </div>

                  <div className="row-inputs">
                    <div className="item_input">
                      <span>{contenidoDetalle.info_form.label_comments}</span>
                      <textarea  id="detail" name="detail" maxLength={400} required/>
                    </div>
                  </div>

                  <div className="ui_checkbox">
                    <input type="checkbox" name="" id="" required/>
                    <span>
                      {contenidoDetalle.info_form.label_policies}
                      <Link href="/terminos-condiciones">{contenidoDetalle.info_form.label_policies_redirect}</Link>
                    </span>
                  </div>

                  <div className="row_buttons">
                    <div className="btn_form active">
                      <button>{contenidoDetalle.info_form.label_boton_pagar}</button>
                    </div>

                  </div>
                </form>
                </div>

                
                <div className="ui_advertencia">
                  <Image width={40} height={40} src="/img/icon_info_checkout.png" alt="icon-checkout"/>
                  <p>{contenidoDetalle.info_advertencia}</p>
                </div>
              </div>

              
            </div>

            

          </div>
        </section>

        {/* <!-- MODAL CONFIRMACION PAGO --> */}
        <div className="ui_fondo_modal ui_popup detalle_reserva">
                <div className="ui_marco_modal">
                    <div className="ui_contenido_modal">
                        <div className="ui_close_modal"></div>
                        <Image className="img_fondo_left" width={102} height={106} src="/img/adorno_popup_superior.png" alt="icon-popup" />
                        <Image width={68} height={68} src="/img/icon_popup.png" alt="icon-popup" />
                        <h1 dangerouslySetInnerHTML={{ __html:contenidoDetalle.popup.title}}></h1>
                        <h2 dangerouslySetInnerHTML={{ __html:contenidoDetalle.popup.subtitle}}></h2>
                        <Image className="img_fondo_right" width={102} height={106} src="/img/adorno_popup_inferior.png" alt="icon-popup" />
                    </div>
                </div>
            </div>
            {/* <!-- END MODAL CONFIRMACION PAGO--> */}



        <FooterSite />
    </>
  )
}

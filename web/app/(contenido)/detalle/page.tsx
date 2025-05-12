import  { Metadata } from "next";
import {
  FooterSite,
  HeaderSitev2,
} from "@/components";
import Script from 'next/script';
import {DetalleReservaResponse, PhoneCodeResponse} from"@/interfaces";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { ContenidoDealleReserva } from "@/components/detalle/componentes";

export const metadata:Metadata={
     title:"Sacha Cusco",
    description:"Detalle reserva",
    keywords:["Detalle","reserva","Hotelier"]
}
export default  async function Detalle({ language = 'es' }:any) {

  const username = process.env.NEXT_PUBLIC_API_USER;
  const password = process.env.NEXT_PUBLIC_API_PASS;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const auth = btoa(`${username}:${password}`);


  let url =apiUrl+"/api/page-detalle-reserva";

  //let url = "https://creasoft.com.pe/hotelier_api/pages/page-destino.json";
  let requestAPI: any = await fetch(url,{
      method: "GET", // GET es el valor predeterminado
      headers: {
          Authorization: `Basic ${auth}`, // Encabezado de autenticación
          "Content-Type": "application/json" // Opcional, depende del servicio
      }
  });

  requestAPI = await requestAPI.json();
  let contenidoDetalle: DetalleReservaResponse = requestAPI.payload[language];

  let url_phonecode =apiUrl+"/api/list-countries";

  let requestAPI_phone: any = await fetch(url_phonecode,{
    method: "GET", // GET es el valor predeterminado
    headers: {
        Authorization: `Basic ${auth}`, // Encabezado de autenticación
        "Content-Type": "application/json" // Opcional, depende del servicio
    }
});


  requestAPI_phone = await requestAPI_phone.json();
  let phoneCode: PhoneCodeResponse[] = requestAPI_phone.payload[language];

  return (
    <>
        <HeaderSitev2 language={language}/>



        {/* Script en el head */}
        <Script
                src="https://js.culqi.com/checkout-js"
                //strategy="beforeInteractive" // Cargar en el <head>
                //onLoad={() => console.log("Script en el <head> cargado")}
            />


        <section className="ui_seccion_1_detalle">
          <div className="contenedor page_detalle">
            <h1>{contenidoDetalle.title_page}</h1>


            <div className="ui_box_container">

              <ContenidoDealleReserva contenidoDetalle={contenidoDetalle}></ContenidoDealleReserva>


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
                    <input type="checkbox" name="inp-terminos" id="inp_terminos" required/>
                    <span>
                      {contenidoDetalle.info_form.label_policies}
                      <Link href="/terminos-condiciones">{contenidoDetalle.info_form.label_policies_redirect}</Link>
                    </span>
                  </div>

                  <div className="row_buttons">
                    <div className="btn_form active">
                      <button id="pagar-culqui" type="button">{contenidoDetalle.info_form.label_boton_pagar}</button>
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
        <div className="modal-gracias" >
            <div className="marco-modal-gracias">
            <div className="contenido-modal-gracias">
              <Image className="close-modal-gracias" src="/img/icon_close.png"  width={40} height={40}  alt="" />
              <Image   width={102} height={106}  className="deco1" src="/img/adorno_popup_superior.png" alt="" />
              <Image   width={102} height={106}  className="deco2" src="/img/adorno_popup_inferior.png" alt="" />
                            <Image  width={106} height={106}  className="ico-check" src="/img/ico_check_reserva.png" alt="" />
                            <p className="titulo">¡Reserva registrada <br></br> exitosamente!</p>
                            <div>
                              <p className="detalle">
                              Hemos enviado un correo electrónico con los detalles de tu reserva, incluyendo instrucciones para el check-in, políticas de cancelación y contacto del hotel. Revisa tu bandeja de entrada y la carpeta de SPAM.

 <span id="codigo-reserva"></span>.

                              </p>
                            </div>
              </div>

            </div>
        </div>


        <Script src="/js/jquery.js"/>
        <Script
                src="/js/pago.js"
                // Cargar en el <head>
                //onLoad={() => console.log("Script en el <head> cargado")}
            />
        <FooterSite language={language}/>
    </>
  )
}

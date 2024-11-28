import  { Metadata } from "next";
import {
  FooterSite,
  HeaderSitev2,
} from "@/components";

import {CalificacionResponse} from"@/interfaces";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata:Metadata={
    title:"Calificacion",
    description:"Calificacion",
    keywords:["Calificacion","Hotelier"]
}
export default async function Calificacion() {
  let url = "https://creasoft.com.pe/hotelier_api/pages/page-calificacion.json";
  let requestAPI: any = await fetch(url);
  requestAPI = await requestAPI.json();
  let contenidoCalificacion: CalificacionResponse = requestAPI.payload["es"];

  
  return (
    <>
        <HeaderSitev2 />
        
        <section className="ui_seccion_1_comentario">
          <div className="contenedor page_calificacion">
            <h1>{contenidoCalificacion.form_calificacion.title}</h1>
            <h2 dangerouslySetInnerHTML={{ __html:contenidoCalificacion.form_calificacion.subtitle}}></h2>

            <form method="post" action="">
              <div className="row_stars">
                <Image width={40} height={40} src="/img/icon_star_vacio.png" alt="icon-star"/>
                <Image width={40} height={40} src="/img/icon_star_vacio.png" alt="icon-star"/>
                <Image width={40} height={40} src="/img/icon_star_vacio.png" alt="icon-star"/>
                <Image width={40} height={40} src="/img/icon_star_vacio.png" alt="icon-star"/>
                <Image width={40} height={40} src="/img/icon_star.png" alt="icon-star"/>
              </div>

              <div className="comentario">
                <h2>{contenidoCalificacion.form_calificacion.label_comentario}</h2>
                <textarea  id="comment" name="comment" maxLength={540} required/>
              </div>

              <div className="ui_boton_formulario">
                  <button className="active">{contenidoCalificacion.form_calificacion.form_boton}</button>
              </div>
            </form>
          </div>
        </section>

        {/* <!-- MODAL CONFIRMACION COMENTARIO --> */}
        <div className="ui_fondo_modal ui_popup calificacion">
          <div className="ui_marco_modal">
            <div className="ui_contenido_modal">
                <div className="ui_close_modal"></div>
                <Image className="img_fondo_left" width={102} height={106} src="/img/adorno_popup_superior.png" alt="icon-popup" />
                <Image width={68} height={68} src="/img/icon_calificacion.png" alt="icon-popup" />
                <h1 dangerouslySetInnerHTML={{ __html:contenidoCalificacion.popup.title}}></h1>
                <h2 dangerouslySetInnerHTML={{ __html:contenidoCalificacion.popup.subtitle}}></h2>
                <Image className="img_fondo_right" width={102} height={106} src="/img/adorno_popup_inferior.png" alt="icon-popup" />
            </div>
           </div>
        </div>
        {/* <!-- END MODAL CONFIRMACION COMENTARIO--> */}



        <FooterSite />
    </>
  )
}

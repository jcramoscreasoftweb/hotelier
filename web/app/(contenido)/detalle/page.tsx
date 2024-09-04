import  { Metadata } from "next";
import {
  FooterSite,
  HeaderSitev2,
  HeaderSitev1,
  ItemBeneficio,
} from "@/components";

import {NosotrosResponse} from"@/interfaces";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata:Metadata={
    title:"Page Nosotros",
    description:"Page Nosotros",
    keywords:["Nosotros","Saccha","Hotelier"]
}
export default  async function Nosotros() {
  let url = "https://creasoft.com.pe/hotelier_api/pages/page-nosotros.json";
  let requestAPI: any = await fetch(url);
  requestAPI = await requestAPI.json();
  let contenidoNosotros: NosotrosResponse = requestAPI.payload["es"];

  return (
    <>
        <HeaderSitev2 />
        
        <section className="ui_seccion_1_detalle">
          <div className="contenedor page_detalle">
            <h1>Realizar reserva</h1>

            <div className="ui_box_container">
              <div className="box_informacion_reserva">
                <h1>Datos de tu reserva</h1>

                <div className="dates">
                  <h2>Entrada</h2>
                  <p>Lunes, 03 junio 2024   <span>09:00 a.m.</span></p>

                  <h2>Salida</h2>
                  <p>Lunes, 03 junio 2024   <span>09:00 a.m.</span></p>
                </div>
              </div>

              <div className="box_informacion_huesped">

              </div>

            </div>

            <div className="ui_advertencia">
              <Image width={40} height={40} src="/img/icon_info_checkout.png" alt="icon-checkout"/>
              <p>Ten en cuenta que durante el proceso de checkout en el hotel, se realizará una validación para determinar si corresponde el pago de impuestos.</p>
            </div>

          </div>
        </section>

        <FooterSite />
    </>
  )
}

import  { Metadata } from "next";
import {
  FooterSite,
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
        <section className="ui_seccion_top_banner"
          style={{
            backgroundImage: `url("${contenidoNosotros.pincipal_section.image}")`,
          }}
        >  
          <HeaderSitev1 />
          <div className="ui_texto_title_banner">
            <h2>{contenidoNosotros.pincipal_section.title}</h2>
          </div>
        </section>
        
        <section className="ui_seccion_1_nosotros">
          <div className="contenedor page_nosotros">
            <h2>
              {contenidoNosotros.pincipal_section.description}
            </h2>
            </div>
        </section>

        <section className="ui_seccion_2_nosotros">
          <div className="contenedor page_nosotros">
            <div className="item_valor">
              <div className="valor_left">
                <div className="item_valor_text">
                  <h1>{contenidoNosotros.mision_section.title}</h1>
                  <p>{contenidoNosotros.mision_section.description}</p>
                </div>
              </div>
              
              <div className="valor_right">
                <div className="item_valor_image">
                  <Image width={500} height={500} src={contenidoNosotros.mision_section.image} alt="image-valor"></Image>
                </div>
              </div>
            </div>

            <div className="item_valor">
              <div className="valor_left">
                <div className="item_valor_image">
                    <Image width={500} height={500} src={contenidoNosotros.vision_section.image} alt="image-valor"></Image>
                </div>
              </div>
                
              <div className="valor_right important">
                <div className="item_valor_text">
                  <h1>{contenidoNosotros.vision_section.title}</h1>
                  <p>{contenidoNosotros.vision_section.description}</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="ui_seccion_3_nosotros">
          <div className="contenedor page_nosotros">
            <div className="title_seccion_3">
              <h2>Beneficios</h2>
            </div>

            <div className="seccion_3_items">
              {contenidoNosotros.benefits_section.map((item)=>{
                return(
                  <ItemBeneficio
                    imagen={item.image}
                    titulo={item.title}
                    descripcion={item.description}
                  />

                );
              })
                
              }

             

            </div>
          </div>

        </section>


        
        




        <FooterSite />
    </>
  )
}

import  { Metadata } from "next";
import {
  FooterSite_SinDecoracion,
  HeaderSitev1,
  ItemBeneficio,
} from "@/components";

import {NosotrosResponse} from"@/interfaces";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata:Metadata={
   title:"Sacha Cusco",
    description:"Page Nosotros",
    keywords:["Nosotros","Saccha","Hotelier"]
}
export default  async function Nosotros({ language = 'es' }:any) {

  const username = process.env.NEXT_PUBLIC_API_USER;
  const password = process.env.NEXT_PUBLIC_API_PASS;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const auth = btoa(`${username}:${password}`);


  let url = apiUrl+"/api/page-nosotros";
 //let url = "https://creasoft.com.pe/hotelier_api/pages/page-nosotros.json";
  let requestAPI: any = await fetch(url,{
    method: "GET", // GET es el valor predeterminado
    headers: {
        Authorization: `Basic ${auth}`, // Encabezado de autenticación
        "Content-Type": "application/json" // Opcional, depende del servicio
    }
});
  requestAPI = await requestAPI.json();
  let contenidoNosotros: NosotrosResponse = requestAPI.payload[language];

  return (
    <>
        <section className="ui_seccion_top_banner"
          style={{
            backgroundImage: `url("${contenidoNosotros.pincipal_section.image}")`,
          }}
        >
          <HeaderSitev1 language={language}/>
          <div className="ui_texto_title_banner">
            <h2 dangerouslySetInnerHTML={{ __html:contenidoNosotros.pincipal_section.title}}></h2>
          </div>
        </section>

        <section className="ui_seccion_1_nosotros">
          <div className="contenedor page_nosotros">
            <h2 dangerouslySetInnerHTML={{ __html:contenidoNosotros.pincipal_section.description}}></h2>
          </div>
        </section>

        <section className="ui_seccion_2_nosotros">
          <div className="contenedor page_nosotros">
            <div className="item_valor">
              <div className="valor_left">
                <div className="item_valor_text">
                  <h1 dangerouslySetInnerHTML={{ __html:contenidoNosotros.mision_section.title}}></h1>
                  <p dangerouslySetInnerHTML={{ __html:contenidoNosotros.mision_section.description}}></p>
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
                  <h1 dangerouslySetInnerHTML={{ __html:contenidoNosotros.vision_section.title}}></h1>
                  <p dangerouslySetInnerHTML={{ __html:contenidoNosotros.vision_section.description}}></p>
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
                    key={item.title}
                    imagen={item.image}
                    titulo={item.title}
                    descripcion={item.description}
                  />

                );
              })
              }
            </div>
          </div>

          <div className="decoracion_footer">
            <Image
              className="img-full"
              width={1677}
              height={286}
              src="/img/footer_decoracion.png"
              alt=""
            />
          </div>
        </section>

        <FooterSite_SinDecoracion language={language}/>
    </>
  )
}

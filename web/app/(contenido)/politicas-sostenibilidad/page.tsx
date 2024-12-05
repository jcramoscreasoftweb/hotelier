import  { Metadata } from "next"
import {
    HeaderSitev1,
    FooterSite,
} from "@/components"
import { SostenibilidadResponse } from "@/interfaces";
import Image from "next/image";

export const metadata:Metadata={
    title:"Políticas de sostenibilidad",
    description:"Políticas de sostenibilidad",
    keywords:["Políticas","sostenibilidad"]
}

export default  async function PoliticaSostenibilidad(){
    const username = process.env.NEXT_PUBLIC_API_USER;
    const password = process.env.NEXT_PUBLIC_API_PASS;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const auth = btoa(`${username}:${password}`);
 
    let url = apiUrl+"/api/page-sostenibilidad";
   
    
    //let url = "https://creasoft.com.pe/hotelier_api/pages/page-sostenibilidad.json";
    let requestAPI: any = await fetch(url,{
        method: "GET", // GET es el valor predeterminado
        headers: {
            Authorization: `Basic ${auth}`, // Encabezado de autenticación
            "Content-Type": "application/json" // Opcional, depende del servicio
        }
    });
    requestAPI = await requestAPI.json();
    let contenidoSostenibilidad: SostenibilidadResponse = requestAPI.payload["es"];
  

    return(
        <>
        <section className="ui_seccion_top_banner sostenibilidad"
            style={{
                backgroundImage: `url("${contenidoSostenibilidad.pincipal_section.image}")`,
            }}
        >  
          <HeaderSitev1 />
          <div className="ui_texto_title_banner">
            <h2 dangerouslySetInnerHTML={{ __html:contenidoSostenibilidad.pincipal_section.title}}></h2>
          </div>
        </section>

        <section className="ui_seccion_1_sostenibilidad">
            <div className="contenedor">
                <p dangerouslySetInnerHTML={{ __html:contenidoSostenibilidad.pincipal_section.description}}></p>
            </div>
        </section>

        <section className="ui_seccion_2_sostenibilidad">
            <div className="contenedor">
                <div className="ui_marco_titulo">
                    <Image width={62} height={60} src="/img/adorno_titulo_1.png" alt=""/>
                    <h2 dangerouslySetInnerHTML={{ __html:contenidoSostenibilidad.first_section.title}}></h2>
                    <Image width={62} height={60} src="/img/adorno_titulo_2.png" alt=""/>
                </div>

                <div className="row_seccion_sostenibilidad">
                    <div className="row_information">
                        <h2 dangerouslySetInnerHTML={{ __html:contenidoSostenibilidad.first_section.subtitle_1}}></h2>
                        <ul dangerouslySetInnerHTML={{ __html:contenidoSostenibilidad.first_section.content_1}}></ul>
                        <h2 dangerouslySetInnerHTML={{ __html:contenidoSostenibilidad.first_section.subtitle_2}}></h2>
                        <ul dangerouslySetInnerHTML={{ __html:contenidoSostenibilidad.first_section.content_2}}></ul>
                    </div>

                    <div className="row_image">
                        <Image width={460} height={460} src={contenidoSostenibilidad.first_section.image_1} alt="image-sostenibilidad"/>
                    </div>

                </div>

                <div className="row_seccion_sostenibilidad invert_mob">
                    <div className="row_image">
                        <Image width={460} height={460} src={contenidoSostenibilidad.first_section.image_2} alt="image-sostenibilidad"/>
                    </div>

                    <div className="row_information">
                        <h2 dangerouslySetInnerHTML={{ __html:contenidoSostenibilidad.first_section.subtitle_3}}></h2>
                        <ul dangerouslySetInnerHTML={{ __html:contenidoSostenibilidad.first_section.content_3}}></ul>
                        <h2 dangerouslySetInnerHTML={{ __html:contenidoSostenibilidad.first_section.subtitle_4}}></h2>
                        <ul dangerouslySetInnerHTML={{ __html:contenidoSostenibilidad.first_section.content_4}}></ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="ui_seccion_3_sostenibilidad">
            <div className="contenedor">
                <div className="ui_marco_titulo">
                    <Image width={62} height={60} src="/img/adorno_titulo_1.png" alt=""/>
                    <h2 dangerouslySetInnerHTML={{ __html:contenidoSostenibilidad.second_section.title}}></h2>
                    <Image width={62} height={60} src="/img/adorno_titulo_2.png" alt=""/>
                </div>

                <div className="row_seccion_sostenibilidad">
                    <div className="row_information">
                        <h2 dangerouslySetInnerHTML={{ __html:contenidoSostenibilidad.second_section.subtitle_1}}></h2>
                        <ul dangerouslySetInnerHTML={{ __html:contenidoSostenibilidad.second_section.content_1}}></ul>
                    </div>

                    <div className="row_information">
                        <h2 dangerouslySetInnerHTML={{ __html:contenidoSostenibilidad.second_section.subtitle_2}}></h2>
                        <ul dangerouslySetInnerHTML={{ __html:contenidoSostenibilidad.second_section.content_2}}></ul>
                    </div>
                </div>

                <div className="row_seccion_sostenibilidad imagenes">
                   <Image className="img_sostenibilidad_left" width={486} height={475} src={contenidoSostenibilidad.second_section.image_1} alt=""/>
                   <Image className="img_sostenibilidad_right" width={512} height={473} src={contenidoSostenibilidad.second_section.image_text} alt=""/>
                </div>
            </div>
        </section>

        <FooterSite />
        </>
    );
}
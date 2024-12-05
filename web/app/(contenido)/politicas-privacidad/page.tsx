import  { Metadata } from "next"
import {
    HeaderSitev1,
    FooterSite,
} from "@/components"
import { PrivacidadResponse } from "@/interfaces";
import Image from "next/image";

export const metadata:Metadata={
    title:"Políticas de privacidad",
    description:"Políticas de privacidad",
    keywords:["Políticas","privacidad"]
}

export default async function PoliticaPrivacidad(){
    const username = process.env.NEXT_PUBLIC_API_USER;
    const password = process.env.NEXT_PUBLIC_API_PASS;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const auth = btoa(`${username}:${password}`);
    let url = apiUrl+"/api/page-politicas";
    //let url = "https://creasoft.com.pe/hotelier_api/pages/page-politicas.json";
    let requestAPI: any = await fetch(url,{
        method: "GET", // GET es el valor predeterminado
        headers: {
            Authorization: `Basic ${auth}`, // Encabezado de autenticación
            "Content-Type": "application/json" // Opcional, depende del servicio
        }
    });
    requestAPI = await requestAPI.json();
    let contenidoPrivacidad: PrivacidadResponse = requestAPI.payload["es"];

    return(
        <>
            <section className="ui_seccion_top_banner privacidad"
                style={{
                    backgroundImage: `url("${contenidoPrivacidad.pincipal_section.image}")`,
                }}
            >  
                <HeaderSitev1 />
                <div className="ui_texto_title_banner">
                    <h2 dangerouslySetInnerHTML={{ __html:contenidoPrivacidad.pincipal_section.title}}></h2>
                </div>
            </section>

            <section className="ui_seccion_1_privacidad">
                <div className="contenedor">
                    <p dangerouslySetInnerHTML={{ __html:contenidoPrivacidad.first_section.text_1}}></p>
                    <ul dangerouslySetInnerHTML={{ __html:contenidoPrivacidad.first_section.text_2}}></ul>
                    <p dangerouslySetInnerHTML={{ __html:contenidoPrivacidad.first_section.text_3}}></p>
                    <p>
                        Correo electrónico: <span dangerouslySetInnerHTML={{ __html:contenidoPrivacidad.first_section.email}}></span><br/>      
                        Teléfono: <span dangerouslySetInnerHTML={{ __html:contenidoPrivacidad.first_section.phone}}></span>
                    </p>
                    <p dangerouslySetInnerHTML={{ __html:contenidoPrivacidad.first_section.text_4}}></p>
                </div>
            </section>

        <FooterSite/>
        </>
    );

}
import  { Metadata } from "next"
import {
    HeaderSitev1,
    FooterSite,
    ItemResena,
} from "@/components"
import { PortadaResponse, PageResenaResponse,ResenaResponse } from "@/interfaces";
import Image from "next/image";
import { text } from "stream/consumers";
import { ContenidoResenas } from "@/components/resenas/contenidoResenas";

export const metadata:Metadata={
    title:"Sacha Cusco",
    description:"Resultado de busqueda",
    keywords:["Busqueda","Reserva","Hotel"]
}

export default async function Resena(){

  const username = process.env.NEXT_PUBLIC_API_USER;
  const password = process.env.NEXT_PUBLIC_API_PASS;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const auth = btoa(`${username}:${password}`);
  /*
    let url = "https://creasoft.com.pe/hotelier_api/pages/page-resena.json";
    let requestAPI: any = await fetch(url);
    requestAPI = await requestAPI.json();
    let PageResena: PageResenaResponse = requestAPI.payload["es"];*/


      let url = apiUrl+"/api/page-resenas";

      let requestAPI: any = await fetch(url,{
        method: "GET", // GET es el valor predeterminado
        headers: {
            Authorization: `Basic ${auth}`, // Encabezado de autenticación
            "Content-Type": "application/json" // Opcional, depende del servicio
        }
        });


        requestAPI = await requestAPI.json();
        let PageResena: PageResenaResponse = requestAPI.payload["es"];
/*
    let url_resenas = "https://creasoft.com.pe/hotelier_api/pages/list-comments-pag.json"
    let requestAPI_resena: any = await fetch(url_resenas);
    requestAPI_resena = await requestAPI_resena.json();
    let resenas: ResenaResponse = requestAPI_resena.payload["es"];*/

    // console.log(PageResena)

    return(
        <>
            <section className="ui_seccion_top_banner resenas"
                style={{
                    backgroundImage: `url("${PageResena.principal_section.image}")`,
                }}
            >
                <HeaderSitev1 />
                <div className="ui_texto_title_banner">
                    <h2 dangerouslySetInnerHTML={{ __html:PageResena.principal_section.title}}></h2>
                </div>
            </section>

          <ContenidoResenas PageResena={PageResena} re></ContenidoResenas>



            <FooterSite />


        </>
    );
}
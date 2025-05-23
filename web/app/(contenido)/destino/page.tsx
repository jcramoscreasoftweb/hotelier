import  { Metadata } from "next"
import {
    HeaderSitev1,
    FooterSite,
    ItemAtraccion,
    ItemAtraccionReverse,
} from "@/components"
import { DestinoResponse } from "@/interfaces";
import Image from "next/image";

export const metadata:Metadata={
    title:"Sacha Cusco",
    description:"Destino",
    keywords:["Destino","Cusco"]
}

export default async function Destino({ language = 'es' }:any){
    const username = process.env.NEXT_PUBLIC_API_USER;
    const password = process.env.NEXT_PUBLIC_API_PASS;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const auth = btoa(`${username}:${password}`);
    let url = apiUrl+"/api/page-destino";
    //let url = "https://creasoft.com.pe/hotelier_api/pages/page-destino.json";
    let requestAPI: any = await fetch(url,{
        method: "GET", // GET es el valor predeterminado
        headers: {
            Authorization: `Basic ${auth}`, // Encabezado de autenticación
            "Content-Type": "application/json" // Opcional, depende del servicio
        }
    });
    requestAPI = await requestAPI.json();
    let contenidoDestino: DestinoResponse = requestAPI.payload[language];

    return(
        <>
            <section className="ui_seccion_top_banner destino"
                style={{
                    backgroundImage: `url("${contenidoDestino.banner_section.image}")`,
                }}
            >
                <HeaderSitev1 language={language}/>
                <div className="ui_texto_title_banner">
                    <h2 dangerouslySetInnerHTML={{ __html:contenidoDestino.banner_section.title}}></h2>
                </div>
            </section>

            <section className="ui_seccion_1_destino">
                <div className="contenedor">
                    <Image width={598} height={132} src={contenidoDestino.first_section.image_1} alt="image-destino"/>
                    <p dangerouslySetInnerHTML={{ __html:contenidoDestino.first_section.description}}></p>

                    <div className="ui_images_seccion_1">
                        <Image className="img_mapa" width={345} height={503} src={contenidoDestino.first_section.image_2} alt=""/>
                        <Image className="img_text" width={398} height={392} src={contenidoDestino.first_section.image_text} alt=""/>
                    </div>


                </div>
            </section>

            <section className="ui_seccion_2_destino">
                <div className="contenedor">

                    <div className="ui_marco_titulo">
                        <Image width={62} height={60} src="/img/adorno_titulo_1.png" alt=""/>
                        <h2 dangerouslySetInnerHTML={{ __html:contenidoDestino.first_section.title_tourist}}></h2>
                        <Image width={62} height={60} src="/img/adorno_titulo_2.png" alt=""/>
                    </div>

                    {contenidoDestino.attractions_section.map((item, index) => {
                        if (index % 2 === 0) {
                            return (
                                <ItemAtraccion
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    subtitle={item.subtitle}
                                    image={item.image}
                                />
                            );
                        } else {
                            return (
                                <ItemAtraccionReverse
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    subtitle={item.subtitle}
                                    image={item.image}
                                />
                            );
                        }
                    })}
                </div>
            </section>

        <FooterSite language={language}/>
        </>
    );

}
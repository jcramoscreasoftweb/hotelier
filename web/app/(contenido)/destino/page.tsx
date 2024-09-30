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
    title:"Destino",
    description:"Destino",
    keywords:["Destino","Cusco"]
}

export default async function Destino(){
    let url = "https://creasoft.com.pe/hotelier_api/pages/page-destino.json";
    let requestAPI: any = await fetch(url);
    requestAPI = await requestAPI.json();
    let contenidoDestino: DestinoResponse = requestAPI.payload["es"];

    return(
        <>
            <section className="ui_seccion_top_banner destino"
                style={{
                    backgroundImage: `url("${contenidoDestino.banner_section.image}")`,
                }}
            >  
                <HeaderSitev1 />
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
            
        <FooterSite/>
        </>
    );

}
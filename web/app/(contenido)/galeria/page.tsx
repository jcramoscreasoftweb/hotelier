import  { Metadata } from "next"
import {
    HeaderSitev1,
    FooterSite,
} from "@/components"
import { GaleriaResponse } from "@/interfaces";
import Image from "next/image";
import { ItemEspaciosComunes, ItemHabitaciones, ItemRestaurantes } from "@/components/galeria/galeria";

export const metadata:Metadata={
    title:"Sacha Cusco",
    description:"Galería",
    keywords:["Galería","Galería"]
}

export default async function Galeria(){
    const username = process.env.NEXT_PUBLIC_API_USER;
    const password = process.env.NEXT_PUBLIC_API_PASS;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const auth = btoa(`${username}:${password}`);
    let url = apiUrl+"/api/page-galeria";
    //let url = "https://creasoft.com.pe/hotelier_api/pages/page-galeria.json";
    let requestAPI: any = await fetch(url,{
        method: "GET", // GET es el valor predeterminado
        headers: {
            Authorization: `Basic ${auth}`, // Encabezado de autenticación
            "Content-Type": "application/json" // Opcional, depende del servicio
        }
    });
    requestAPI = await requestAPI.json();
    let contenidoGaleria: GaleriaResponse = requestAPI.payload["es"];

    return(
        <>
            <section className="ui_seccion_top_banner galeria"
                style={{
                    backgroundImage: `url("${contenidoGaleria.pincipal_section.image}")`,
                }}
            >
                <HeaderSitev1 />
                <div className="ui_texto_title_banner">
                    <h2>{contenidoGaleria.pincipal_section.title}</h2>
                </div>
            </section>

            <section className="ui_seccion_1_galeria">
                <div className="contenedor">
                    <p dangerouslySetInnerHTML={{ __html:contenidoGaleria.pincipal_section.subtitle}}></p>
                </div>
            </section>

            <section className="ui_seccion_2_galeria">
                <div className="contenedor">

                    <div className="ui_row_item_galeria">
                        <div className="ui_marco_titulo">
                            <Image width={62} height={60} src="/img/adorno_titulo_1.png" alt=""/>
                            <h2>{contenidoGaleria.areas_section.title}</h2>
                            <Image width={62} height={60} src="/img/adorno_titulo_2.png" alt=""/>
                        </div>

                        <p dangerouslySetInnerHTML={{ __html:contenidoGaleria.areas_section.description}}></p>


                        <div className="ui_carrusel_item_galeria">
                                <ItemEspaciosComunes images={contenidoGaleria.areas_section.images}></ItemEspaciosComunes>
                        </div>
                    </div>

                    <div className="ui_row_item_galeria">
                        <div className="ui_marco_titulo">
                            <Image width={62} height={60} src="/img/adorno_titulo_1.png" alt=""/>
                            <h2>{contenidoGaleria.rooms_section.title}</h2>
                            <Image width={62} height={60} src="/img/adorno_titulo_2.png" alt=""/>
                        </div>

                        <p dangerouslySetInnerHTML={{ __html:contenidoGaleria.rooms_section.description}}></p>

                        <div className="ui_carrusel_item_galeria">

                            <ItemHabitaciones images={contenidoGaleria.rooms_section.images}></ItemHabitaciones>
                        </div>
                    </div>

                    <div className="ui_row_item_galeria">
                        <div className="ui_marco_titulo">
                            <Image width={62} height={60} src="/img/adorno_titulo_1.png" alt=""/>
                            <h2>{ contenidoGaleria.restaurant_section.title}</h2>
                            <Image width={62} height={60} src="/img/adorno_titulo_2.png" alt=""/>
                        </div>

                        <p dangerouslySetInnerHTML={{ __html:contenidoGaleria.restaurant_section.description}}></p>

                        <div className="ui_carrusel_item_galeria">

                        <ItemRestaurantes images={contenidoGaleria.restaurant_section.images}></ItemRestaurantes>

                        </div>
                    </div>
                </div>
            </section>
        <FooterSite/>
        </>
    );

}
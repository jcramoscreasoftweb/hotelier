import  { Metadata } from "next"
import {
    HeaderSitev1,
    FooterSite,
} from "@/components"
import { GaleriaResponse } from "@/interfaces";
import Image from "next/image";

export const metadata:Metadata={
    title:"Galería",
    description:"Galería",
    keywords:["Galería","Galería"]
}

export default async function Galeria(){
    let url = "https://creasoft.com.pe/hotelier_api/pages/page-galeria.json";
    let requestAPI: any = await fetch(url);
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
                    <p>{contenidoGaleria.pincipal_section.subtitle}</p>
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

                        <p>{contenidoGaleria.areas_section.description}</p>
                        
                        <div className="ui_carrusel_item_galeria">
                            {
                            contenidoGaleria.areas_section.images.map((item) => {
                                return (
                                    <div className="ui_item_slider">
                                        <Image width={364} height={480} src={item.image} alt="imagen-slider-galeria"/>
                                    </div>
                                );
                            })
                            }
                        </div>                        
                    </div>

                    <div className="ui_row_item_galeria">
                        <div className="ui_marco_titulo">
                            <Image width={62} height={60} src="/img/adorno_titulo_1.png" alt=""/>
                            <h2>{contenidoGaleria.rooms_section.title}</h2>
                            <Image width={62} height={60} src="/img/adorno_titulo_2.png" alt=""/>
                        </div>

                        <p>{contenidoGaleria.rooms_section.description}</p>
                        
                        <div className="ui_carrusel_item_galeria">
                            {
                            contenidoGaleria.rooms_section.images.map((item) => {
                                return (
                                    <div className="ui_item_slider">
                                        <Image width={364} height={480} src={item.image} alt="imagen-slider-galeria"/>
                                    </div>
                                );
                            })
                            }
                        </div>                        
                    </div>

                    <div className="ui_row_item_galeria">
                        <div className="ui_marco_titulo">
                            <Image width={62} height={60} src="/img/adorno_titulo_1.png" alt=""/>
                            <h2>{contenidoGaleria.restaurant_section.title}</h2>
                            <Image width={62} height={60} src="/img/adorno_titulo_2.png" alt=""/>
                        </div>

                        <p>{contenidoGaleria.restaurant_section.description}</p>
                        
                        <div className="ui_carrusel_item_galeria">
                            {
                            contenidoGaleria.restaurant_section.images.map((item) => {
                                return (
                                    <div className="ui_item_slider">
                                        <Image width={364} height={480} src={item.image} alt="imagen-slider-galeria"/>
                                    </div>
                                );
                            })
                            }
                        </div>                        
                    </div>

                </div>
            </section>


        <FooterSite/>
        </>
    );

}
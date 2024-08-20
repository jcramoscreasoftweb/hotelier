import  { Metadata } from "next"
import {
    HeaderSitev1,
    FooterSite,
} from "@/components"
import { ContactoResponse } from "@/interfaces";
import Image from "next/image";

export const metadata:Metadata={
    title:"Contacto",
    description:"Contacto",
    keywords:["Contacto","Contacto"]
}

export default async function Contacto(){
    let url = "https://creasoft.com.pe/hotelier_api/pages/page-contacto.json";
    let requestAPI: any = await fetch(url);
    requestAPI = await requestAPI.json();
    let contenidoContacto: ContactoResponse = requestAPI.payload["es"];

    return(
        <>
            <section className="ui_seccion_top_banner contacto"
                style={{
                    backgroundImage: `url("${contenidoContacto.banner_section.image}")`,
                }}
            >  
                <HeaderSitev1 />
                <div className="ui_texto_title_banner">
                    <h2>{contenidoContacto.banner_section.title}</h2>
                </div>
            </section>

            <section className="ui_seccion_1_contacto">
                <div className="contenedor">
                    <div className="ui_seccion_informacion">
                        <Image className="ui_image_top" width={99} height={87} src="/img/adorno_contacto_1.png" alt="imagen-contacto"></Image>
                        <div className="item_info">
                            <h2>Teléfono</h2>
                            <p>{contenidoContacto.info_section.phone}</p>
                        </div>
                        <div className="item_info">
                            <h2>Correo electrónico</h2>
                            <p>{contenidoContacto.info_section.email}</p>
                        </div>
                        <div className="item_info">
                            <h2>Dirección</h2>
                            <p>{contenidoContacto.info_section.address}</p>
                        </div>
                        <Image className="ui_image_bottom" width={71} height={83} src="/img/adorno_contacto_2.png" alt="imagen-contacto"></Image>
                        
                    </div>

                    <div className="ui_seccion_form">
                        <form action="">
                            <h2>{contenidoContacto.form_section.title}</h2>
                            <p>{contenidoContacto.form_section.subtitle}</p>

                            <div className="ui_input_form">
                                <span>Nombres y apellidos</span>
                                <input type="text" id="" name="" required/>
                            </div>

                            <div className="ui_input_form">
                                <span>Teléfono</span>
                                <div className="ui_selector_input">
                                    <select name="" id="">
                                        <option value="1">+ 51 Perú</option>
                                        <option value="2">+ 51 Perú</option>
                                        <option value="3">+ 51 Perú</option>
                                    </select>
                                    <input type="text" id="" name="" required/>
                                </div>
                                
                            </div>

                            <div className="ui_input_form">
                                <span>Correo electrónico</span>
                                <input type="text" id="" name="" required/>
                            </div>

                            <div className="ui_input_form">
                                <span>Mensaje</span>
                                <textarea id="" name="" maxLength={220} required/>
                            </div>

                            <div className="ui_input_form">
                                <button>Enviar</button>
                            </div>
                        </form>

                    </div>

                </div>
            </section>

            <section className="ui_seccion_2_contacto">
                <div className="contenedor">
                    <div className="ui_marco_titulo">
                        <Image
                        src="/img/adorno_titulo_1.png"
                        width={62}
                        height={60}
                        alt=""
                        />
                        <h2>{contenidoContacto.map_section.title}</h2>
                        <Image
                            alt=""
                            src="/img/adorno_titulo_2.png"
                            width={62}
                            height={60}
                        />
                    </div>

                    <div className="ui_iframe_map">
                        {/* {contenidoContacto.map_section.iframe} */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1939.6390205340806!2d-71.975219!3d-13.518521!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd60b49c33447%3A0xcf7823c6c7d3904!2sC.%20San%20Agustin%20345%2C%20Cusco%2008002!5e0!3m2!1ses!2spe!4v1724175191179!5m2!1ses!2spe" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        
                    </div>

                </div>

            </section>



        <FooterSite/>
        </>
    );

}
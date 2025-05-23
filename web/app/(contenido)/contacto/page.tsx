import  { Metadata } from "next"
import {
    HeaderSitev1,
    FooterSite,
} from "@/components"
import { ContactoResponse, PhoneCodeResponse } from "@/interfaces";
import Image from "next/image";
import { FormularioContacto } from "@/components/contacto/formularioContacto";

export const metadata:Metadata={
    title:"Sacha Cusco",
    description:"Contacto",
    keywords:["Contacto","Contacto"]
}

export default async function Contacto({ language = 'es' }:any){

    const username = process.env.NEXT_PUBLIC_API_USER;
    const password = process.env.NEXT_PUBLIC_API_PASS;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const auth = btoa(`${username}:${password}`);



    let url = apiUrl+"/api/page-contacto";
    let requestAPI: any = await fetch(url,{
        method: "GET", // GET es el valor predeterminado
        headers: {
            Authorization: `Basic ${auth}`, // Encabezado de autenticación
            "Content-Type": "application/json" // Opcional, depende del servicio
        }
    });
    requestAPI = await requestAPI.json();
    let contenidoContacto: ContactoResponse = requestAPI.payload[language];


    let url_phonecode =apiUrl+"/api/list-countries";
    let requestAPI_phone: any = await fetch(url_phonecode,{
        method: "GET", // GET es el valor predeterminado
        headers: {
            Authorization: `Basic ${auth}`, // Encabezado de autenticación
            "Content-Type": "application/json" // Opcional, depende del servicio
        }
    });
    requestAPI_phone = await requestAPI_phone.json();
    let phoneCode: PhoneCodeResponse[] = requestAPI_phone.payload[language];

    return(
        <>
            <section className="ui_seccion_top_banner contacto"
                style={{
                    backgroundImage: `url("${contenidoContacto.banner_section.image}")`,
                }}
            >
                <HeaderSitev1 language={language}/>
                <div className="ui_texto_title_banner">
                    <h2>{contenidoContacto.banner_section.title}</h2>
                </div>
            </section>

            <section className="ui_seccion_1_contacto">
                <div className="contenedor">
                    <div className="ui_seccion_informacion">
                        <Image className="ui_image_top" width={99} height={87} src="/img/adorno_contacto_1.png" alt="imagen-contacto"></Image>
                        <div className="item_info">
                            <h2>{contenidoContacto.form_section.label_phone}</h2>
                            <p dangerouslySetInnerHTML={{ __html:contenidoContacto.info_section.phone}}></p>
                        </div>
                        <div className="item_info">
                            <h2>{contenidoContacto.form_section.label_phone}</h2>
                            <p dangerouslySetInnerHTML={{ __html:contenidoContacto.info_section.email}}></p>
                        </div>
                        <div className="item_info">
                            <h2>{contenidoContacto.form_section.label_address}</h2>
                            <p dangerouslySetInnerHTML={{ __html:contenidoContacto.info_section.address}}></p>
                        </div>
                        <Image className="ui_image_bottom" width={71} height={83} src="/img/adorno_contacto_2.png" alt="imagen-contacto"></Image>
                    </div>

                    <div className="ui_seccion_form">
                      <FormularioContacto contenidoContacto={contenidoContacto} phoneCode={phoneCode}></FormularioContacto>

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

                    <div className="ui_iframe_map" dangerouslySetInnerHTML={{ __html:contenidoContacto.map_section.iframe}}>
                    </div>

                </div>

            </section>

            {/* <!-- MODAL CONTACTO --> */}

            {/* <!-- END MODAL CONTACTO--> */}

            <FooterSite language={language}/>
        </>
    );

}
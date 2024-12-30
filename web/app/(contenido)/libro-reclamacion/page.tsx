
import { Metadata } from "next"
import { HeaderSitev2, FooterSite} from "@/components"
import { ReclamoResponse,PhoneCodeResponse} from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

import FormularioLibro from "@/components/libro-reclamaciones/formularios";

export const metadata:Metadata={
    title:"Sacha Cusco",
    description:"Libro de reclamación",
    keywords:["libro","reclamos"]
}
export default async function LibroReclamaciones() {




  const username = process.env.NEXT_PUBLIC_API_USER;
  const password = process.env.NEXT_PUBLIC_API_PASS;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const auth = btoa(`${username}:${password}`);


  let url = apiUrl+"/api/page-reclamos";

  let requestAPI: any = await fetch(url,{
    method: "GET", // GET es el valor predeterminado
    headers: {
        Authorization: `Basic ${auth}`, // Encabezado de autenticación
        "Content-Type": "application/json" // Opcional, depende del servicio
    }
    });


    requestAPI = await requestAPI.json();
    let contenidoReclamos: ReclamoResponse = requestAPI.payload["es"];





    let url_phonecode = apiUrl+"/api/list-countries";

  let requestAPI_phone: any = await fetch(url_phonecode,{
    method: "GET", // GET es el valor predeterminado
    headers: {
        Authorization: `Basic ${auth}`, // Encabezado de autenticación
        "Content-Type": "application/json" // Opcional, depende del servicio
    }
    });


    requestAPI_phone = await requestAPI_phone.json();
    let phoneCode: PhoneCodeResponse[] = requestAPI_phone.payload["es"];

  return (
    <>
      <HeaderSitev2 />

      <div className="contenedor page_reclamos">
        <section className="ui_seccion_1_reclamos">
            <h1>{contenidoReclamos.principal_section.title}</h1>
            <p>{contenidoReclamos.principal_section.subtitle}</p>

           <FormularioLibro contenidoReclamos={contenidoReclamos} phoneCode={phoneCode}></FormularioLibro>
        </section>
      </div>

      {/* <!-- MODAL CONTACTO --> */}

      {/* <!-- END MODAL CONTACTO--> */}

      <FooterSite />

    </>
  )
}
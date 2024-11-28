
import  { Metadata } from "next"
import {FooterSite,HeaderSitev2} from "@/components"

import Script from 'next/script';
import { ContenidoBusquedaHabitacion } from "@/components/busqueda-habitaciones/componentes";


export const metadata:Metadata={
    title:"Resultado de busqueda",
    description:"Resultado de busqueda",
    keywords:["Busqueda","Reserva","Hotel"]
}
export default function BusquedaNueva() {


return(<>

        <HeaderSitev2 />

            <ContenidoBusquedaHabitacion></ContenidoBusquedaHabitacion>
        <FooterSite />
        <Script src="js/jquery.js"  strategy="beforeInteractive"  />
        <Script src="js/busqueda.js"  strategy="afterInteractive"  />
    </>
    )
}
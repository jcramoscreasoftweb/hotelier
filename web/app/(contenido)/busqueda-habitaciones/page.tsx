
import  { Metadata } from "next"
import {FooterSite,HeaderSitev2} from "@/components"
import {  Suspense } from "react";
import { ContenidoBusquedaHabitacion } from "@/components/busqueda-habitaciones/componentes";
import { DetalleBusqueda } from "@/components/busqueda-habitaciones/detalleBusqueda";


export const metadata:Metadata={
    title:"Sacha Cusco",
    description:"Resultado de busqueda",
    keywords:["Busqueda","Reserva","Hotel"]
}
export default function BusquedaNueva({ language = 'es' }:any) {


return(<>
        <HeaderSitev2  language={language}/>
        <Suspense fallback={<div></div>}>
        {/*<ContenidoBusquedaHabitacion></ContenidoBusquedaHabitacion>*/}
            <DetalleBusqueda  language={language}></DetalleBusqueda>
        </Suspense>

        <FooterSite  language={language}/>

    </>
    )
}
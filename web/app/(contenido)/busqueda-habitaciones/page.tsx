
import  { Metadata } from "next"
import {FooterSite,HeaderSitev2} from "@/components"
import {  Suspense } from "react";
import { ContenidoBusquedaHabitacion } from "@/components/busqueda-habitaciones/componentes";


export const metadata:Metadata={
    title:"Sacha Cusco",
    description:"Resultado de busqueda",
    keywords:["Busqueda","Reserva","Hotel"]
}
export default function BusquedaNueva() {


return(<>
        <HeaderSitev2 />
        <Suspense fallback={<div></div>}>
        <ContenidoBusquedaHabitacion></ContenidoBusquedaHabitacion>
        </Suspense>

        <FooterSite />

    </>
    )
}
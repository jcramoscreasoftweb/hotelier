
import  { Metadata } from "next"
import {FooterSite,HeaderSitev2} from "@/components"

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

    </>
    )
}
import React, { Suspense } from "react";
import { PageBusquedaResponse } from "@/interfaces";
import Image from "next/image";

import { BusquedaHabitaciones } from "./busquedaHabitaciones";
import { BuscarFechasHabitaciones } from "./buscadorFechaHabitaciones";

export const ListadoHabitaciones =  ({contenidoBusqueda}:any)=> {

    return (
        <>
         <div className="contenedor page_busqueda">
                <section className="ui_seccion_1_busqueda">
                <div className="ui_marco_opciones_home no-position">
                    <BuscarFechasHabitaciones contenidoBusqueda={contenidoBusqueda}></BuscarFechasHabitaciones>
                </div>
                </section>


                    <BusquedaHabitaciones contenidoBusqueda={contenidoBusqueda}></BusquedaHabitaciones>

         </div>
        </>
    )

}
export const HabitacionesNoDisponible =   ({contenidoBusqueda}:any)=> {


    return (
        <>
            <div className="contenedor page_busqueda">
                <section className="ui_seccion_1_busqueda">
                <div className="ui_marco_opciones_home no-position">
                    <BuscarFechasHabitaciones contenidoBusqueda={contenidoBusqueda}></BuscarFechasHabitaciones>
                </div>
                </section>

                <section className="ui_mensaje_habitaciones_no_encontradas">
                    <h2>Recuerda que debes ingresar los datos para poder realizar la busqueda</h2>
                </section>
            </div>

        </>
    )
}

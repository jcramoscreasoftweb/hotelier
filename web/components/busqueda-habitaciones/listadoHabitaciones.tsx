import React, { Suspense } from "react";
import { PageBusquedaResponse } from "@/interfaces";
import Image from "next/image";
import { ListadoTipoHabitacion } from "../busqueda/busqueda";

export const ListadoHabitaciones = async ()=> {

    return (
        <>
        <h2>Habitaciones disponibles</h2>
        </>
    )

}
export const HabitacionesNoDisponible =  async ()=> {
    <Suspense fallback={<div>Cargando habitaciones disponibles...</div>}>
        <DetalleHabitacionesNoDisponible />
    </Suspense>

}
 const DetalleHabitacionesNoDisponible =  async ()=> {
    let url = "https://creasoft.com.pe/hotelier_api/pages/page-busqueda.json?v56";
    let requestAPI: any = await fetch(url, { cache: 'force-cache' });
    requestAPI = await requestAPI.json();
    let contenidoBusqueda: PageBusquedaResponse = requestAPI.payload["es"];
    return (
        <>
                <h2>No hay habitaciones disponibles</h2>
        </>
    )

}
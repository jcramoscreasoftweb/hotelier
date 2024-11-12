'use client'
import { useSearchParams } from 'next/navigation'
import { HabitacionesNoDisponible, ListadoHabitaciones } from './listadoHabitaciones';

export const ContenidoBusquedaHabitacion =  () => {

    const searchParams = useSearchParams()

    const adults = searchParams.get('adults')
    const children = searchParams.get('children')
    const date_in = searchParams.get('checkin')
    const date_out = searchParams.get('checkout')


    let estado_parametros=false
    if(adults=="0"  || children=="0" || date_in?.length==0 || date_out?.length==0){

    }else{
        estado_parametros=true;

    }

    return (
        <>

            {estado_parametros ? <ListadoHabitaciones /> : <HabitacionesNoDisponible />}

        </>
    )
}
'use client'
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'
import { HabitacionesNoDisponible, ListadoHabitaciones } from './listadoHabitaciones';

export const ContenidoBusquedaHabitacion =  () => {

    const [data, setData] = useState(null);        // Estado para almacenar los datos
    const [loading, setLoading] = useState(true);   // Estado para el indicador de carga
    const [error, setError] = useState(null);

    const searchParams = useSearchParams()

    const adults = searchParams.get('adults')
    const children = searchParams.get('children')
    const date_in = searchParams.get('date_in')
    const date_out = searchParams.get('date_out')
    let serarch_parameters:any={};

    serarch_parameters.data=false;
    let estado_parametros=false
    if(adults=="0" ||  date_in?.length==0 || date_out?.length==0){

    }else{
        serarch_parameters.adults=adults;
        serarch_parameters.children=children;
        serarch_parameters.date_in=date_in;
        serarch_parameters.date_out=date_out;
        serarch_parameters.data=true;
        estado_parametros=true;


    }


    useEffect(() => {
        // Función para obtener los datos de la API
        const fetchData = async () => {
            try {
                const response = await fetch("https://creasoft.com.pe/hotelier_api/pages/page-busqueda.json?v56");
                if (!response.ok) throw new Error('Error en la solicitud');
                const result = await response.json();
                setData(result.payload["es"]); // Asigna los datos obtenidos al estado
            } catch (error:any) {
                setError(error?.message);       // Asigna el mensaje de error al estado
            } finally {
                setLoading(false);             // Finaliza el indicador de carga
            }
        };

        fetchData(); // Llama a la función de fetch
    }, []);

    //if (loading) return <<div>Cargando habitaciones...</div>>; // Indicador de carga
    //if (error) return <div>Error: {error}</div>;             // Mensaje de error*/
    if (loading) return <></>; // Indicador de carga
    if (error) return <></>;             // Mensaje de error*/



    return (
        <>

            {estado_parametros ? <ListadoHabitaciones  serarch_parameters={ serarch_parameters} contenidoBusqueda={data}/> : <HabitacionesNoDisponible serarch_parameters= { serarch_parameters}  contenidoBusqueda={data}/>}

        </>
    )
}
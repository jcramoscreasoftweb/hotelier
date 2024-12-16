"use client";
import { useEffect, useState ,Suspense } from "react";

import { useSearchParams } from 'next/navigation'
import { ItemHabitacionBusqueda } from "./busquedaItemHabitacion";

export const BusquedaHabitaciones=({contenidoBusqueda}:any)=>{
    const [dataHabitaciones, setDataHabitaciones] = useState<string[]>([]);        // Estado para almacenar los datos
    const [loading, setLoading] = useState(true);   // Estado para el indicador de carga
    const [error, setError] = useState(null);
    const [records, setrecords] = useState(false);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const searchParams = useSearchParams()

    useEffect(() => {
        // Función para obtener los datos de la API
        const fetchData = async () => {
            try {
                const username = process.env.NEXT_PUBLIC_API_USER;
                const password = process.env.NEXT_PUBLIC_API_PASS;

                // Codifica las credenciales en Base64
                const auth = btoa(`${username}:${password}`);

                const response = await fetch(`${apiUrl}/api/search-typerooms?${searchParams.toString()}`,{
                    method: "GET", // GET es el valor predeterminado
                    headers: {
                        Authorization: `Basic ${auth}`, // Encabezado de autenticación
                        "Content-Type": "application/json" // Opcional, depende del servicio
                    }
                } );
                //const response = await fetch(`https://creasoft.com.pe/hotelier_api/pages/search-typerooms.json?V4`);
                if (!response.ok) throw new Error('Error en la solicitud');

                const result = await response.json();

                //console.log(result);
                setrecords(result.records)
                setDataHabitaciones(result.payload["es"]); // Asigna los datos obtenidos al estado
            } catch (error:any) {
                setError(error.message);       // Asigna el mensaje de error al estado
            } finally {
                setLoading(false);             // Finaliza el indicador de carga
            }
        };

        fetchData(); // Llama a la función de fetch
    }, []); // Dependencia vacía para ejecutar solo en el montaje

    if (loading) return <div></div>; // Indicador de carga
    if (error) return <div></div>;
    if(!records) return <>  <section className="ui_mensaje_habitaciones_no_encontradas">
                            <h2>No se encontaron habitaciones con los valores seleccionados</h2>
                            </section></> ;          // Mensaje de error

    return (
        <>
        <Suspense fallback={<div></div>}>
        {
        dataHabitaciones.map((item:any)=> {
             return(
                <ItemHabitacionBusqueda key={item.id_tp_room} item={item} contenidoBusqueda={contenidoBusqueda}></ItemHabitacionBusqueda>
            );


        })

        }
        </Suspense>
      </>


    );



    /*let url = "https://creasoft.com.pe/hotelier_api/pages/search-typerooms.json?V4";
    let contenido = await fetch(url);
    let data = await contenido.json();
    let tipoHabitacion: BusquedaResponse[] = data.payload["es"];*/

}

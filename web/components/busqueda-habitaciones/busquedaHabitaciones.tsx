"use client";
import { useEffect, useState } from "react";
import { ItemHabitacionBusqueda } from "../busqueda/itemHabitacionBusqueda";
import { useSearchParams } from 'next/navigation'

export const BusquedaHabitaciones=({contenidoBusqueda}:any)=>{
    const [dataHabitaciones, setDataHabitaciones] = useState(null);        // Estado para almacenar los datos
    const [loading, setLoading] = useState(true);   // Estado para el indicador de carga
    const [error, setError] = useState(null);
    const [records, setrecords] = useState(false);


    const searchParams = useSearchParams()

    useEffect(() => {
        // Función para obtener los datos de la API
        const fetchData = async () => {
            try {
                const username = "#|~4139h*II7yN@";
                const password = "r)qFV.Ey8W6PX5>";

                // Codifica las credenciales en Base64
                const auth = btoa(`${username}:${password}`);

                const response = await fetch(`https://cuddly-turkeys-ring.loca.lt/api/search-typerooms?${searchParams.toString()}`,{
                    method: "GET", // GET es el valor predeterminado
                    headers: {
                        Authorization: `Basic ${auth}`, // Encabezado de autenticación
                        "Content-Type": "application/json" // Opcional, depende del servicio
                    }
                } );
                if (!response.ok) throw new Error('Error en la solicitud');

                const result = await response.json();
                console.log(result.payload["es"]);
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

        {dataHabitaciones.map((item:any)=> {
             return(
                <ItemHabitacionBusqueda key={item.id_room} item={item} contenidoBusqueda={contenidoBusqueda}></ItemHabitacionBusqueda>
            );


        })}
      </>


    );



    /*let url = "https://creasoft.com.pe/hotelier_api/pages/search-typerooms.json?V4";
    let contenido = await fetch(url);
    let data = await contenido.json();
    let tipoHabitacion: BusquedaResponse[] = data.payload["es"];*/

}

const ListadoBusqueda= ()=>{
return (<></>)
}
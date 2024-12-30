"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

import NuevoBuscadorFechaHabitaciones from "./buscadorFechaHabitaciones"
import { HabitacionesBusqueda } from "./habitacionesBusqueda";
import { Loadingv2 } from "../generales/loading";




export const DetalleBusqueda = ()=> {

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const username = process.env.NEXT_PUBLIC_API_USER;
    const password = process.env.NEXT_PUBLIC_API_PASS;

   const searchParams = useSearchParams();

const startDate = searchParams.get("startDate");
const endDate = searchParams.get("endDate");
const adults = parseInt(searchParams.get("adults") || "1", 10);
const children = parseInt(searchParams.get("children") || "0", 10);

 // Estados para manejar la respuesta de la API
 const [dataHabitaciones, setDataHabitaciones] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const [dataPagina, setDataPagina] = useState(null);


 const [selectedPrice, setSelectedPrice] = useState({});


 useEffect(() => {



    // Solo realizar la llamada si los parámetros están definidos
    if (startDate && endDate && adults) {

      const fetchData = async () => {
        try {
          setLoading(true); // Iniciar carga



         const auth = btoa(`${username}:${password}`);

          let par_start_date:any=startDate.split("/");
          let par_end_date:any=endDate.split("/");
          par_start_date=par_start_date[2]+"-"+par_start_date[0]+"-"+par_start_date[1];
          par_end_date=par_end_date[2]+"-"+par_end_date[0]+"-"+par_end_date[1];



         const response = await fetch(`${apiUrl}/api/search-typerooms?date_in=${par_start_date}&date_out=${par_end_date}&adults=${adults}&children=${children}}`,{
              method: "GET", // GET es el valor predeterminado
              headers: {
                  Authorization: `Basic ${auth}`, // Encabezado de autenticación
                  "Content-Type": "application/json" // Opcional, depende del servicio
              }
          } );



          if (!response.ok) {
            throw new Error("Error al obtener los datos");
          }

          const result = await response.json();

          if(result.records){
            setDataHabitaciones(result.payload["es"]); // Almacenar los resultados
          }else{
            setDataHabitaciones(null);
            // no hay registros
          }
          //setDataHabitaciones(result); // Almacenar los resultados
        } catch (error:any) {

          setError(error.message); // Manejar errores
        } finally {
          setLoading(false); // Finalizar carga
        }
      };

      fetchData();
    }
  }, [startDate, endDate, adults, children]);




  useEffect(() => {
    // Función para obtener los datos de la API
    const fetchData = async () => {
        try {
          const auth = btoa(`${username}:${password}`);

          const response = await fetch(`${apiUrl}/api/page-busqueda`,{
               method: "GET", // GET es el valor predeterminado
               headers: {
                   Authorization: `Basic ${auth}`, // Encabezado de autenticación
                   "Content-Type": "application/json" // Opcional, depende del servicio
               }
           } );


            //const response = await fetch("https://creasoft.com.pe/hotelier_api/pages/page-busqueda.json?v56");
            if (!response.ok) throw new Error('Error en la solicitud');
            const result = await response.json();
            setDataPagina(result.payload["es"]); // Asigna los datos obtenidos al estado
        } catch (error:any) {
            //setError(error?.message);       // Asigna el mensaje de error al estado
        } finally {
            //setLoading(false);             // Finaliza el indicador de carga
        }
    };

    fetchData(); // Llama a la función de fetch
}, []);

//if (loading) return <<div>Cargando habitaciones...</div>>; // Indicador de carga
//if (error) return <div>Error: {error}</div>;             // Mensaje de error*/
//if (loading) return <>23123123123</>; // Indicador de carga
//if (error) return <></>;             // Mensaje de error*/

    return (
        <>
            <div className="contenedor page_busqueda">
                <section className="ui_seccion_1_busqueda">
                   <div className="ui_marco_opciones_home no-position">
                       <NuevoBuscadorFechaHabitaciones
                        initialStartDate={startDate}
                        initialEndDate={endDate}
                        initialAdults={adults}
                        initialChildren={children}
                        ></NuevoBuscadorFechaHabitaciones>
                    </div>
                </section>
                {loading && <Loadingv2></Loadingv2> }

                {!loading && dataHabitaciones &&
                  <>
                    <HabitacionesBusqueda habitaciones={dataHabitaciones} contenidoBusqueda={dataPagina} startDate={startDate} endDate={endDate} adults={adults} children={children}></HabitacionesBusqueda>

                  </>}
                  { !loading && dataHabitaciones==null &&
                  <>
                  <section className="ui_mensaje_habitaciones_no_encontradas">
                      <h2>No se han encontrado resultados para tu busqueda, intenta cambiar los datos para la busqueda.</h2>
                  </section>
                  </>

                  }

             </div>


        </>
    )
}
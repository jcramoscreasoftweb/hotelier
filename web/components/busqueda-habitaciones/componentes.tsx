'use client'
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'
import { HabitacionesNoDisponible, ListadoHabitaciones } from './listadoHabitaciones';
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importa los estilos básicos de Swiper
import "swiper/css/navigation"; // Importa estilos adicionales si usas la navegación
import { Navigation, Pagination } from "swiper/modules"; // Importa módulos específicos


export const ContenidoBusquedaHabitacion =  () => {

    const [data, setData] = useState(null);        // Estado para almacenar los datos
    const [loading, setLoading] = useState(true);   // Estado para el indicador de carga
    const [error, setError] = useState(null);

    const searchParams = useSearchParams()

    const adults = searchParams.get('adults')
    const children = searchParams.get('children')
    const date_in = searchParams.get('date_in')
    const date_out = searchParams.get('date_out')
 

    /*console.log(typeof (adults));
    console.log(children);
    console.log(date_in);
    console.log(date_out);*/
    let estado_parametros=false
    if(adults=="0" ||  date_in?.length==0 || date_out?.length==0){

    }else{

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

            {estado_parametros ? <ListadoHabitaciones contenidoBusqueda={data}/> : <HabitacionesNoDisponible contenidoBusqueda={data}/>}

        </>
    )
}

export const ItemServicioHabitacion = ({ icon, name }: any) => {
    return (
        <span>
            <Image width={20} height={20} src={icon} alt=""/>
            {name}
        </span>

    );

}


export const CarouselFotosHabitacion = ({ img_portada, images }: any) => {

    return <>
        {
              <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >

              <SwiperSlide>
                <div className="item_carrusel">
                  <Image width={500} height={280} src={img_portada} alt="image-habitacion" />
                </div>
              </SwiperSlide>


            {  images.map((item:any) => {
              return (
                <SwiperSlide key={item.url}>
                  <div     className="item_carrusel">
                    <Image width={500} height={280} src={item.url} alt="image-habitacion" />
                  </div>

                </SwiperSlide>

              );
            })}


              {/* Añade más slides según necesites */}
              </Swiper>


        }
    </>
}
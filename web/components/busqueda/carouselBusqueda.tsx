"use client"
import Image from "next/image";
// components/Carousel.js
 // Si estás usando Next.js 13 o superior con React Server Components

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importa los estilos básicos de Swiper
import "swiper/css/navigation"; // Importa estilos adicionales si usas la navegación
import { Navigation, Pagination } from "swiper/modules"; // Importa módulos específicos


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

              <SwiperSlide  key={img_portada}>
                <div className="item_carrusel">
                  <Image width={500} height={280} src={img_portada} alt="image-habitacion" />
                </div>
              </SwiperSlide>


            {  images.map((item:any,index:any) => {
              return (
                <SwiperSlide key={index}>
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
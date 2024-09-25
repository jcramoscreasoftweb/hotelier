"use client"
import Image from "next/image";
// components/Carousel.js
 // Si estás usando Next.js 13 o superior con React Server Components

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importa los estilos básicos de Swiper
import "swiper/css/navigation"; // Importa estilos adicionales si usas la navegación
import { Navigation, Pagination } from "swiper/modules"; // Importa módulos específicos

export const ItemEspaciosComunes = ({ images }: any) => {

    return <>
        {
              <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1250: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >
            {  images.map((item:any) => {
              return (
                <SwiperSlide  key={item.name}>
                 <div className="ui_item_slider" key={item.name}>
                        <Image width={364} height={480} src={item.image} alt="imagen-slider-galeria" />
                    </div>
              </SwiperSlide>

              );
            })}


              {/* Añade más slides según necesites */}
              </Swiper>


        }
    </>
}

export const ItemHabitaciones = ({ images }: any) => {

  return <>
      {
            <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1250: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
          {  images.map((item:any) => {
            return (
              <SwiperSlide key={item.name}>
               <div className="ui_item_slider" key={item.name}>
                      <Image width={364} height={480} src={item.image} alt="imagen-slider-galeria" />
                  </div>
            </SwiperSlide>

            );
          })}


            {/* Añade más slides según necesites */}
            </Swiper>


      }
  </>
}

export const ItemRestaurantes = ({ images }: any) => {

  return <>
      {
            <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1250: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
          {  images.map((item:any) => {
            return (
              <SwiperSlide key={item.name}>
               <div className="ui_item_slider" key={item.name}>
                      <Image width={364} height={480} src={item.image} alt="imagen-slider-galeria" />
                  </div>
            </SwiperSlide>

            );
          })}


            {/* Añade más slides según necesites */}
            </Swiper>


      }
  </>
}

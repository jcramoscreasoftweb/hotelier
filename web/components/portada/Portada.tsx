"use client";
import Image from "next/image";
// components/Carousel.js
 // Si estás usando Next.js 13 o superior con React Server Components

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importa los estilos básicos de Swiper
import "swiper/css/navigation"; // Importa estilos adicionales si usas la navegación
import { Navigation, Pagination } from "swiper/modules"; // Importa módulos específicos


export const ItemBeneficios = ({ titulo, icon }: any) => {
  return (
    <>
      <div className="ui_item-beneficio">
        <Image width={355} height={525} src={icon} alt="" />
        <p className="ui_titulo">{titulo}</p>
      </div>
    </>
  );
};

export const ItemBeneficiosNuevo = ({ hotel_section }: any) => {

    return (
     <>

          <Swiper className="ui_carousel_beneficios"
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1, // 1 slide en pantallas pequeñas
                spaceBetween: 50,
              },
              // Cuando la ventana tiene >= 768px
              768: {
                slidesPerView: 2, // 2 slides en pantallas medianas
                spaceBetween: 40,
              },
              // Cuando la ventana tiene >= 1024px
              1250: {
                slidesPerView: 3, // 3 slides en pantallas grandes
                spaceBetween: 50,
              },
            }}
          >
        {hotel_section.map((item:any) => {
          return (
            <SwiperSlide key={item.title}>
              <div className="ui_item-beneficio">
                <Image width={355} height={525} src={item.icon} alt="image-beneficio" />
                <p className="ui_titulo">{item.title}</p>
              </div>
            </SwiperSlide>

          );
        })}


          {/* Añade más slides según necesites */}
          </Swiper>

      </>
    );

};

export const ItemServicio = ({ titulo, descripcion, image }: any) => {
  return (
    <>
      <div className="ui_item">
        <div>
          <h3>{titulo}</h3>
          <p>{descripcion}</p>
        </div>
        <div>
          <Image width={65} height={60} src={image} alt="" />
        </div>
      </div>
    </>
  );
};

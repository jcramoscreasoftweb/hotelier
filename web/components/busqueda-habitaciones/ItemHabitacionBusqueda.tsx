"use client";
import { BusquedaResponse, PageBusquedaResponse } from "@/interfaces";
import Image from "next/image";
import { ItemServicioHabitacion } from "./busqueda";

import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { CarouselFotosHabitacion } from "./carouselBusqueda";
import { ModalDetalleRoom, ModalServiciosAdicionales } from "./modalesBusqueda";



export const ItemHabitacionBusqueda = ({item,contenidoBusqueda}:any) => {
  const router = useRouter()

    const [selectedRoom, setSelectedRoom] = useState(null); // Para manejar el producto seleccionado
    const [isModalOpen, setIsModalOpen] = useState(false); // Para controlar la visibilidad del modal

    const handleRoomClick = (room:any) => {
        setSelectedRoom(room);
      setIsModalOpen(true); // Abre el modal
    };

    const [modalServiciosAdcionales, setModalServiciosAdcionales] = useState(false);

    const closeModal = () => {
      setIsModalOpen(false); // Cierra el modal
      setModalServiciosAdcionales(false); // Cierra el modal
      setSelectedRoom(null); // Resetea el producto seleccionado
    };




    const bookingRoom=()=>{
      router.push('/detalle')
    }

    return (
        <>
          <div className="ui_item_habitacion"  key={item.id}>
                        <div className="ui_info_habitacion">
                            <h2 className="ui_titulo_habitacion" >
                                {item.name}
                            </h2>
                            <div className="marco_carousel_fotos_habitacion">
                                <div className="carousel_fotos_habitacion">
                                <CarouselFotosHabitacion img_portada={item.image} images={item.images_carrusel}></CarouselFotosHabitacion>
                                </div>

                            </div>

                            <div className="ui_habitacion_detalle">

                                <div className="ui_habitacion_info">
                                    <span><Image width={20} height={20} src="/img/icon_bed.png" alt=""/>{item.bed}</span>
                                    <span><Image width={20} height={20} src="/img/icon_area.png" alt=""/>{item.dimensions} m²</span>
                                    <span><Image width={20} height={20} src="/img/icon_adultos.png" alt=""/>{item.num_adults} {contenidoBusqueda.card_room.label_adults} </span>
                                    <span><Image width={20} height={20} src="/img/icon_adultos.png" alt=""/>{item.num_children} {contenidoBusqueda.card_room.label_children} </span>
                                </div>
                                <div className="ui_habitacion_check">
                                    <span><Image width={20} height={20} src="/img/icon_hora.png" alt=""/>{contenidoBusqueda.card_room.label_checkin}: {item.check_in}</span>
                                    <span><Image width={20} height={20} src="/img/icon_hora.png" alt=""/>{contenidoBusqueda.card_room.label_checkout}: {item.check_out}</span>
                                </div>
                            </div>

                            <div className="ui_separador_detalle"></div>
                            <div className="ui_habitacion_detalle_servicio">
                                    {item.services.map((service:any) =>{
                                        return(
                                            <ItemServicioHabitacion
                                                key={service.name}
                                                icon={service.image}
                                                name={service.name}
                                            />
                                        );
                                    })}
                            </div>
                            <div className="ui_ver_mas">
                                <span  onClick={() => handleRoomClick(item)}>{contenidoBusqueda.card_room.label_see_more}</span>
                                <Image width={20} height={20} src="/img/btn_siguiente.png" alt=""/>
                            </div>
                        </div>

                        <div className="ui_info_habitacion_precio">
                            <p className="ui_titulo_bloque">{contenidoBusqueda.card_room.title_price}</p>
                            <div className="ui_item_precio" >
                                <div>
                                    <span className="ui_subtitulo">{contenidoBusqueda.card_room.tp_payment_1}</span>
                                    <p className="ui_detalle_texto">{contenidoBusqueda.card_room.payment1_description}</p>
                                    <span className="ui_info_noches">3 {contenidoBusqueda.card_room.label_night}</span>
                                </div>
                                <div>
                                    <span className="ui_info_precio">US$ {item.price_web}</span>
                                </div>
                            </div>
                            <div className="ui_item_precio">
                                <div>
                                    <span className="ui_subtitulo">{contenidoBusqueda.card_room.tp_payment_2}</span>
                                    <p className="ui_detalle_texto">{contenidoBusqueda.card_room.payment2_description}</p>
                                    <span className="ui_info_noches">3 {contenidoBusqueda.card_room.label_night}</span>
                                </div>
                                <div>
                                    <span className="ui_info_precio">US$ {item.price_hotel}</span>
                                </div>
                            </div>


                            <div className="ui_otras_plataformas">
                                <div className="ui_titulo">
                                    <span>{contenidoBusqueda.card_room.label_others}</span>
                                </div>
                                <div className="ui_item_otro">
                                    <Image width={102} height={16} src="/img/icon_booking.png" alt="icon-price"/>
                                    <span>US$ {item.price_booking}</span>
                                </div>
                                <div className="ui_item_otro">
                                    <Image width={85} height={16} src="/img/icon_expedia.png" alt="icon-price"/>
                                    <span>US$ {item.price_expedia}</span>
                                </div>

                            </div>
                            <div  onClick={() =>  setModalServiciosAdcionales(true)} className="ui_btn_item_reservar_habitacion">
                                <span>{contenidoBusqueda.card_room.boton}</span>
                            </div>
                        </div>
                </div>
                {modalServiciosAdcionales && (
                   <ModalServiciosAdicionales contenidoBusqueda={contenidoBusqueda}  closeModal={closeModal} bookingRoom={bookingRoom}></ModalServiciosAdicionales>
                )}
                {isModalOpen && selectedRoom && (
                  <ModalDetalleRoom item={item} contenidoBusqueda={contenidoBusqueda}  closeModal={closeModal}></ModalDetalleRoom>
                )}
        </>
    )

}
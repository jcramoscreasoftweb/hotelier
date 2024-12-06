"use client";
import { BusquedaResponse, PageBusquedaResponse } from "@/interfaces";
import Image from "next/image";

import { useSearchParams } from 'next/navigation'
import { useState } from 'react';
import { useRouter } from 'next/navigation'


import { CarouselFotosHabitacion, ItemServicioHabitacion } from "./componentes";
import { ModalDetalleRoom, ModalServiciosAdicionales } from "./modalesBusqueda";



export const ItemHabitacionBusqueda = ({item,contenidoBusqueda}:any) => {
  const router = useRouter()
  let data_reserva:any={
    id:null,
    id_type_room:"",
    date_in:"",
    date_out:"",
    check_in:"",
    check_out:"",
    adults:"",
    children:"",
    tipo_pago:"",
    diffInDays:"",
    price_web:"",
    price_hotel:"",
    aditional_services:[],
    aditional_services_aviables:[],
    total_pago:0
}

let inf:any=[];
    const [selectedRoom, setSelectedRoom] = useState(null); // Para manejar el producto seleccionado
    const [isModalOpen, setIsModalOpen] = useState(false); // Para controlar la visibilidad del modal
    const [isActivarOpcion, setActivarOpcion] = useState(false);
    const [isPrecioActivo, setPrecioActivo] = useState(null);

    let cargosAdicionales=0;

    const searchParams = useSearchParams()

    const adults = searchParams.get('adults')
    const children = searchParams.get('children')
    const date_in = searchParams.get('date_in')
    const date_out = searchParams.get('date_out')



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
    const activarOpcionPrecio=(item:any)=>{
        setPrecioActivo(item);

        setActivarOpcion(true)
    }

    const bookingRoom=()=>{
        console.log(item);
        data_reserva.id=item.id_room;
        data_reserva.id_type_room=item.id_tp_room;

        data_reserva.date_in=date_in;
        data_reserva.date_out=date_out;
        data_reserva.check_in=item.check_in;
        data_reserva.check_out=item.check_out;
        data_reserva.adults=adults;
        data_reserva.children=children;
        data_reserva.tipo_pago=isPrecioActivo;
        data_reserva.diffInDays=item.diffInDays;
        data_reserva.price_web=item.price_web;
        data_reserva.price_hotel=item.price_hotel;
        data_reserva.aditional_services_aviables=item.additional_services_availables;
        data_reserva.total_pago=0;


      localStorage.setItem("datareserva",JSON.stringify(data_reserva));
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
                            <div className={isPrecioActivo === 1 ? 'ui_item_precio activo' : 'ui_item_precio'} onClick={() => activarOpcionPrecio(1) }>
                                <div>
                                    <span className="ui_subtitulo">{contenidoBusqueda.card_room.tp_payment_1}</span>
                                    <p className="ui_detalle_texto">{contenidoBusqueda.card_room.payment1_description}</p>
                                    <span className="ui_info_noches">{item.diffInDays} {contenidoBusqueda.card_room.label_night}</span>
                                </div>
                                <div>
                                    <span className="ui_info_precio">US$ {item.price_web}</span>
                                </div>
                            </div>
                            <div className= {isPrecioActivo === 2 ? 'ui_item_precio activo' : 'ui_item_precio'} onClick={() => activarOpcionPrecio(2) }>
                                <div>
                                    <span className="ui_subtitulo">{contenidoBusqueda.card_room.tp_payment_2}</span>
                                    <p className="ui_detalle_texto">{contenidoBusqueda.card_room.payment2_description}</p>
                                    <span className="ui_info_noches">{item.diffInDays} {contenidoBusqueda.card_room.label_night}</span>
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
                            {isActivarOpcion ?
                            <div  onClick={() =>  setModalServiciosAdcionales(true)} className="ui_btn_item_reservar_habitacion activo">
                                <span>{contenidoBusqueda.card_room.boton}</span>
                            </div>
                            :
                            <div className="ui_btn_item_reservar_habitacion">
                                <span>{contenidoBusqueda.card_room.boton}</span>
                            </div>
                            }
                        </div>
                </div>
                {modalServiciosAdcionales && (
                   <ModalServiciosAdicionales contenidoBusqueda={contenidoBusqueda}  serviciosAdicionales={data_reserva.aditional_services} item={item} data_reserva={data_reserva} closeModal={closeModal} bookingRoom={bookingRoom}></ModalServiciosAdicionales>
                )}
                {isModalOpen && selectedRoom && (
                  <ModalDetalleRoom item={item} contenidoBusqueda={contenidoBusqueda}  closeModal={closeModal}></ModalDetalleRoom>
                )}
        </>
    )

}

"use client"
import Image from "next/image";
import { CarouselFotosHabitacion, ItemServicioHabitacion } from "./componentes";
import { useState } from "react";
import { ModalServiciosAdicionales } from "./modalesBusqueda";
import NuevoModalServiciosAdicionales from "./modalServiciosAdicionales";
import { useRouter } from 'next/navigation'
interface RoomSelected {
    id_room?: string | null;
    id_tp_room?: string | null;
    id_type_room?: string | null;
    descripcion?: string | null;
    servicios_disponbiles?:[] | null;
    dias?:string|null,
    check_in?:string|null,
    check_out?:string|null,
    precio_adelantado?: number | null;
    precio_hotel?:number | null;

  }


export const HabitacionesBusqueda = ({habitaciones,contenidoBusqueda,startDate ,endDate ,adults ,children}:any)=> {

    const router = useRouter();

    const [selectedPrice, setSelectedPrice] = useState<RoomSelected>({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedServices, setSelectedServices] = useState([]);


    const handleSelectPrice = (roomId:any, priceType:any,servicios_disponbiles:any,index:any) => {


        setSelectedPrice((prev:RoomSelected) => ({
          "id_room": roomId,
          "id_tp_room":habitaciones[index].id_tp_room,
          "descripcion": priceType,
          "servicios_disponbiles":servicios_disponbiles,
          "dias":habitaciones[index].diffInDays,
          "precio_adelantado":habitaciones[index].price_web,
          "precio_hotel":habitaciones[index].price_hotel,
          "check_in":habitaciones[index].check_in,
          "check_out":habitaciones[index].check_out,


        }));


      };
      const handleCloseModal=()=>{
        setIsModalOpen(false);
      }


  const handleConfirmServices = (services:any) => {
    console.log("actualizar servicios");
    setSelectedServices(services);
  };
  const handleGenerateReservation=(services:any)=>{
    console.log("generarReserva");
    console.log(services);

    let data_reserva:any={}

    data_reserva.id=selectedPrice.id_room;
    data_reserva.id_type_room=selectedPrice.id_tp_room;

    data_reserva.date_in=startDate;
    data_reserva.date_out=endDate;
    data_reserva.check_in=selectedPrice.check_in;
    data_reserva.check_out=selectedPrice.check_out;
    data_reserva.adults=adults;
    data_reserva.children=children;

    data_reserva.tipo_pago=selectedPrice.descripcion;
    data_reserva.diffInDays=selectedPrice.dias;
    data_reserva.price_web=selectedPrice.precio_adelantado;
    data_reserva.price_hotel=selectedPrice.precio_hotel;
    data_reserva.aditional_services_aviables=selectedPrice.servicios_disponbiles;
    data_reserva.aditional_services=services;


    localStorage.setItem("datareserva",JSON.stringify(data_reserva))

    router.push('/detalle')

  }



    return (
        <>
        {
            habitaciones.map((item:any,index:any)=>{

                return (


                            <div className="ui_item_habitacion"  key={item.id_room}>
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
                                                    {item.services.map((service:any ,index:any) =>{

                                                        return(
                                                            <ItemServicioHabitacion
                                                                key={index}
                                                                icon={service.image}
                                                                name={service.name}
                                                            />
                                                        );
                                                    })}
                                            </div>
                                            {/*<div className="ui_ver_mas">
                                                <span  onClick={() => handleRoomClick(item)}>{contenidoBusqueda.card_room.label_see_more}</span>
                                                <Image width={20} height={20} src="/img/btn_siguiente.png" alt=""/>
                                            </div>*/}
                                        </div>

                                        <div className="ui_info_habitacion_precio">
                                            <p className="ui_titulo_bloque">{contenidoBusqueda.card_room.title_price}</p>
                                            <div className={`ui_item_precio  ${selectedPrice.id_room==item.id_room && selectedPrice.descripcion=="adelantando" ? "activo" : ""}`} onClick={() => handleSelectPrice(item.id_room, "adelantando",item.additional_services_availables,index)}>
                                                <div>
                                                    <span className="ui_subtitulo">{contenidoBusqueda.card_room.tp_payment_1}</span>
                                                    <p className="ui_detalle_texto">{contenidoBusqueda.card_room.payment1_description}</p>
                                                    <span className="ui_info_noches">{item.diffInDays} {contenidoBusqueda.card_room.label_night}</span>
                                                </div>
                                                <div>
                                                    <span className="ui_info_precio">US$ {item.price_web}</span>
                                                </div>
                                            </div>
                                            <div  className={`ui_item_precio  ${selectedPrice.id_room==item.id_room && selectedPrice.descripcion=="hotel" ? "activo" : ""}`} onClick={() => handleSelectPrice(item.id_room, "hotel",item.additional_services_availables,index)}>
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

                                                {
                                                    selectedPrice.id_room==item.id_room ?
                                                    <div  className="ui_btn_item_reservar_habitacion activo" onClick={()=>{setIsModalOpen(true)}}>
                                                        <span>{contenidoBusqueda.card_room.boton}</span>
                                                    </div>
                                                    :
                                                    <div className="ui_btn_item_reservar_habitacion">
                                                        <span>{contenidoBusqueda.card_room.boton}</span>
                                                    </div>
                                                }




                                        </div>
                                </div>


                )
            })
        }
   {isModalOpen && (
        <NuevoModalServiciosAdicionales
          contenidoBusqueda={contenidoBusqueda}
          closeModal={handleCloseModal}
          serviciosDisponibles={selectedPrice.servicios_disponbiles}
          onSelectServices={handleConfirmServices}
          onGenerateReservation={handleGenerateReservation}
          //onConfirm={handleConfirmServices}
          //onGenerateReservation={handleGenerateReservation}
        />
      )}
        </>
    )
}

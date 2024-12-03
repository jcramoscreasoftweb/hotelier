"use client"
import Image from "next/image";
import { CarouselFotosHabitacion } from "./componentes";
import { useEffect, useState } from "react";


export const ModalServiciosAdicionales=({contenidoBusqueda, item, serviciosAdicionales,closeModal, bookingRoom}:any)=>{

  const data_item=item.additional_services_availables;



  const [isMontoServicios, setMontoServicios] = useState(0);
  const [isAdicionalServicios, setAdicionalServicios] =  useState<string[]>([]);
  const addService=(e: React.ChangeEvent<HTMLInputElement>, index:any)=>{


    const isChecked = e.target.checked; // Leer estado checked directamente

    if (isChecked) {
      //setExtraServicios([e.target.id])



        //setExtraServicios((prev) => [...isExtraServicios, e.target.id]);
        setMontoServicios(isMontoServicios+data_item[e.target.id].price);

        serviciosAdicionales.push(e.target.id)



    } else {
      //setExtraServicios((prev) => prev.filter((item) => item !== e.target.id));
      setMontoServicios(isMontoServicios-data_item[e.target.id].price);
      //setExtraServicios([e.target.id])
      serviciosAdicionales.filter((item:any) => item !== e.target.id)
    }


    //calcularCosto();
    //data_reserva.aditional_services=isExtraServicios;
  }



    return  (
        <>
         {/* <!-- MODAL SERVICIOS ADICIONALES --> */}
  <div className="ui_fondo_modal ui_popup servicios">
    <div className="ui_marco_modal">
      <div className="ui_contenido_modal">
        <div className="ui_close_modal" onClick={() => closeModal()}></div>
        <Image className="img_fondo_left" width={102} height={106} src="/img/adorno_popup_superior.png" alt="icon-popup" />
        <h1 >{contenidoBusqueda.popup_servicios.title}</h1>
        <h2 >{contenidoBusqueda.popup_servicios.subtitle}</h2>

        <div className="list_service">

            {
        data_item.map((item:any, index:any)=> {
             return(

                  <div className="item_row_service" key={index}>
                    <div className="title">

                      <input type="checkbox"   onChange={(e) => addService(e,index)} name={index} id={index} />

                      <label htmlFor={index} >
                      <h3>{item.name}</h3>
                      </label>

                    </div>
                    <h3>US$ {item.price}</h3>
                  </div>

            );


        })

        }



        </div>

        <span>Total: US$ {isMontoServicios}</span>
        <div className="button" onClick={bookingRoom}>{contenidoBusqueda.popup_servicios.boton}</div>

        <Image className="img_fondo_right" width={102} height={106} src="/img/adorno_popup_inferior.png" alt="icon-popup" />
      </div>
    </div>
  </div>
  {/* <!-- END MODAL SERVICIOS ADICIONALES --> */}

        </>
    )
}

export const ModalDetalleRoom=({item, contenidoBusqueda, closeModal}:any)=>{
    return (
        <>
          <div className="ui_fondo_modal ui_detalle_reserva">
                    <div className="ui_marco_modal">
                      <div className="ui_contenido_modal">
                          <div className="ui_close_modal"  onClick={() => closeModal()}></div>
                          <div className="ui_modal_imagenes_habitacion">
                            <h2>{item.name}</h2>
                            <div>

                            </div>
                            <CarouselFotosHabitacion img_portada={item.image} images={item.images_carrusel}></CarouselFotosHabitacion>
                            {/*<div className="ui_carrusel_habitacion_modal">
                              <div className="item_carrusel">
                                <Image width={430} height={250} src="/img/room_1.png" alt="image-habitacion" />
                              </div>
                              <div className="item_carrusel">
                                <Image width={430} height={250} src="/img/room_1.png" alt="image-habitacion" />
                              </div>
                              <div className="item_carrusel">
                                <Image width={430} height={250} src="/img/room_1.png" alt="image-habitacion" />
                              </div>
                              <div className="item_carrusel">
                                <Image width={430} height={250} src="/img/room_1.png" alt="image-habitacion" />
                              </div>
                            </div>
                            <div className="ui_mini_carrusel">
                              <div className="item_carrusel">
                                <Image width={120} height={90} src="/img/room_1.png" alt="image-habitacion" />
                              </div>
                              <div className="item_carrusel">
                                <Image width={120} height={90} src="/img/room_1.png" alt="image-habitacion" />
                              </div>
                              <div className="item_carrusel">
                                <Image width={120} height={90} src="/img/room_1.png" alt="image-habitacion" />
                              </div>
                              <div className="item_carrusel">
                                <Image width={120} height={90} src="/img/room_1.png" alt="image-habitacion" />
                              </div>
                            </div>*/}
                          </div>

                          <div className="ui_modal_informacion_habitacion">
                            <div className="row_detalle">
                              <div className="col_detalle">
                                <div className="item_detalle">
                                  <Image width={20} height={20} src="/img/icon_hora.png" alt="icon-habitacion"/>
                                  <h2>{contenidoBusqueda.card_room.label_checkin}: 09:00 a.m</h2>
                                </div>

                                <div className="item_detalle">
                                  <Image width={20} height={20} src="/img/icon_area.png" alt="icon-habitacion"/>
                                  <h2>20 m²</h2>
                                </div>

                                <div className="item_detalle">
                                  <Image width={20} height={20} src="/img/icon_bed.png" alt="icon-habitacion"/>
                                  <h2>1 cama doble</h2>
                                </div>
                              </div>

                              <div className="col_detalle">
                                <div className="item_detalle">
                                  <Image width={20} height={20} src="/img/icon_hora.png" alt="icon-habitacion"/>
                                  <h2>{contenidoBusqueda.card_room.label_checkout}: 12:00 p.m</h2>
                                </div>

                                <div className="item_detalle">
                                  <Image width={20} height={20} src="/img/icon_huesped.png" alt="icon-habitacion"/>
                                  <h2>2 {contenidoBusqueda.card_room.label_adults}</h2>
                                </div>

                                <div className="item_detalle">
                                  <Image width={20} height={20} src="/img/icon_huesped.png" alt="icon-habitacion"/>
                                  <h2>2 {contenidoBusqueda.card_room.label_children}</h2>
                                </div>
                              </div>
                            </div>

                            <p>Disfrute de una estancia cómoda y relajante en nuestra habitación doble estándar con dos camas. Esta habitación está diseñada para ofrecer el máximo confort y conveniencia, ideal para amigos, familiares o compañeros de trabajo que viajan juntos.</p>

                            <div className="ui_servicios_politicas">
                              <span>{contenidoBusqueda.card_room.label_service}:</span>
                              <ul>
                                <li>Balcon</li>
                                <li>Balcon</li>
                                <li>Balcon</li>
                                <li>Balcon</li>
                                <li>Balcon</li>
                                <li>Balcon</li>
                                <li>Balcon</li>
                                <li>Balcon</li>
                                <li>Balcon</li>
                                <li>Balcon</li>
                                <li>Balcon</li>
                              </ul>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
        </>
    )
}
import { BusquedaResponse, PageBusquedaResponse } from "@/interfaces";
import Image from "next/image";

export const ListadoTipoHabitacion = async () => {

    let url = "https://creasoft.com.pe/hotelier_api/pages/search-typerooms.json";
    let contenido = await fetch(url);
    let data = await contenido.json();
    let tipoHabitacion: BusquedaResponse[] = data.payload["es"];

    let url_page = "https://creasoft.com.pe/hotelier_api/pages/page-busqueda.json";
    let requestAPI_page: any = await fetch(url_page);
    requestAPI_page = await requestAPI_page.json();
    let contenidoBusqueda: PageBusquedaResponse = requestAPI_page.payload["es"];

    return (
      <>
        {tipoHabitacion.map((item:any)=> {
            return(
                <div className="ui_item_habitacion" key={item.id_tp_room}>
                        <div className="ui_info_habitacion">
                            <h2 className="ui_titulo_habitacion" dangerouslySetInnerHTML={{ __html:item.name}}></h2>
                            <div className="marco_carousel_fotos_habitacion">
                                <div className="carousel_fotos_habitacion">

                                    <div className="ui_foto_item_habitacion">
                                        <Image width={500} height={280} src={item.image} alt=""/>
                                    </div>

                                    {item.images_carrusel.map((itemCarrusel:any) =>{
                                        return(
                                            <ItemImagenCarrusel 
                                                key={itemCarrusel.url}
                                                url={itemCarrusel.url}
                                            />
                                        );
                                    })}   
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
                            <span>{contenidoBusqueda.card_room.label_see_more} <Image width={20} height={20} src="/img/btn_siguiente.png" alt=""/></span>
                            </div>
                        </div>

                        <div className="ui_info_habitacion_precio">
                            <p className="ui_titulo_bloque">{contenidoBusqueda.card_room.title_price}</p>
                            <div className="ui_item_precio ">
                                <div>
                                    <span className="ui_subtitulo">{contenidoBusqueda.card_room.tp_payment_1}</span>
                                    <p className="ui_detalle_texto">{contenidoBusqueda.card_room.payment1_description}</p>
                                    <span className="ui_info_noches">3 {contenidoBusqueda.card_room.label_night}</span>
                                </div>
                                <div>
                                    <span className="ui_info_precio">US$ {item.price_web}</span>
                                </div>
                            </div>
                            <div className="ui_item_precio ">
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
                                    <span>{contenidoBusqueda.card_room.label_night}</span>
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
                            <div className="ui_btn_item_reservar_habitacion">
                                <span>{contenidoBusqueda.card_room.boton}</span>
                            </div>
                        </div>
                </div>
            );
        })}
      </>
    );
  };

  export const ItemImagenCarrusel = ({url}:any) => {
    return (
        <div className="ui_foto_item_habitacion">
            <Image width={500} height={280} src={url} alt=""/>
        </div>
    );
  }

  export const ItemServicioHabitacion = ({ icon, name }: any) => {
    return (
        <span>
            <Image width={20} height={20} src={icon} alt=""/>
            {name}
        </span>
                            
    );

}
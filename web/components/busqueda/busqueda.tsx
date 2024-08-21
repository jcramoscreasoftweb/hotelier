import { BusquedaResponse } from "@/interfaces";
import Image from "next/image";

export const ListadoTipoHabitacion = async () => {

    let url = "https://creasoft.com.pe/hotelier_api/pages/search-typerooms.json";
    let contenido = await fetch(url);
    let data = await contenido.json();
    let tipoHabitacion: BusquedaResponse = data.payload["es"];

    return (
      <>
        {tipoHabitacion.map((item:any)=> {
            return(
                <div className="ui_item_habitacion">
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
                                    <span><Image width={20} height={20} src="/img/icon_adultos.png" alt=""/>{item.num_adults} adultos </span>
                                    <span><Image width={20} height={20} src="/img/icon_adultos.png" alt=""/>{item.num_children} niños </span>
                                </div>
                                <div className="ui_habitacion_check">
                                    <span><Image width={20} height={20} src="/img/icon_hora.png" alt=""/>Check in: {item.check_in}</span>
                                    <span><Image width={20} height={20} src="/img/icon_hora.png" alt=""/>Check out: {item.check_out}</span>
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
                            <span>Ver más detalles <Image width={20} height={20} src="/img/btn_siguiente.png" alt=""/></span>
                            </div>
                        </div>

                        <div className="ui_info_habitacion_precio">
                            <p className="ui_titulo_bloque">Nuestros precios</p>
                            <div className="ui_item_precio ">
                                <div>
                                    <span className="ui_subtitulo">Pago por adelantado</span>
                                    <p className="ui_detalle_texto">Se realiza el pago directamente por nuestra plataforma.</p>
                                    <span className="ui_info_noches">3 noches</span>
                                </div>
                                <div>
                                    <span className="ui_info_precio">US$ {item.price_web}</span>
                                </div>
                            </div>
                            <div className="ui_item_precio ">
                                <div>
                                    <span className="ui_subtitulo">Pago en hotel</span>
                                    <p className="ui_detalle_texto">La reserva deberá ser pagada en su llegada al hotel.</p>
                                    <span className="ui_info_noches">3 noches</span>
                                </div>
                                <div>
                                    <span className="ui_info_precio">US$ {item.price_hotel}</span>
                                </div>
                            </div>


                            <div className="ui_otras_plataformas">
                                <div className="ui_titulo">
                                    <span>En otras plataformas</span>
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
                                <span>Reservar</span>
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
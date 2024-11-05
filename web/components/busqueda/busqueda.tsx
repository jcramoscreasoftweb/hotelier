import { BusquedaResponse, PageBusquedaResponse } from "@/interfaces";
import Image from "next/image";
import { CarouselFotosHabitacion } from "./carouselBusqueda";
import { ItemHabitacionBusqueda } from "./itemHabitacionBusqueda";


export const ListadoTipoHabitacion = async () => {

    let url = "https://creasoft.com.pe/hotelier_api/pages/search-typerooms.json";
    let contenido = await fetch(url);
    let data = await contenido.json();
    let tipoHabitacion: BusquedaResponse[] = data.payload["es"];

    let url_page = "https://creasoft.com.pe/hotelier_api/pages/page-busqueda.json";
    let requestAPI_page: any = await fetch(url_page);
    requestAPI_page = await requestAPI_page.json();
    let contenidoBusqueda: PageBusquedaResponse = requestAPI_page.payload["es"];
    let itemDetalle;
    return (
      <>
        {tipoHabitacion.map((item:any)=> {
            return(
                <ItemHabitacionBusqueda item={item} contenidoBusqueda={contenidoBusqueda}></ItemHabitacionBusqueda>
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

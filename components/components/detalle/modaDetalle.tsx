import Image from "next/image";

export const ModalReservaRealizada=({contenidoDetalle}:any)=>{
return (
    <>
      <div className="ui_fondo_modal ui_popup detalle_reserva">
                <div className="ui_marco_modal">
                    <div className="ui_contenido_modal">
                        <div className="ui_close_modal"></div>
                        <Image className="img_fondo_left" width={102} height={106} src="/img/adorno_popup_superior.png" alt="icon-popup" />
                        <Image width={68} height={68} src="/img/icon_popup.png" alt="icon-popup" />
                        <h1 dangerouslySetInnerHTML={{ __html:contenidoDetalle.popup.title}}></h1>
                        <h2 dangerouslySetInnerHTML={{ __html:contenidoDetalle.popup.subtitle}}></h2>
                        <Image className="img_fondo_right" width={102} height={106} src="/img/adorno_popup_inferior.png" alt="icon-popup" />
                    </div>
                </div>
            </div>
    </>
)
}
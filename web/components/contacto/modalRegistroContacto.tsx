import Image from "next/image";
export const ModalRegistroContacto=({contenidoContacto,cerrarModal}:any)=>{
    return(
        <>
         <div className="ui_fondo_modal ui_popup">
                <div className="ui_marco_modal">
                    <div className="ui_contenido_modal">
                        <div className="ui_close_modal" onClick={()=>cerrarModal()}>

                        </div>
                        <Image className="img_fondo_left" width={102} height={106} src="/img/adorno_popup_superior.png" alt="icon-popup" />
                        <Image width={68} height={68} src="/img/icon_popup.png" alt="icon-popup" />
                        <h1>{contenidoContacto.popup.title}</h1>
                        <h2>{contenidoContacto.popup.subtitle}</h2>
                        <Image className="img_fondo_right" width={102} height={106} src="/img/adorno_popup_inferior.png" alt="icon-popup" />
                    </div>
                </div>
            </div>
        </>
    )
}
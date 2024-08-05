import Image from "next/image";

export function ItemBeneficios(){
    return (
        <>
        <div className="ui_item-beneficio">
           <Image width={397} height={587} src="/img/terraza_jardin.png" alt=""/>
           <p className="ui_titulo">Terraza y jardín</p>
        </div>
        </>
    )
}
export function ItemResena(){
    return (
        <>
         <div className="ui_item_resena">
            <div className="ui_estrellas">
                <Image  width={17} height={16}  src="/img/estrella_icon.png" alt=""/>
                <Image width={17} height={16}  src="/img/estrella_icon.png" alt=""/>
                <Image width={17} height={16}  src="/img/estrella_icon.png" alt=""/>
            </div>
            <div className="ui_mensaje">
                <p>Desde el momento en que llegué, el personal me recibió con una cálida bienvenida y un servicio excepcional. Las habitaciones eran amplias, limpias y muy cómodas. Los desayunos en el restaurante del hotel son deliciosos.</p>
            </div>
            <div className="ui_usuario">
                <p>- Isabel Coronado, 05 mayo 2024</p>
            </div>
        </div>
        </>
    )
}
import Image from "next/image";
import styles from "./page.module.css";

import {HeaderSite , FooterSite} from "./componentes/componentesGenerales"
import { ItemBeneficios , ItemResena } from "./componentes/componentesPortada";

export default function Home() {

  return (
<>
<section className="ui_seccion_top_home">
<HeaderSite/>




<div className="ui_texto_intro_home">
    <h2>Descubre la elegancia y el confort <br/> en el corazón de Cusco</h2>
</div>
<div className="ui_marco_opciones_home">
    <div className="ui_barra_busqueda">

    </div>

</div>

</section>
<section className="ui_seccion_2_home">

<div className="contenedor">
        <div className="ui_lyt_seccion_2_home">
            <div className="ui_seccion_2_home_info">
                <h2>¡Bienvenidos a <br/> Sacha Hotel!</h2>
                <p>Donde el lujo y la tradición se entrelazan para ofrecer una experiencia única e inolvidable. Ubicado en una de las ciudades más emblemáticas del mundo, nuestro hotel es un santuario de elegancia y sofisticación.</p>

                    <p>Nos enorgullecemos de ofrecer a nuestros huéspedes un lugar exclusivo, donde cada detalle ha sido cuidadosamente diseñado para reflejar la rica herencia cultural y el esplendor natural de Cusco.
                    </p>
            </div>
            <div className="ui_seccion_2_home_img">
                <Image width={562} height={581} src="/img/foto_bienvenida.png" alt="Bienvenido"/>
            </div>
        </div>
</div>

</section>

<section  className="ui_seccion_3_home">
<div className="contenedor">
    <div className="ui_carousel_beneficios">
        <ItemBeneficios/>
        <ItemBeneficios/>
        <ItemBeneficios/>
        <ItemBeneficios/>

    </div>
</div>
</section>

<section className="ui_seccion_4_home">

<div className="contenedor">
    <div className="ui_seccion_4_home_left">
        <Image width={500} height={500} src="/img/info_habitaciones.png" alt=""/>
        <Image  width={219} height={238}   className="complemento" src="/img/complemento2.png" alt="" />
    </div>
    <div className="ui_seccion_4_home_right">
        <Image width={660} height={660}src="/img/fondo_habitacion_1.png" alt=""/>
        <Image width={370} height={407} className="complemento" src="/img/complemento.png" alt="" />
    </div>
</div>
</section>

<section className="ui_seccion_info_adicional">
<div className="contenedor">
    <div className="ui_seccion_info_adicional_lyt">
        <div className="ui_titulo">
            <h2>Reserva el lugar perfecto para ti</h2>
        </div>
        <div className="ui_contenido">
            <div className="ui_item">
               <div>
                <h3>Ubicación céntrica</h3>
                <p>A pocos pasos de los principales lugares turísticos.</p>
               </div>
               <div>
                <Image width={38} height={60} src="/img/ubicacion_icon.png" alt="" />
               </div>
            </div>
            <div className="ui_item">
                <div>
                 <h3>Confort excepcional</h3>
                 <p>Habitaciones modernas y acogedoras.</p>
                </div>
                <div>
                 <Image width={54} height={60} src="/img/confort_icon.png" alt="" />
                </div>
             </div>
             <div className="ui_item">
                <div>
                 <h3>Excelentes precios</h3>
                 <p>Tarifas competitivas y ofertas especiales.</p>
                </div>
                <div>
                 <Image width={66} height={60}  src="/img/precios_icon.png" alt="" />
                </div>
             </div>
        </div>
    </div>
</div>
</section>

<section className="ui_seccion_resenas">
<div className="contenedor">
    <div className="ui_marco_titulo">
        <h2><Image src="/img/adorno_titulo_1.png" width={62} height={60}  alt=""/>Reseñas
        <Image alt="" src="/img/adorno_titulo_2.png"  width={62} height={60} /></h2>
    </div>
    <div className="ui_seccion_resenas_lyt">
        <ItemResena/>
        <ItemResena/>
        <ItemResena/>


    </div>
    <div className="ui_mas_resenas">

        <a href="">Ver más reseñas <Image width={20} height={20}  src="/img/btn_siguiente.png" alt=""/> </a>
    </div>
</div>
</section>
<FooterSite/>

</>
  );
}

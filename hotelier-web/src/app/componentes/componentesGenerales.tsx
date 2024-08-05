import Image from "next/image";
export async function HeaderSite(){
     interface MenuHeader {
        titles: Button[];
        button: Button;
    }

     interface Button {
        name: string;
        link: string;
    }



    let url="https://creasoft.com.pe/hotelier_api/get-header.json"


    let contenido=await fetch(url);
    let data=await contenido.json();

    let menuHeader:MenuHeader=data.payload['en'];

    return(
        <>
               <header className="ui_header-site">
            <div className="ui_logo_site">
                <a href="">
                    <Image width={70} height={79} src="/img/logo_header.png" alt="Hotelier site"/>
                </a>
            </div>
            <nav className="ui_nav_site">
                <ul>
                {
                    menuHeader.titles.map((item)=>{
                        return(<li><a href="">{item.name}</a></li>)
                    })
                    }


                    <li className="ui_btn_reserva"><a href="">{menuHeader.button.name}</a></li>
                </ul>
            </nav>
        </header>
        </>
    );
}
function HeaderSitev2(){

}

export function FooterSite(){
return(
    <>
    <div className="decoracion_footer">
<Image className="img-full" width={1677} height={286}   src="/img/footer_decoracion.png" alt=""/>
</div>
    <footer className="ui_footer_site">
<div className="contenedor">
    <div className="logo-footer">
        <Image width={161} height={184}  src="/img/logo_footer.png" alt=""/>
    </div>
    <div className="ui_info_footer">
        <div className="ui_info_top">
            <div className="ui_info_col1">
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Nosotros</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </div>
            <div className="ui_info_col2">
                <ul>
                    <li><a href="">Galería</a></li>
                    <li><a href="">Reseñas</a></li>
                    <li><a href="">DESTINO</a></li>
                </ul>
            </div>
            <div className="ui_info_col3">
                <ul>
                    <li><a href="">Políticas de sostenibilidad</a></li>
                    <li><a href="">Políticas de privacidad</a></li>
                    <li><a href="">Términos y condiciones</a></li>
                </ul>
            </div>
            <div className="ui_info_col4">
                <p>Libro de <br/> reclamaciones</p>
                <Image width={126} height={55}  src="/img/libro_reclamaciones.png" alt=""/>
            </div>
        </div>
        <div className="ui_info_bottom">
            <div className="ui_info_col1">
                <span>
                    Calle San Agustín 345, Cusco.Cusco, Perú
                </span>
            </div>
            <div className="ui_info_col2">
                <span>+51 984 506 080</span>
            </div>
            <div className="ui_info_col3">
                <span>bookin@sachacusco.com</span>
            </div>
            <div className="ui_info_col4">
                <div>
                    <a href="">
                        <Image width={41} height={42}  src="/img/icono_facebook.png" alt=""/>
                    </a>
                    <a href="">
                        <Image width={41} height={42}  src="/img/icono_instagram.png" alt=""/>
                    </a>
                    <a href="">
                        <Image width={41} height={42}  src="/img/icono_linkedin.png" alt=""/>
                    </a>
                </div>
            </div>

        </div>
    </div>
</div>
<div className="ui_derechos_reservados">
    <span>©Hotelier 2024 | Todos los derechos reservados.</span>
</div>
</footer>
<div className="ui_icono_whatasapp">
<a href="">
    <Image  width={41} height={42} src="/img/icono_whatsapp.png" alt=""/>
</a>
</div>
    </>
)
}
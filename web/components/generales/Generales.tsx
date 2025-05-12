import { MenuHeaderResponse, FooterResponse } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

export const HeaderSitev1 = async ({ language = 'es' }:any) => {
  let url = "https://creasoft.com.pe/hotelier_api/get-header.json";
  let contenido = await fetch(url);
  let data = await contenido.json();
  let menuHeader: MenuHeaderResponse = data.payload[language];

  return (
    <>
      <header className="ui_header-site">
        <div className="ui_logo_site">
          <Link href="/">
            <Image
              width={70}
              height={79}
              src="/img/logo_header.png"
              alt="Hotelier site"
            />
          </Link>
        </div>
        <nav className="ui_nav_site">
          <ul className="nav_desktop">
            {menuHeader.titles.map((item) => {
              return (
                <li key={item.name}>
                  <Link href={`${item.link}`} dangerouslySetInnerHTML={{ __html: item.name }}></Link>
                </li>
              );
            })}

            <li className="ui_btn_reserva">
              <Link href={`${menuHeader.button.link}`} dangerouslySetInnerHTML={{ __html: menuHeader.button.name }}></Link>
            </li>
          </ul>

          <ul className="nav_mobile">
            <li><Image className="icon_navbar_toggle" width={24} height={18} src="/img/icon-navbar.png" alt="icon-navbar"/></li>
            <li className="ui_btn_reserva">
              <Link href={`${menuHeader.button.link}`} dangerouslySetInnerHTML={{ __html: menuHeader.button.name }}></Link>
            </li>
          </ul>

          <div className="ui_content_navmobile">
            <Image width={44} height={50} src="/img/logo_header2.png" alt="icon-navbar"/>
            <div className="ui_franja_opciones">
              <Image className="icon_navbar_toggle" width={24} height={18} src="/img/icon-navbar.png" alt="icon-navbar"/>
              <Link className="ui_btn_reserva" href={`${menuHeader.button.link}`} dangerouslySetInnerHTML={{ __html: menuHeader.button.name }}></Link>
            </div>
            <div className="ui_nav_pages">
              {menuHeader.titles.map((item) => {
                return (
                    <Link key={item.name} href={`${item.link}`} dangerouslySetInnerHTML={{ __html: item.name }}></Link>
                );
              })}

            </div>
            <Image width={199} height={215} src="/img/logo_header3.png" alt="icon-navbar"/>
          </div>
        </nav>
      </header>
    </>
  );
};

export const HeaderSitev2 = async ({ language = 'es' }:any) => {
  let url = "https://creasoft.com.pe/hotelier_api/get-header.json";
  let contenido = await fetch(url);
  let data = await contenido.json();
  let menuHeader: MenuHeaderResponse = data.payload[language];

  return (
    <>
      <header className="ui_header-site page_busqueda">
        <div className="ui_logo_site">
          <Link href="/">
            <Image
              width={70}
              height={79}
              src="/img/logo_header2.png"
              alt="Hotelier site"
            />
          </Link>
        </div>
        <nav className="ui_nav_site">
          <ul className="nav_desktop">
            {menuHeader.titles.map((item) => {
              return (
                <li key={item.name}>
                  <Link href={`${item.link}`} dangerouslySetInnerHTML={{ __html: item.name }}></Link>
                </li>
              );
            })}

            <li className="ui_btn_reserva">
              <Link href={`${menuHeader.button.link}`} dangerouslySetInnerHTML={{ __html: menuHeader.button.name }}></Link>
            </li>
          </ul>

          <ul className="nav_mobile">
            <li><Image className="icon_navbar_toggle" width={24} height={18} src="/img/icon-navbar.png" alt="icon-navbar"/></li>
            <li className="ui_btn_reserva">
              <Link href={`${menuHeader.button.link}`} dangerouslySetInnerHTML={{ __html: menuHeader.button.name }}></Link>
            </li>
          </ul>

          <div className="ui_content_navmobile">
            <Image width={44} height={50} src="/img/logo_header2.png" alt="icon-navbar"/>
            <div className="ui_franja_opciones">
              <Image className="icon_navbar_toggle" width={24} height={18} src="/img/icon-navbar.png" alt="icon-navbar"/>
              <Link className="ui_btn_reserva" href={`${menuHeader.button.link}`} dangerouslySetInnerHTML={{ __html: menuHeader.button.name }}></Link>
            </div>
            <div className="ui_nav_pages">
              {menuHeader.titles.map((item) => {
                return (
                    <Link key={item.name} href={`${item.link}`} dangerouslySetInnerHTML={{ __html: item.name }}></Link>
                );
              })}

            </div>
            <Image width={199} height={215} src="/img/logo_header3.png" alt="icon-navbar"/>
          </div>
        </nav>
      </header>
    </>
  );
};

export const FooterSite = async({ language = 'es' }:any) => {

  let url = "https://creasoft.com.pe/hotelier_api/get-footer.json";
  let contenido = await fetch(url);
  let data = await contenido.json();
  let footer: FooterResponse = data.payload[language];

  // console.log(footer);
  return (
    <>
      <div className="decoracion_footer">
        <Image
          className="img-full"
          width={1677}
          height={286}
          src="/img/footer_decoracion.png"
          alt=""
        />
      </div>
      <footer className="ui_footer_site">
        <div className="contenedor">
          <div className="logo-footer">
            <Image width={161} height={184} src="/img/logo_footer.png" alt="" />
          </div>
          <div className="ui_info_footer">
            <div className="ui_info_top">
              <div className="ui_info_col1">
                <ul>
                  {footer.column_1.map((item) => {
                    return (
                      <li key={item.name}>
                        <Link href={`${item.link}`} dangerouslySetInnerHTML={{ __html: item.name }}></Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="ui_info_col2">
                <ul>
                  {footer.column_2.map((item) => {
                    return (
                      <li key={item.name}>
                        <Link href={`${item.link}`} dangerouslySetInnerHTML={{ __html: item.name }}></Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="ui_info_col3">
                <ul>
                  {footer.column_3.map((item) => {
                    return (
                      <li key={item.name}>
                        <Link href={`${item.link}`} dangerouslySetInnerHTML={{ __html: item.name }}></Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="ui_info_col4">
                <a href={`${footer.column_4.link}`}>
                  <p dangerouslySetInnerHTML={{ __html: footer.column_4.name }}></p>
                  <Image
                    width={126}
                    height={55}
                    src="/img/libro_reclamaciones.png"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div className="ui_info_bottom">
              <div className="ui_info_col1">
                <span>Calle San Agustín 345, Cusco.Cusco, Perú</span>
              </div>
              <div className="ui_info_col2">
                <span>+51 984 506 080</span>
              </div>
              <div className="ui_info_col3">
                <span>booking@sachacusco.com</span>
              </div>
              <div className="ui_info_col4 social_media">

                  <a href="">
                    <Image
                      width={41}
                      height={41}
                      src="/img/icono_facebook.png"
                      alt=""
                    />
                  </a>
                  <a href="">
                    <Image
                      width={41}
                      height={41}
                      src="/img/icono_instagram.png"
                      alt=""
                    />
                  </a>
                  <a href="">
                    <Image
                      width={41}
                      height={41}
                      src="/img/icono_linkedin.png"
                      alt=""
                    />
                  </a>

              </div>
            </div>
          </div>
        </div>
        <div className="ui_derechos_reservados">
          <span dangerouslySetInnerHTML={{ __html: footer.rights }}></span>
        </div>
      </footer>
      <div className="ui_icono_whatasapp">
        <a href="">
          <Image width={100} height={100} src="/img/icono_whatsapp.png" alt="" />
        </a>
      </div>
    </>
  );
};

export const FooterSite_SinDecoracion = async({ language = 'es' }:any) => {

  let url = "https://creasoft.com.pe/hotelier_api/get-footer.json";
  let contenido = await fetch(url);
  let data = await contenido.json();

  let footer: FooterResponse = data.payload[language];

  // console.log(footer);
  return (
    <>
      <footer className="ui_footer_site">
        <div className="contenedor">
          <div className="logo-footer">
            <Image width={161} height={184} src="/img/logo_footer.png" alt="" />
          </div>
          <div className="ui_info_footer">
            <div className="ui_info_top">
              <div className="ui_info_col1">
                <ul>
                  {footer.column_1.map((item) => {
                    return (
                      <li key={item.name}>
                        <Link href={`${item.link}`} dangerouslySetInnerHTML={{ __html: item.name }}></Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="ui_info_col2">
                <ul>
                  {footer.column_2.map((item) => {
                    return (
                      <li key={item.name}>
                        <Link href={`${item.link}`} dangerouslySetInnerHTML={{ __html: item.name }}></Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="ui_info_col3">
                <ul>
                  {footer.column_3.map((item) => {
                    return (
                      <li key={item.name}>
                        <Link href={`${item.link}`} dangerouslySetInnerHTML={{ __html: item.name }}></Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="ui_info_col4">
                <a href={`${footer.column_4.link}`}>
                  <p dangerouslySetInnerHTML={{ __html: footer.column_4.name }}></p>
                  <Image
                    width={126}
                    height={55}
                    src="/img/libro_reclamaciones.png"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div className="ui_info_bottom">
              <div className="ui_info_col1">
                <span>Calle San Agustín 345, Cusco.Cusco, Perú</span>
              </div>
              <div className="ui_info_col2">
                <span>+51 984 506 080</span>
              </div>
              <div className="ui_info_col3">
                <span>booking@sachacusco.com</span>
              </div>
              <div className="ui_info_col4 social_media">

                  <a href="">
                    <Image
                      width={41}
                      height={41}
                      src="/img/icono_facebook.png"
                      alt=""
                    />
                  </a>
                  <a href="">
                    <Image
                      width={41}
                      height={41}
                      src="/img/icono_instagram.png"
                      alt=""
                    />
                  </a>
                  <a href="">
                    <Image
                      width={41}
                      height={41}
                      src="/img/icono_linkedin.png"
                      alt=""
                    />
                  </a>

              </div>
            </div>
          </div>
        </div>
        <div className="ui_derechos_reservados">
          <span dangerouslySetInnerHTML={{ __html: footer.rights }}></span>
        </div>
      </footer>
      <div className="ui_icono_whatasapp">
        <a href="">
          <Image width={100} height={100} src="/img/icono_whatsapp.png" alt="" />
        </a>
      </div>
    </>
  );
};

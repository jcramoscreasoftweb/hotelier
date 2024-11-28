
import {
  FooterSite,
  HeaderSitev1,
  ItemBeneficios,
  ItemBeneficiosNuevo,
  ItemResena,
  ItemServicio,
} from "@/components";
import { PortadaResponse, ResenaResponse } from "@/interfaces";
import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {
  let url = "https://creasoft.com.pe/hotelier_api/pages/page-home.json?v45";
  let requestAPI: any = await fetch(url);
  requestAPI = await requestAPI.json();
  let contenidoPortada: PortadaResponse = requestAPI.payload["es"];

  let url_resenas = "https://creasoft.com.pe/hotelier_api/pages/list-comments-pag.json"
  let requestAPI_resena: any = await fetch(url_resenas);
  requestAPI_resena = await requestAPI_resena.json();
  let resenas: ResenaResponse = requestAPI_resena.payload["es"];

  // console.log(resenas)

  return (
    <>
      <section
        className="ui_seccion_top_home"
        style={{
          backgroundImage: `url("${contenidoPortada.banner_section.image}")`,
        }}
      >
        <HeaderSitev1 />

        <div className="ui_texto_intro_home">
          <h2  dangerouslySetInnerHTML={{ __html:contenidoPortada.banner_section.title}}></h2>
        </div>
        <div className="ui_marco_opciones_home">
          <div className="ui_barra_busqueda">
          <form className="ui_form_busqueda" action="busqueda-habitaciones" method="get">
                  <div className="item_input_form">
                    <div className="label">
                      <Image width={18} height={20} src="/img/icon_date.png" alt="icon-search"></Image>
                      <h2>Fecha de entrada</h2>
                    </div>
                    <input type="date" name="date_in" id="checkin"/>
                  </div>

                  <div className="ui_separator_input"></div>

                  <div className="item_input_form">
                    <div className="label">
                      <Image width={18} height={20} src="/img/icon_date.png" alt="icon-search"></Image>
                      <h2>Fecha de salida</h2>
                    </div>
                    <input type="date" name="date_out" id="checkout" />
                  </div>

                  <div className="ui_separator_input"></div>

                  <div className="item_input_form">
                    <div className="label">
                      <Image width={18} height={20} src="/img/icon_huesped.png" alt="icon-search"></Image>
                      <h2>Huéspedes</h2>
                    </div>
                    <h2 className="label_huespedes">1 adulto</h2>

                    <div className="ui_box_huespedes">

                      <div className="item_box_huesped">
                        <h2>Adultos</h2>
                        <div className="contador_huesped">
                          <button type="button" className="decrement" data-target="adults">−</button>
                          <input type="text" id="adults" name="adults" value="1" min="1" max="10" readOnly />
                          <button type="button" className="increment" data-target="adults">+</button>
                        </div>
                      </div>

                      <div className="item_box_huesped">
                        <h2>Niños</h2>
                        <div className="contador_huesped">
                          <button type="button" className="decrement" data-target="children">−</button>
                          <input type="text" id="children" name="children" value="0" min="0" max="10" readOnly />
                          <button type="button" className="increment" data-target="children">+</button>
                        </div>
                      </div>

                      <div className="btn_huesped">Aplicar</div>

                    </div>


                  </div>



                  <button className="btn_buscar" >
                    <Image width={26} height={26} src="/img/icon_buscar.png" alt="icon-buscar"></Image>
                    Buscar
                  </button>
                </form>
          </div>
        </div>
      </section>
      <section className="ui_seccion_2_home">
        <div className="contenedor">
          <div className="ui_lyt_seccion_2_home">
            <div className="ui_seccion_2_home_info">
              <h2 dangerouslySetInnerHTML={{ __html:contenidoPortada.principal_section.title}}></h2>
              <p dangerouslySetInnerHTML={{ __html:contenidoPortada.principal_section.description}}></p>
            </div>
            <div className="ui_seccion_2_home_img">
              <Image
                width={540}
                height={540}
                src={contenidoPortada.principal_section.image}
                alt="Bienvenido"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="ui_seccion_3_home">
      <div className="contenedor">

        <ItemBeneficiosNuevo hotel_section={contenidoPortada.hotel_section} ></ItemBeneficiosNuevo>

        </div>
        </section>
      <section className="ui_seccion_4_home">
        <div className="contenedor">
          <div className="ui_seccion_4_home_left">
            <Image className="complemento_mobile top" width={165} height={70} src="/img/complemento_mob_top.png" alt=""/>
            <Image
              width={481}
              height={481}
              src={contenidoPortada.services_section.image_1}
              alt=""
            />
            <Image
              width={219}
              height={238}
              className="complemento"
              src="/img/complemento2.png"
              alt=""
            />
          </div>
          <div className="ui_seccion_4_home_right">
            <Image
              width={533}
              height={533}
              src={contenidoPortada.services_section.image_2}
              alt=""
            />
            <Image
              width={370}
              height={407}
              className="complemento"
              src="/img/complemento.png"
              alt=""
            />
            <Image className="complemento_mobile left" width={94} height={97} src="/img/complemento_mob_left.png" alt=""/>
            <Image className="complemento_mobile right" width={93} height={100} src="/img/complemento_mob_right.png" alt=""/>
          </div>
        </div>
      </section>

      <section className="ui_seccion_info_adicional">
        <div className="contenedor">
          <div className="ui_seccion_info_adicional_lyt">
            <div className="ui_titulo">
              <h2>{contenidoPortada.services_section.title}</h2>
            </div>
            <div className="ui_contenido">
              {contenidoPortada.services_section.items.map((item) => {
                return (

                  <ItemServicio
                    key={item.title}
                    titulo={item.title}
                    descripcion={item.description}
                    image={item.image}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="ui_seccion_resenas">
        <div className="contenedor">
          <div className="ui_marco_titulo">
            <Image
              src="/img/adorno_titulo_1.png"
              width={62}
              height={60}
              alt=""
            />
            <h2>{contenidoPortada.commets_section.title}</h2>
            <Image
                alt=""
                src="/img/adorno_titulo_2.png"
                width={62}
                height={60}
              />
          </div>

          <div className="ui_seccion_resenas_lyt">
              {resenas.comments.map((card:any) => {
                return (
                  <ItemResena
                    key={card.id}
                    score={card.score}
                    comment={card.comment}
                    user={card.name_user}
                    date={card.created_at}
                  />
                );
              })}
          </div>
          <div className="ui_mas_resenas">
            <a href="/resenas">
              {contenidoPortada.commets_section.text_redirection}{" "}
              <Image
                width={20}
                height={20}
                src="/img/btn_siguiente.png"
                alt=""
              />{" "}
            </a>
          </div>
        </div>
      </section>

      <FooterSite />
    </>
  );
}

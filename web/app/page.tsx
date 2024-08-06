import {
  FooterSite,
  HeaderSitev1,
  ItemBeneficios,
  ItemResena,
  ItemServicio,
} from "@/components";
import { PortadaResponse } from "@/interfaces";
import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {
  let url = "https://creasoft.com.pe/hotelier_api/pages/page-home.json";
  let requestAPI: any = await fetch(url);
  requestAPI = await requestAPI.json();
  let contenidoPortada: PortadaResponse = requestAPI.payload["es"];

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
          <h2>{contenidoPortada.banner_section.title}</h2>
        </div>
        <div className="ui_marco_opciones_home">
          <div className="ui_barra_busqueda"></div>
        </div>
      </section>
      <section className="ui_seccion_2_home">
        <div className="contenedor">
          <div className="ui_lyt_seccion_2_home">
            <div className="ui_seccion_2_home_info">
              <h2> {contenidoPortada.principal_section.title}</h2>
              <p>{contenidoPortada.principal_section.description}</p>
            </div>
            <div className="ui_seccion_2_home_img">
              <Image
                width={562}
                height={581}
                src={contenidoPortada.principal_section.image}
                alt="Bienvenido"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="ui_seccion_3_home">
        <div className="contenedor">
          <div className="ui_carousel_beneficios">
            {
              contenidoPortada.hotel_section.map((item) => {
                console.log(item);
                return (
                  <ItemBeneficios
                    key={item.title}
                    titulo={item.title}
                    icon={item.icon}
                  />
                );
              })
              // contenidoPortada.hotel_section[0].
            }
          </div>
        </div>
      </section>

      <section className="ui_seccion_4_home">
        <div className="contenedor">
          <div className="ui_seccion_4_home_left">
            <Image
              width={500}
              height={500}
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
              width={660}
              height={660}
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
            <h2>
              <Image
                src="/img/adorno_titulo_1.png"
                width={62}
                height={60}
                alt=""
              />
              {contenidoPortada.commets_section.title}
              <Image
                alt=""
                src="/img/adorno_titulo_2.png"
                width={62}
                height={60}
              />
            </h2>
          </div>
          <div className="ui_seccion_resenas_lyt">
            <ItemResena />
            <ItemResena />
            <ItemResena />
          </div>
          <div className="ui_mas_resenas">
            <a href="">
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

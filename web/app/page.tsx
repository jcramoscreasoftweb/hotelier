
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
import { BuscarFechasPortada } from "@/components/portada/buscadorFecha";

export default async function Home() {

  const username = process.env.NEXT_PUBLIC_API_USER;
  const password = process.env.NEXT_PUBLIC_API_PASS;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const auth = btoa(`${username}:${password}`);

  let url = apiUrl+"/api/page-home";
  let requestAPI: any = await fetch(url,{
    method: "GET", // GET es el valor predeterminado
    headers: {
        Authorization: `Basic ${auth}`, // Encabezado de autenticación
        "Content-Type": "application/json" // Opcional, depende del servicio
    }
});
  requestAPI = await requestAPI.json();
  let contenidoPortada: PortadaResponse = requestAPI.payload["es"];

  let url_resenas = apiUrl+"/api/list-comments-pag?order=date_DESC&pagination=3"
  let requestAPI_resena: any = await fetch(url_resenas,{
      method: "GET", // GET es el valor predeterminado
      headers: {
          Authorization: `Basic ${auth}`, // Encabezado de autenticación
          "Content-Type": "application/json" // Opcional, depende del servicio
      }
  });
  requestAPI_resena = await requestAPI_resena.json();
  let resenas: ResenaResponse = requestAPI_resena.payload["es"];



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

        <BuscarFechasPortada></BuscarFechasPortada>
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

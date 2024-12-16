import  { Metadata } from "next"
import {
    HeaderSitev1,
    FooterSite,
    ItemResena,
} from "@/components"
import { PortadaResponse, PageResenaResponse,ResenaResponse } from "@/interfaces";
import Image from "next/image";
import { text } from "stream/consumers";

export const metadata:Metadata={
    title:"Sacha Cusco",
    description:"Resultado de busqueda",
    keywords:["Busqueda","Reserva","Hotel"]
}

export default async function Resena(){
    let url = "https://creasoft.com.pe/hotelier_api/pages/page-resena.json";
    let requestAPI: any = await fetch(url);
    requestAPI = await requestAPI.json();
    let PageResena: PageResenaResponse = requestAPI.payload["es"];

    let url_resenas = "https://creasoft.com.pe/hotelier_api/pages/list-comments-pag.json"
    let requestAPI_resena: any = await fetch(url_resenas);
    requestAPI_resena = await requestAPI_resena.json();
    let resenas: ResenaResponse = requestAPI_resena.payload["es"];

    // console.log(PageResena)

    return(
        <>
            <section className="ui_seccion_top_banner resenas"
                style={{
                    backgroundImage: `url("${PageResena.principal_section.image}")`,
                }}
            >
                <HeaderSitev1 />
                <div className="ui_texto_title_banner">
                    <h2 dangerouslySetInnerHTML={{ __html:PageResena.principal_section.title}}></h2>
                </div>
            </section>

            <section className="ui_seccion_filters">
                <div className="contenedor">
                    <div className="ui_texto_titulo_filtros">
                        <h2 dangerouslySetInnerHTML={{ __html:PageResena.principal_section.subtitle}}></h2>
                    </div>

                    <div className="ui_filtros">
                        <div className="ui_item_filter">
                            <div className="ui_tag_filter">
                                <Image width={20} height={18}src="/img/icon_filter.png" alt=""/>
                                <span dangerouslySetInnerHTML={{ __html:PageResena.filter_select.title}}></span>
                            </div>
                            <div className="ui_select_filter">
                                <select name="filter" id="filter">
                                    {
                                        PageResena.filter_select.options.map((item)=>{
                                            return(
                                                <option key={item.value} value={item.value} dangerouslySetInnerHTML={{ __html:item.name}}></option>
                                            );
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="ui_item_filter">
                            <div className="ui_tag_filter">
                                <Image width={19} height={18}src="/img/icon_order.png" alt=""/>
                                <span dangerouslySetInnerHTML={{ __html:PageResena.order_select.title}}></span>
                            </div>
                            <div className="ui_select_filter">
                                <select name="order" id="order">
                                    {
                                        PageResena.order_select.options.map((item)=>{
                                            return(
                                                <option key={item.value} value={item.value} dangerouslySetInnerHTML={{ __html:item.name}}></option>
                                            );
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ui_card_reseñas">
                <div className="contenedor">
                    <div className="ui_seccion_resenas_lyt">
                        {
                        resenas.comments.map((item)=>{
                            return(
                                <ItemResena
                                    key={item.id}
                                    score={item.score}
                                    comment={item.comment}
                                    user={item.name_user}
                                    date={item.created_at}
                                />
                            );
                        })
                        }

                    </div>

                    <div className="ui_seccion_resenas_paginacion">

                        <button>
                            <Image width={9} height={15} src="/img/arrow_left_pag.png" alt=""/>
                        </button>


                        <div className="ui_btn_paginacion">
                            <div className="ui_item_btn_page activo">
                                <h1>1</h1>
                            </div>
                            <div className="ui_item_btn_page">
                                <h1>2</h1>
                            </div>
                            <div className="ui_item_btn_page">
                                <h1>3</h1>
                            </div>
                        </div>

                        <button>
                            <Image width={9} height={15} src="/img/arrow_right_pag_active.png" alt=""/>
                        </button>
                    </div>
                </div>

            </section>



            <FooterSite />


        </>
    );
}
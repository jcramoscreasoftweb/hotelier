"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { ItemResena } from "./resenas";

interface iresena {
    comments:[];
    pagination:{
        links:Link[]
    } ;
  }
  interface Link {
    url: string | null;
    label: string;
  }
export const ContenidoResenas = ({PageResena}:any) => {

    const [dataResenas,setDataResenas]=useState<iresena | null>(null)
    const [filtroOrder,setFiltroOrder]=useState("date_desc")
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const username = process.env.NEXT_PUBLIC_API_USER;
    const password = process.env.NEXT_PUBLIC_API_PASS;
    const auth = btoa(`${username}:${password}`);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


  useEffect(() => {
    // Función para obtener los datos de la API
    const fetchData = async () => {
        try {

          const response = await fetch(`${apiUrl}/api/list-comments-pag?order=date_desc&pagination=6`,{
               method: "GET", // GET es el valor predeterminado
               headers: {
                'Cache-Control': 'no-cache',
                Pragma: 'no-cache',
                   Authorization: `Basic ${auth}`, // Encabezado de autenticación
                   "Content-Type": "application/json" // Opcional, depende del servicio
               }
           } );


            //const response = await fetch("https://creasoft.com.pe/hotelier_api/pages/page-busqueda.json?v56");
            if (!response.ok) throw new Error('Error en la solicitud');
            const result = await response.json();
            console.log(result.payload["es"]);
            setDataResenas(result.payload["es"]); // Asigna los datos obtenidos al estado
        } catch (error:any) {
            setError(error?.message);       // Asigna el mensaje de error al estado
        } finally {
            setLoading(false);             // Finaliza el indicador de carga
        }
    };

    fetchData(); // Llama a la función de fetch
}, []);

const getMoreComments=async (url:any)=>{
    console.log(url);
    try {

        const response = await fetch(`${apiUrl}/api/list-comments-pag?order=date_desc&pagination=2`,{
             method: "GET", // GET es el valor predeterminado
             headers: {
                 Authorization: `Basic ${auth}`, // Encabezado de autenticación
                 "Content-Type": "application/json" // Opcional, depende del servicio
             }
         } );


          //const response = await fetch("https://creasoft.com.pe/hotelier_api/pages/page-busqueda.json?v56");
          if (!response.ok) throw new Error('Error en la solicitud');
          const result = await response.json();
          console.log(result.payload["es"]);
          setDataResenas(result.payload["es"]); // Asigna los datos obtenidos al estado
      } catch (error:any) {
          setError(error?.message);       // Asigna el mensaje de error al estado
      } finally {
          setLoading(false);             // Finaliza el indicador de carga
      }

}

    if (loading) return <></>; // Indicador de carga
if (error) return <></>;             // Mensaje de error*/


    return (<>
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
                                        PageResena.filter_select.options.map((item:any)=>{
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
                                        PageResena.order_select.options.map((item:any)=>{
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
                       dataResenas && dataResenas.comments.map((item:any)=>{
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

                        {/*<button>
                            <Image width={9} height={15} src="/img/arrow_left_pag.png" alt=""/>
                        </button>*/}


                        <div className="ui_btn_paginacion">
                            {
                                dataResenas && dataResenas.pagination.links.map((item:any,index:any)=>{
                                   return (
                                    <div  key={index} >
                                    {item.url && <div  onClick={()=>{ getMoreComments(item.url)}} className="ui_item_btn_page">
                                        <h1>{item.label}</h1>
                                    </div>}
                                    </div>
                                    );
                                })
                            }

                        </div>

                        {/*<button>
                            <Image width={9} height={15} src="/img/arrow_right_pag_active.png" alt=""/>
                        </button>*/}
                    </div>
                </div>

            </section>
    </>);
}
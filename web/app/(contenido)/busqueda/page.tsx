import  { Metadata } from "next"
import {FooterSite,HeaderSitev2, ListadoTipoHabitacion} from "@/components"
import {PageBusquedaResponse} from"@/interfaces";
import Image from "next/image";
import Link from "next/link";

export const metadata:Metadata={
    title:"Resultado de busqueda",
    description:"Resultado de busqueda",
    keywords:["Busqueda","Reserva","Hotel"]
}
export default async function Busqueda() {

  let url = "https://creasoft.com.pe/hotelier_api/pages/page-busqueda.json";
  let requestAPI: any = await fetch(url);
  requestAPI = await requestAPI.json();
  let contenidoBusqueda: PageBusquedaResponse = requestAPI.payload["es"];

  return (
    <>
      <HeaderSitev2 />
      <div className="contenedor page_busqueda">
        <section className="ui_seccion_1_busqueda">
          <div className="ui_marco_opciones_home no-position">
              <div className="ui_barra_busqueda">
                <form className="ui_form_busqueda" action="" method="get">
                  <div className="item_input_form">
                    <div className="label">
                      <Image width={18} height={20} src="/img/icon_date.png" alt="icon-search"></Image>
                      <h2>{contenidoBusqueda.labels_search.date_in}</h2>
                    </div>
                    <input type="date" name="checkin" id="checkin"/>
                  </div>

                  <div className="ui_separator_input"></div>

                  <div className="item_input_form">
                    <div className="label">
                      <Image width={18} height={20} src="/img/icon_date.png" alt="icon-search"></Image>
                      <h2>{contenidoBusqueda.labels_search.date_out}</h2>
                    </div>
                    <input type="date" name="checkout" id="checkout" />
                  </div>

                  <div className="ui_separator_input"></div>

                  <div className="item_input_form">
                    <div className="label">
                      <Image width={18} height={20} src="/img/icon_huesped.png" alt="icon-search"></Image>
                      <h2>{contenidoBusqueda.labels_search.guests}</h2>
                    </div>
                    <h2 className="label_huespedes">1 adulto</h2>

                    <div className="ui_box_huespedes">

                      <div className="item_box_huesped">
                        <h2>{contenidoBusqueda.labels_search.box_adutls}</h2>
                        <div className="contador_huesped">
                          <button type="button" className="decrement" data-target="adults">−</button>
                          <input type="text" id="adults" name="adults" value="1" min="1" max="10" readOnly />
                          <button type="button" className="increment" data-target="adults">+</button>
                        </div>
                      </div>

                      <div className="item_box_huesped">
                        <h2>{contenidoBusqueda.labels_search.box_children}</h2>
                        <div className="contador_huesped">
                          <button type="button" className="decrement" data-target="children">−</button>
                          <input type="text" id="children" name="children" value="0" min="0" max="10" readOnly />
                          <button type="button" className="increment" data-target="children">+</button>
                        </div>
                      </div>
                      
                      <div className="btn_huesped">{contenidoBusqueda.labels_search.box_boton}</div>
                    </div>
                  </div>

                  <button className="btn_buscar" >
                    <Image width={26} height={26} src="/img/icon_buscar.png" alt="icon-buscar"></Image>
                    {contenidoBusqueda.labels_search.boton}
                  </button>
                </form>
                
              </div>
          </div>
        </section>

        <section className="ui_seccion_2_busqueda">
            <div className="ui_info_resultado">
                <p className="label">{contenidoBusqueda.labels_search.subtitle}</p>
                <p className="label_resultado">3 {contenidoBusqueda.labels_search.total}</p>
            </div>

            <div className="ui_listado_habitaciones">
                <ListadoTipoHabitacion />
            </div>
      </section>

      </div>

      {/* <!-- MODAL DETALLE --> */}
      <div className="ui_fondo_modal ui_detalle_reserva">
        <div className="ui_marco_modal">
          <div className="ui_contenido_modal">
              <div className="ui_close_modal"></div>
              <div className="ui_modal_imagenes_habitacion">
                <h2>Habitación Doble Estandar</h2>
                <div className="ui_carrusel_habitacion_modal">
                  <div className="item_carrusel">
                    <Image width={430} height={250} src="/img/room_1.png" alt="image-habitacion" />
                  </div>
                  <div className="item_carrusel">
                    <Image width={430} height={250} src="/img/room_1.png" alt="image-habitacion" />
                  </div>
                  <div className="item_carrusel">
                    <Image width={430} height={250} src="/img/room_1.png" alt="image-habitacion" />
                  </div>
                  <div className="item_carrusel">
                    <Image width={430} height={250} src="/img/room_1.png" alt="image-habitacion" />
                  </div>
                </div>
                <div className="ui_mini_carrusel">
                  <div className="item_carrusel">
                    <Image width={120} height={90} src="/img/room_1.png" alt="image-habitacion" />
                  </div>
                  <div className="item_carrusel">
                    <Image width={120} height={90} src="/img/room_1.png" alt="image-habitacion" />
                  </div>
                  <div className="item_carrusel">
                    <Image width={120} height={90} src="/img/room_1.png" alt="image-habitacion" />
                  </div>
                  <div className="item_carrusel">
                    <Image width={120} height={90} src="/img/room_1.png" alt="image-habitacion" />
                  </div>
                </div>
              </div>

              <div className="ui_modal_informacion_habitacion">
                <div className="row_detalle">
                  <div className="col_detalle">
                    <div className="item_detalle">
                      <Image width={20} height={20} src="/img/icon_hora.png" alt="icon-habitacion"/>
                      <h2>{contenidoBusqueda.card_room.label_checkin}: 09:00 a.m</h2>
                    </div>

                    <div className="item_detalle">
                      <Image width={20} height={20} src="/img/icon_area.png" alt="icon-habitacion"/>
                      <h2>20 m²</h2>
                    </div>

                    <div className="item_detalle">
                      <Image width={20} height={20} src="/img/icon_bed.png" alt="icon-habitacion"/>
                      <h2>1 cama doble</h2>
                    </div>
                  </div>

                  <div className="col_detalle">
                    <div className="item_detalle">
                      <Image width={20} height={20} src="/img/icon_hora.png" alt="icon-habitacion"/>
                      <h2>{contenidoBusqueda.card_room.label_checkout}: 12:00 p.m</h2>
                    </div>

                    <div className="item_detalle">
                      <Image width={20} height={20} src="/img/icon_huesped.png" alt="icon-habitacion"/>
                      <h2>2 {contenidoBusqueda.card_room.label_adults}</h2>
                    </div>

                    <div className="item_detalle">
                      <Image width={20} height={20} src="/img/icon_huesped.png" alt="icon-habitacion"/>
                      <h2>2 {contenidoBusqueda.card_room.label_children}</h2>
                    </div>
                  </div>
                </div>

                <p>Disfrute de una estancia cómoda y relajante en nuestra habitación doble estándar con dos camas. Esta habitación está diseñada para ofrecer el máximo confort y conveniencia, ideal para amigos, familiares o compañeros de trabajo que viajan juntos.</p>

                <div className="ui_servicios_politicas">
                  <span>{contenidoBusqueda.card_room.label_service}:</span>
                  <ul>
                    <li>Balcon</li>
                    <li>Balcon</li>
                    <li>Balcon</li>
                    <li>Balcon</li>
                    <li>Balcon</li>
                    <li>Balcon</li>
                    <li>Balcon</li>
                    <li>Balcon</li>
                    <li>Balcon</li>
                    <li>Balcon</li>
                    <li>Balcon</li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
      </div>
      {/* <!-- END MODAL DETALLE--> */}

      {/* <!-- MODAL SIN RESULTADOS DE BUSQUEDA --> */}
      <div className="ui_fondo_modal ui_popup busqueda">
        <div className="ui_marco_modal">
          <div className="ui_contenido_modal">
            <div className="ui_close_modal"></div>
            <Image className="img_fondo_left" width={102} height={106} src="/img/adorno_popup_superior.png" alt="icon-popup" />
            <Image width={189} height={158} src="/img/icon_sin_resultado.png" alt="icon-popup" />
            <h1 dangerouslySetInnerHTML={{ __html:contenidoBusqueda.popup_sin_resultado.title}}></h1>
            <h2  dangerouslySetInnerHTML={{ __html:contenidoBusqueda.popup_sin_resultado.subtitle}}></h2>
            <div className="ui_barra_busqueda">
              <form className="ui_form_busqueda" action="" method="get">
                <div className="item_input_form">
                  <div className="label">
                    <Image width={18} height={20} src="/img/icon_date.png" alt="icon-search"></Image>
                    <h2>{contenidoBusqueda.labels_search.date_in}</h2>
                  </div>
                  <input type="date" name="checkin" id="checkin" />
                </div>

                <div className="ui_separator_input"></div>

                <div className="item_input_form">
                  <div className="label">
                    <Image width={18} height={20} src="/img/icon_date.png" alt="icon-search"></Image>
                    <h2>{contenidoBusqueda.labels_search.date_out}</h2>
                  </div>
                  <input type="date" name="checkout" id="checkout" />
                </div>

                <div className="ui_separator_input"></div>

                <div className="item_input_form">
                  <div className="label">
                    <Image width={18} height={20} src="/img/icon_huesped.png" alt="icon-search"></Image>
                    <h2>{contenidoBusqueda.labels_search.guests}</h2>
                  </div>
                  <h2 className="label_huespedes">1 adulto</h2>

                  <div className="ui_box_huespedes">
                    <div className="item_box_huesped">
                      <h2>{contenidoBusqueda.labels_search.box_adutls}</h2>
                      <div className="contador_huesped">
                        <button type="button" className="decrement" data-target="adults">−</button>
                        <input type="text" id="adults" name="adults" value="1" min="1" max="10" readOnly />
                        <button type="button" className="increment" data-target="adults">+</button>
                      </div>
                    </div>

                    <div className="item_box_huesped">
                      <h2>{contenidoBusqueda.labels_search.box_children}</h2>
                      <div className="contador_huesped">
                        <button type="button" className="decrement" data-target="children">−</button>
                        <input type="text" id="children" name="children" value="0" min="0" max="10" readOnly />
                        <button type="button" className="increment" data-target="children">+</button>
                      </div>
                    </div>

                    <div className="btn_huesped">{contenidoBusqueda.labels_search.box_boton}</div>
                  </div>
                </div>

                <button className="btn_buscar" >
                  <Image width={26} height={26} src="/img/icon_buscar.png" alt="icon-buscar"></Image>
                  {contenidoBusqueda.labels_search.boton}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
      {/* <!-- END MODAL SIN RESULTADOS DE BUSQUEDA --> */}
   
      {/* <!-- MODAL SERVICIOS ADICIONALES --> */}
      <div className="ui_fondo_modal ui_popup servicios">
        <div className="ui_marco_modal">
          <div className="ui_contenido_modal">
            <div className="ui_close_modal"></div>
            <Image className="img_fondo_left" width={102} height={106} src="/img/adorno_popup_superior.png" alt="icon-popup" />
            <h1 dangerouslySetInnerHTML={{ __html:contenidoBusqueda.popup_servicios.title}}></h1>
            <h2 dangerouslySetInnerHTML={{ __html:contenidoBusqueda.popup_servicios.subtitle}}></h2>
            
            <div className="list_service">
              <div className="item_row_service">
                <div className="title">
                  <input type="checkbox" name="" id="" />
                  <h3>Servicio de transporte</h3>
                </div>
                <h3>US$ 40.00</h3>
              </div>

              <div className="item_row_service">
                <div className="title">
                  <input type="checkbox" name="" id="" />
                  <h3>Servicio de transporte</h3>
                </div>
                <h3>US$ 40.00</h3>
              </div>

              <div className="item_row_service">
                <div className="title">
                  <input type="checkbox" name="" id="" />
                  <h3>Servicio de transporte</h3>
                </div>
                <h3>US$ 40.00</h3>
              </div>

              <div className="item_row_service">
                <div className="title">
                  <input type="checkbox" name="" id="" />
                  <h3>Servicio de transporte</h3>
                </div>
                <h3>US$ 40.00</h3>
              </div>

              <div className="item_row_service">
                <div className="title">
                  <input type="checkbox" name="" id="" />
                  <h3>Servicio de transporte</h3>
                </div>
                <h3>US$ 40.00</h3>
              </div>

              <div className="item_row_service">
                <div className="title">
                  <input type="checkbox" name="" id="" />
                  <h3>Servicio de transporte</h3>
                </div>
                <h3>US$ 40.00</h3>
              </div>
            </div>

            <span>Total: US$ 120.00</span>
            <div className="button">{contenidoBusqueda.popup_servicios.boton}</div>
            
            <Image className="img_fondo_right" width={102} height={106} src="/img/adorno_popup_inferior.png" alt="icon-popup" />
          </div>
        </div>
      </div>
      {/* <!-- END MODAL SERVICIOS ADICIONALES --> */}

      {/* <!-- MODAL GUARDAR INFORMACION --> */}
      <div className="ui_fondo_modal ui_popup guardar_info">
        <div className="ui_marco_modal">
          <div className="ui_contenido_modal">
            <div className="ui_close_modal"></div>
            <Image className="img_fondo_left" width={102} height={106} src="/img/adorno_popup_superior.png" alt="icon-popup" />
            <h1 dangerouslySetInnerHTML={{__html:contenidoBusqueda.popup_information.title}}></h1>
            <h2 dangerouslySetInnerHTML={{__html:contenidoBusqueda.popup_information.subtitle}}></h2>
            <div className="row-input">
              <span>{contenidoBusqueda.popup_information.label_email}</span>
              <input type="text" id="email" name="email" maxLength={50}/>
            </div>

            <div className="ui_checkbox">
              <input type="checkbox" name="" id="" required />
              <span>
                {contenidoBusqueda.popup_information.label_policies}
                <Link href="/politicas-privacidad">{contenidoBusqueda.popup_information.label_policies_redirect}</Link>
              </span>
            </div>

            <div className="button">{contenidoBusqueda.popup_information.boton}</div>
            
            <Image className="img_fondo_right" width={102} height={106} src="/img/adorno_popup_inferior.png" alt="icon-popup" />
          </div>
        </div>
      </div>
      {/* <!-- END MODAL GUARDAR INFORMACION --> */}

      {/* <!-- MODAL CONFIRMACION INFORMACION GUARDADA --> */}
      <div className="ui_fondo_modal ui_popup guardar_info_completado">
          <div className="ui_marco_modal">
            <div className="ui_contenido_modal">
                <div className="ui_close_modal"></div>
                <Image className="img_fondo_left" width={102} height={106} src="/img/adorno_popup_superior.png" alt="icon-popup" />
                <Image width={68} height={68} src="/img/icon_popup.png" alt="icon-popup" />
                <h1 dangerouslySetInnerHTML={{__html:contenidoBusqueda.popup_confirmation.title}}></h1>
                <Image className="img_fondo_right" width={102} height={106} src="/img/adorno_popup_inferior.png" alt="icon-popup" />
            </div>
           </div>
        </div>
        {/* <!-- END MODAL CONFIRMACION INFORMACION GUARDADA--> */}
      
      <FooterSite />

    </>
  )
}


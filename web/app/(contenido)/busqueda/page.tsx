import  { Metadata } from "next"
import {FooterSite,HeaderSitev2, ListadoTipoHabitacion} from "@/components"
import Image from "next/image";

export const metadata:Metadata={
    title:"Resultado de busqueda",
    description:"Resultado de busqueda",
    keywords:["Busqueda","Reserva","Hotel"]
}
export default function Busqueda() {

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
                      <h2>Fecha de entrada</h2>
                    </div>
                    <input type="date" name="checkin" id="checkin"/>
                  </div>

                  <div className="ui_separator_input"></div>

                  <div className="item_input_form">
                    <div className="label">
                      <Image width={18} height={20} src="/img/icon_date.png" alt="icon-search"></Image>
                      <h2>Fecha de salida</h2>
                    </div>
                    <input type="date" name="checkout" id="checkout" />
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

        <section className="ui_seccion_2_busqueda">
            <div className="ui_info_resultado">
                <p className="label">Resultados de búsqueda</p>
                <p className="label_resultado">3 Resultados</p>
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
                            <h2>Check in: 09:00 a.m</h2>
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
                            <h2>Check out: 12:00 p.m</h2>
                          </div>

                          <div className="item_detalle">
                            <Image width={20} height={20} src="/img/icon_huesped.png" alt="icon-habitacion"/>
                            <h2>2 adultos</h2>
                          </div>
                        </div>
                      </div>

                      <p>Disfrute de una estancia cómoda y relajante en nuestra habitación doble estándar con dos camas. Esta habitación está diseñada para ofrecer el máximo confort y conveniencia, ideal para amigos, familiares o compañeros de trabajo que viajan juntos.</p>

                      <div className="ui_servicios_politicas">
                        <span>Servicios:</span>
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
              <h1>¡Lo sentimos!</h1>
              <h2>No se encontraron resultados para tu búsqueda. <br />Por favor, intenta realizar una nueva búsqueda</h2>
                
              <div className="ui_barra_busqueda">
                <form className="ui_form_busqueda" action="" method="get">
                  <div className="item_input_form">
                    <div className="label">
                      <Image width={18} height={20} src="/img/icon_date.png" alt="icon-search"></Image>
                      <h2>Fecha de entrada</h2>
                    </div>
                    <input type="date" name="checkin" id="checkin" />
                  </div>

                  <div className="ui_separator_input"></div>

                  <div className="item_input_form">
                    <div className="label">
                      <Image width={18} height={20} src="/img/icon_date.png" alt="icon-search"></Image>
                      <h2>Fecha de salida</h2>
                    </div>
                    <input type="date" name="checkout" id="checkout" />
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
           </div>
        </div>
        {/* <!-- END MODAL SIN RESULTADOS DE BUSQUEDA --> */}

        
        <FooterSite />

    </>
  )
}


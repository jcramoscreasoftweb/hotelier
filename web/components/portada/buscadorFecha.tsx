
"use client"
import Image from "next/image";

export const BuscarFechasPortada=()=>{
return (
    <>
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
        </>
)
}
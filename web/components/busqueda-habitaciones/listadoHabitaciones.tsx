import React, { Suspense } from "react";
import { PageBusquedaResponse } from "@/interfaces";
import Image from "next/image";
import { ListadoTipoHabitacion } from "../busqueda/busqueda";
import { BusquedaHabitaciones } from "./busquedaHabitaciones";

export const ListadoHabitaciones =  ({contenidoBusqueda , serarch_parameters }:any)=> {

    return (
        <>
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
                            <input type="date" name="date_in" value={serarch_parameters.data ? serarch_parameters.date_in : "" } readOnly id="checkin"/>
                        </div>

                        <div className="ui_separator_input"></div>

                        <div className="item_input_form">
                            <div className="label">
                            <Image width={18} height={20} src="/img/icon_date.png" alt="icon-search"></Image>
                            <h2>{contenidoBusqueda.labels_search.date_out}</h2>
                            </div>
                            <input type="date" name="date_out"  value={serarch_parameters.data ? serarch_parameters.date_out : "" } readOnly id="checkout" />
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
                                <input type="text" id="adults" name="adults" value={serarch_parameters.data ? serarch_parameters.adults : "" } min="1" max="10" readOnly />
                                <button type="button" className="increment" data-target="adults">+</button>
                                </div>
                            </div>

                            <div className="item_box_huesped">
                                <h2>{contenidoBusqueda.labels_search.box_children}</h2>
                                <div className="contador_huesped">
                                <button type="button" className="decrement" data-target="children">−</button>
                                <input type="text" id="children" name="children" value={serarch_parameters.data ? serarch_parameters.children : "" } min="0" max="10" readOnly />
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


                    <BusquedaHabitaciones contenidoBusqueda={contenidoBusqueda}></BusquedaHabitaciones>

            </div>
        </>
    )

}
export const HabitacionesNoDisponible =   ({contenidoBusqueda , serarch_parameters}:any)=> {


    return (
        <>
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
                            <input type="date" name="date_in" id="checkin"/>
                        </div>

                        <div className="ui_separator_input"></div>

                        <div className="item_input_form">
                            <div className="label">
                            <Image width={18} height={20} src="/img/icon_date.png" alt="icon-search"></Image>
                            <h2>{contenidoBusqueda.labels_search.date_out}</h2>
                            </div>
                            <input type="date" name="date_out" id="checkout" />
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

                <section className="ui_mensaje_habitaciones_no_encontradas">
                    <h2>Recuerda que debes ingresar los datos para poder realizar la busqueda</h2>
                </section>
            </div>

        </>
    )
}

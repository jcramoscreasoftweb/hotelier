import  { Metadata } from "next"
import {HeaderSitev2, FooterSite, ListadoTipoHabitacion} from "@/components"
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

      <div className="contenedor page_reclamos">
        <section className="ui_seccion_1_reclamos">
            <h1>Libro de Reclamaciones</h1>
            <p>Siempre buscamos mejorar nuestros servicios</p>

            <div className="ui_formulario_reclamo">
                <div className="ui_marcador">
                    <div className="item_marcador">
                        <span>1</span>
                    </div>
                    <div className="separador"></div>

                    <div className="item_marcador">
                        <span>2</span>
                    </div>

                </div>
                <form action="" method="post">
                    <div className="ui_formulario_tabs">
                      <div className="tab_1">
                        <h3>Para iniciar el reclamo, por favor, identifícate</h3>
                        <div className="tab_title">
                          <Image width={18} height={20} src="/img/icon_datos.png" alt="icon-formulario"/>
                          <span>Datos personales</span>
                        </div>

                        <div className="row-inputs">
                          <div className="item_input">
                            <span>Apellido paterno</span>
                            <input type="text" id="" name="" maxLength={30} required/>
                            <p></p>
                          </div>
                          <div className="item_input">
                            <span>Apellido materno</span>
                            <input type="text" id="" name="" maxLength={30} required/>
                            <p></p>
                            </div>
                        </div>

                        <div className="row-inputs">
                          <div className="item_input">
                            <span>Nombres</span>
                            <input type="text" id="" name="" maxLength={30} required/>
                            <p></p>
                          </div>
                          <div className="item_input">
                            <span>Documento y número de documento</span>
                            <div className="ui_selector_input">
                                <select name="" id="">
                                    <option value="1">DNI</option>
                                    <option value="2">Pasaporte</option>
                                </select>
                                <input type="text" id="" name="" required/>
                            </div>
                            <p></p>
                          </div>
                        </div>

                        <div className="row-inputs">
                          <div className="item_input large">
                            <span>Dirección</span>
                            <input type="text" id="" name="" maxLength={100} required/>
                            <p></p>
                          </div>
                        </div>

                        <div className="row-inputs">
                          <div className="item_input">
                            <span>Correo electrónico</span>
                            <input type="text" id="" name="" maxLength={30} required/>
                            <p></p>
                          </div>
                          <div className="item_input">
                            <span>Teléfono</span>
                            <div className="ui_selector_input">
                                <select name="" id="">
                                    <option value="1">+51 Perú</option>
                                    <option value="2">+51 Perú</option>
                                </select>
                                <input type="text" id="" name="" required/>
                            </div>
                            <p></p>
                          </div>
                        </div>

                        <div className="row_buttons f-end">
                          <div className="btn_next">
                            Siguiente
                          </div>
                        </div>
                      </div>

                      <div className="tab_2">
                        <h3>Ahora te pedimos que brindes los detalles de tu reclamo.</h3>
                        <div className="tab_title">
                          <Image width={18} height={20} src="/img/icon_detalle_reclamo.png" alt="icon-formulario"/>
                          <span>Detalles del reclamo</span>
                        </div>

                        <div className="row-inputs">
                          <div className="item_input">
                            <span>Fecha del incidente</span>
                            <input type="date" id="" name="" maxLength={30} required/>
                          </div>
                          <div className="item_input">
                            <span>Tipos de registro</span>
                            <select name="" id="">
                                <option value="1">DNI</option>
                                <option value="2">Pasaporte</option>
                            </select>
                          </div>
                        </div>

                        <div className="row-inputs">
                          <div className="item_input">
                            <span>Código de reserva</span>
                            <input type="text" id="" name="" maxLength={5} required/>
                          </div>
                        </div>

                        <div className="row-inputs">
                          <div className="item_input">
                            <span>Detalle</span>
                            <textarea  id="" name="" maxLength={400} required/>
                          </div>
                        </div>

                        <h2>Al enviar este formulario estoy dando conformidad de que los datos consignados son verdaderos y acepto el uso de estos, según la Ley de Protección de datos personales.</h2>

                        <div className="ui_checkbox">
                          <input type="checkbox" name="" id="" />
                          <span>He leído y acepto las <a href="">Políticas de privacidad.</a></span>
                        </div>

                        <div className="row_buttons">
                          <div className="btn_back">
                              <Image width={18} height={20} src="/img/icon_btn_back_form.png" alt="icon-formulario"/>
                              <span>Anterior</span>
                          </div>

                          <div className="btn_form">
                            <button>Finalizar</button>
                          </div>

                        </div>
                        
                      </div>
                      

                    </div>
                    

                </form>

            </div>
          
        </section>


      </div>

      <FooterSite />


    </>
  )
}


import { Metadata } from "next"
import { HeaderSitev2, FooterSite} from "@/components"
import { ReclamoResponse,PhoneCodeResponse} from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

export const metadata:Metadata={
    title:"Sacha Cusco",
    description:"Libro de reclamación",
    keywords:["libro","reclamos"]
}
export default async function LibroReclamaciones() {
    let url = "https://creasoft.com.pe/hotelier_api/pages/page-reclamos.json";
    let requestAPI: any = await fetch(url);
    requestAPI = await requestAPI.json();
    let contenidoReclamos: ReclamoResponse = requestAPI.payload["es"];

    let url_phonecode = "https://creasoft.com.pe/hotelier_api/get-phonecode.json";
    let requestAPI_phone: any = await fetch(url_phonecode);
    requestAPI_phone = await requestAPI_phone.json();
    let phoneCode: PhoneCodeResponse[] = requestAPI_phone.payload["es"];

  return (
    <>
      <HeaderSitev2 />

      <div className="contenedor page_reclamos">
        <section className="ui_seccion_1_reclamos">
            <h1>{contenidoReclamos.principal_section.title}</h1>
            <p>{contenidoReclamos.principal_section.subtitle}</p>

            <div className="ui_formulario_reclamo">
                <div className="ui_marcador">
                    <div className="item_marcador active">
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
                        <h3>{contenidoReclamos.form_step_1.title}</h3>
                        <div className="tab_title">
                          <Image width={18} height={20} src="/img/icon_datos.png" alt="icon-formulario"/>
                          <span>{contenidoReclamos.form_step_1.subtitle}</span>
                        </div>

                        <div className="row-inputs">
                          <div className="item_input">
                            <span>{contenidoReclamos.form_step_1.label_lastname_1}</span>
                            <input type="text" id="first_lastname" name="first_lastname" maxLength={30} required/>
                            <p></p>
                          </div>
                          <div className="item_input">
                            <span>{contenidoReclamos.form_step_1.label_lastname_2}</span>
                            <input type="text" id="second_lastname" name="second_lastname" maxLength={30} required/>
                            <p></p>
                            </div>
                        </div>

                        <div className="row-inputs">
                          <div className="item_input">
                            <span>{contenidoReclamos.form_step_1.label_names}</span>
                            <input type="text" id="name" name="name" maxLength={30} required/>
                            <p></p>
                          </div>
                          <div className="item_input">
                            <span>{contenidoReclamos.form_step_1.label_tpdoc}</span>
                            <div className="ui_selector_input">
                                <select name="tpdoc" id="tpdoc">
                                    <option value="1">DNI</option>
                                    <option value="2">Pasaporte</option>
                                </select>
                                <input type="text" id="doc_number" name="doc_number" required/>
                            </div>
                            <p></p>
                          </div>
                        </div>

                        <div className="row-inputs">
                          <div className="item_input large">
                            <span>{contenidoReclamos.form_step_1.label_address}</span>
                            <input type="text" id="address" name="address" maxLength={100} required/>
                            <p></p>
                          </div>
                        </div>

                        <div className="row-inputs">
                          <div className="item_input">
                            <span>{contenidoReclamos.form_step_1.label_email}</span>
                            <input type="text" id="email" name="email" maxLength={30} required/>
                            <p></p>
                          </div>
                          <div className="item_input">
                            <span>{contenidoReclamos.form_step_1.label_phone}</span>
                            <div className="ui_selector_input">
                                <select name="id_country" id="id_country" defaultValue={139}>
                                  {phoneCode.map((item : any) => {
                                    return(
                                        <option key={item.id} value={item.id}>+ {item.code_phone} {item.country_name}</option>
                                    );
                                  })}
                                </select>
                                <input type="text" id="phone" name="phone" required/>
                            </div>
                            <p></p>
                          </div>
                        </div>

                        <div className="row_buttons f-end">
                          <div className="btn_next">
                          {contenidoReclamos.form_step_1.text_btn_next}
                          </div>
                        </div>
                      </div>

                      <div className="tab_2">
                        <h3>{contenidoReclamos.form_step_2.title}</h3>
                        <div className="tab_title">
                          <Image width={18} height={20} src="/img/icon_detalle_reclamo.png" alt="icon-formulario"/>
                          <span>{contenidoReclamos.form_step_2.subtitle}</span>
                        </div>

                        <div className="row-inputs">
                          <div className="item_input">
                            <span>{contenidoReclamos.form_step_2.label_date}</span>
                            <input type="date" id="incident_date" name="incident_date" maxLength={30} required/>
                          </div>
                          <div className="item_input">
                            <span>{contenidoReclamos.form_step_2.label_tpregister}</span>
                            <select name="tp_register" id="tp_register">
                                <option value="1">Tipo registro 1</option>
                                <option value="2">Tipo registro 2</option>
                            </select>
                          </div>
                        </div>

                        <div className="row-inputs">
                          <div className="item_input">
                            <span>{contenidoReclamos.form_step_2.label_code}</span>
                            <input type="text" id="id_reservation" name="id_reservation" maxLength={5} required/>
                          </div>
                        </div>

                        <div className="row-inputs">
                          <div className="item_input">
                            <span>{contenidoReclamos.form_step_2.label_detail}</span>
                            <textarea  id="detail" name="detail" maxLength={400} required/>
                          </div>
                        </div>

                        <h2>{contenidoReclamos.form_step_2.text_conformity}</h2>

                        <div className="ui_checkbox">
                          <input type="checkbox" name="" id="" required/>
                          <span>
                            {contenidoReclamos.form_step_2.label_policies}
                            <Link href="/politicas-privacidad">{contenidoReclamos.form_step_2.label_policies_redirect}</Link>
                          </span>
                        </div>

                        <div className="row_buttons">
                          <div className="btn_back">
                              <Image width={18} height={20} src="/img/icon_btn_back_form.png" alt="icon-formulario"/>
                              <span>{contenidoReclamos.form_step_2.text_btn_back}</span>
                          </div>

                          <div className="btn_form">
                            <button>{contenidoReclamos.form_step_2.text_btn_send}</button>
                          </div>
                        </div>
                      </div>
                    </div>
                </form>

            </div>

        </section>
      </div>

      {/* <!-- MODAL CONTACTO --> */}
      <div className="ui_fondo_modal ui_popup">
        <div className="ui_marco_modal">
            <div className="ui_contenido_modal">
                <div className="ui_close_modal"></div>
                <Image className="img_fondo_left" width={102} height={106} src="/img/adorno_popup_superior.png" alt="icon-popup" />
                <Image width={68} height={68} src="/img/icon_popup.png" alt="icon-popup" />
                <h1>{contenidoReclamos.popup.title}</h1>
                <h2>{contenidoReclamos.popup.subtitle}</h2>
                <Image className="img_fondo_right" width={102} height={106} src="/img/adorno_popup_inferior.png" alt="icon-popup" />
            </div>
        </div>
      </div>
      {/* <!-- END MODAL CONTACTO--> */}

      <FooterSite />

    </>
  )
}
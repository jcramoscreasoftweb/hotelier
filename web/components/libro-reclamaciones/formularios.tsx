"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ConfirmacionFormularioLibro from "./confirmacion";
import { Loadingv1 } from "../generales/loading";
export default function FormularioLibro({contenidoReclamos,phoneCode}:any){

    const [tab1,setTab1] = useState(true);
    const [loading, setLoading] = useState(false);
    const [registroCorrecto, setRegistroCorrecto] = useState(false);
    const intialDataFormulario={
      first_lastname: '',
      second_lastname: '',
      name: '',
      tp_doc: 'DNI',
      doc_number: '',
      address: '',
      email: '',
      id_country: 139,
      phone: '',
       // Campos del tab 2
      incident_date: '',
      tp_register: '',
      id_reservation: '',
      detail: '',
      conformity: false, // Checkbox

    }
    const [formData, setFormData] = useState(intialDataFormulario);

      const [errors, setErrors] = useState<any>({});

      // Manejar el cambio de los inputs
      const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Limpia el error del campo modificado
      };

       // Validar el formulario
    const validate = () => {

      const newErrors:any = {};

      if (!formData.first_lastname.trim()) newErrors.first_lastname = 'Este campo es obligatorio';
      if (!formData.second_lastname.trim()) newErrors.second_lastname = 'Este campo es obligatorio';
      if (!formData.name.trim()) newErrors.name = 'Este campo es obligatorio';
      if (!formData.doc_number.trim()) newErrors.doc_number = 'Este campo es obligatorio';
      if (!formData.address.trim()) newErrors.address = 'Este campo es obligatorio';
      if (!formData.email.trim()) {
        newErrors.email = 'Este campo es obligatorio';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'El correo electrónico no es válido';
      }
      if (!formData.phone.trim()) newErrors.phone = 'Este campo es obligatorio';

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0; // Devuelve true si no hay errores
    };

    // Validación para Tab 2
    const validate2 = () => {
      const newErrors:any = {};

      if (!formData.incident_date) newErrors.incident_date = 'La fecha del incidente es obligatoria.';
      if (!formData.tp_register) newErrors.tp_register = 'El tipo de registro es obligatorio.';
      if (!formData.id_reservation || formData.id_reservation.length > 5) {
        newErrors.id_reservation = 'El código de reserva debe tener máximo 5 caracteres.';
      }
      if (!formData.detail) newErrors.detail = 'El detalle es obligatorio.';
      if (!formData.conformity) newErrors.conformity = 'Debe aceptar las políticas de privacidad.';

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
      /*if (Object.keys(newErrors).length === 0) {
        console.log('Enviar datos:', formData);
        alert('Formulario enviado exitosamente');
      }*/
    };


    // Manejar el envío
    const handleSubmit = (e:any) => {
       // e.preventDefault();

        if (validate() ) {
          setTab1(false);

          // Aquí puedes continuar con la lógica (enviar datos, cambiar de paso, etc.)
        } else {
          console.log('Errores:', errors);
        }
      };
      const handleSubmitTab2 = (e:any) => {
        // e.preventDefault();

         if (validate2() ) {


          setLoading(true);
          registroReclamo(formData)


           // Aquí puedes continuar con la lógica (enviar datos, cambiar de paso, etc.)
         } else {
           console.log('Errores:', errors);
         }
       }
  // Manejar el envío

    const validacionTab1=()=>{
      handleSubmit("e")
        //setTab1(false)
    }
    const validacionTab2=()=>{
      handleSubmitTab2("e")
      //handleSubmit("e")
        //setTab1(false)
    }

    const registroReclamo = async (data:any) => {
        try {

          const username = process.env.NEXT_PUBLIC_API_USER;
          const password = process.env.NEXT_PUBLIC_API_PASS;
          const apiUrl = process.env.NEXT_PUBLIC_API_URL;

          // Codifica las credenciales en Base64
          const auth = btoa(`${username}:${password}`);
          const response = await fetch(`${apiUrl}/api/create-claim`,{
            method: "POST", // GET es el valor predeterminado,
            body: JSON.stringify(data),
            headers: {
                Authorization: `Basic ${auth}`, // Encabezado de autenticación
                "Content-Type": "application/json" // Opcional, depende del servicio
            }
        } );
        //const response = await fetch(`https://creasoft.com.pe/hotelier_api/pages/search-typerooms.json?V4`);
        if (!response.ok) throw new Error('Error en la solicitud');

        const result = await response.json();

        setLoading(false);
        if(result.status==200){
          setRegistroCorrecto(true);
        }
        //console.log(result);
        //setCorreoEnviado(true)


            } catch (error:any) {
              //setErrorContacto(error.message);       // Asigna el mensaje de error al estado
          } finally {
              setLoading(false);             // Finaliza el indicador de carga
          }
    }

    const closeModal=()=>{
      setTab1(true)
      setFormData(intialDataFormulario);
      setRegistroCorrecto(false)
    }


    return (<>
 <div className="ui_formulario_reclamo">
                <div className="ui_marcador">



                    <div className={`item_marcador active`}>
                        <span >1</span>
                    </div>
                    <div className="separador"></div>

                    <div className={`item_marcador ${!tab1 ?"active" :""} `} >
                        <span >2</span>
                    </div>

                </div>
                <form action="" method="post">
                    <div className="ui_formulario_tabs">
                      {tab1 &&
                        <div className="tab_1">
                        <h3>{contenidoReclamos.form_step_1.title}</h3>
                        <div className="tab_title">
                          <Image width={18} height={20} src="/img/icon_datos.png" alt="icon-formulario"/>
                          <span>{contenidoReclamos.form_step_1.subtitle}</span>
                        </div>

                        <div className="row-inputs">
                          <div className="item_input">
                            <span>{contenidoReclamos.form_step_1.label_lastname_1}</span>
                            <input type="text"
                            id="first_lastname"
                            name="first_lastname"
                            maxLength={30} required
                             value={formData.first_lastname}
                             onChange={handleInputChange}
                             />
                            <p>{errors.first_lastname}</p>
                          </div>
                          <div className="item_input">
                            <span>{contenidoReclamos.form_step_1.label_lastname_2}</span>
                            <input type="text"
                            id="second_lastname"
                            name="second_lastname"
                            maxLength={30}
                            required
                            value={formData.second_lastname}
                            onChange={handleInputChange}
                            />
                            <p>{errors.second_lastname}</p>
                            </div>
                        </div>

                        <div className="row-inputs">
                          <div className="item_input">
                            <span>{contenidoReclamos.form_step_1.label_names}</span>
                            <input type="text"
                            id="name"
                            name="name"
                            maxLength={30}
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            />
                            <p>{errors.name}</p>
                          </div>
                          <div className="item_input">
                            <span>{contenidoReclamos.form_step_1.label_tpdoc}</span>
                            <div className="ui_selector_input">
                                <select
                                name="tp_doc"
                                id="tp_doc"
                                value={formData.tp_doc}
                                onChange={handleInputChange}
                                >
                                    <option value="DNI">DNI</option>
                                    <option value="Pasaporte">Pasaporte</option>
                                </select>
                                <input type="text"
                                id="doc_number"
                                name="doc_number"
                                required
                                value={formData.doc_number}
                                onChange={handleInputChange}
                                />
                            </div>
                            <p>{errors.doc_number}</p>
                          </div>
                        </div>

                        <div className="row-inputs">
                          <div className="item_input large">
                            <span>{contenidoReclamos.form_step_1.label_address}</span>
                            <input type="text"
                            id="address"
                             name="address"
                             maxLength={100}
                             required
                             value={formData.address}
                            onChange={handleInputChange}
                            />

                            <p>{errors.address}</p>
                          </div>
                        </div>

                        <div className="row-inputs">
                          <div className="item_input">
                            <span>{contenidoReclamos.form_step_1.label_email}</span>
                            <input type="text"
                            id="email"
                            name="email"
                            maxLength={30}
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            />
                            <p>{errors.email}</p>
                          </div>
                          <div className="item_input">
                            <span>{contenidoReclamos.form_step_1.label_phone}</span>
                            <div className="ui_selector_input">
                                <select name="id_country" id="id_country"
                                 value={formData.id_country}
                                 onChange={handleInputChange}
                                 >
                                  {phoneCode.map((item : any) => {
                                    return(
                                        <option key={item.id} value={item.id}>+ {item.code_phone} {item.country_name}</option>
                                    );
                                  })}
                                </select>
                                <input type="text"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleInputChange}
                              />
                            </div>
                            <p>{errors.phone}</p>
                          </div>
                        </div>

                        <div className="row_buttons f-end">
                          <div className="btn_next" onClick={()=>{ validacionTab1()}}>
                          {contenidoReclamos.form_step_1.text_btn_next}
                          </div>
                        </div>
                        </div>
                      }
                      {
                        !tab1 &&
                        <div className="tab_2">
                        <h3>{contenidoReclamos.form_step_2.title}</h3>
                        <div className="tab_title">
                          <Image width={18} height={20} src="/img/icon_detalle_reclamo.png" alt="icon-formulario"/>
                          <span>{contenidoReclamos.form_step_2.subtitle}</span>
                        </div>

                        <div className="row-inputs">
                          <div className="item_input">
                            <span>{contenidoReclamos.form_step_2.label_date}</span>
                            <input type="date"
                            id="incident_date"
                            name="incident_date"
                            maxLength={30}

                            value={formData.incident_date}
                            onChange={handleInputChange}
                            />
                            <p>{errors.incident_date}</p>
                          </div>
                          <div className="item_input">
                            <span>{contenidoReclamos.form_step_2.label_tpregister}</span>
                            <select
                            name="tp_register"
                            id="tp_register"
                            value={formData.tp_register}
                            onChange={handleInputChange}
                            >
                               <option value="">Selecciona un tipo de incidencia</option>
                                <option value="1">Queja</option>
                                <option value="2">Reclamo</option>
                            </select>
                            <p>{errors.tp_register}</p>
                          </div>
                        </div>

                        <div className="row-inputs">
                          <div className="item_input">
                            <span>{contenidoReclamos.form_step_2.label_code}</span>
                            <input type="text"
                            id="id_reservation"
                            name="id_reservation"
                            maxLength={5}

                            value={formData.id_reservation}
                            onChange={handleInputChange}
                            />
                             <p>{errors.id_reservation}</p>
                          </div>
                        </div>

                        <div className="row-inputs">
                          <div className="item_input">
                            <span>{contenidoReclamos.form_step_2.label_detail}</span>
                            <textarea
                            id="detail"
                            name="detail"
                            maxLength={400}

                            value={formData.detail}
                            onChange={handleInputChange}
                            />
                            <p>{errors.detail}</p>
                          </div>
                        </div>

                        <h2>{contenidoReclamos.form_step_2.text_conformity}</h2>

                        <div className="ui_checkbox">
                          <input type="checkbox"
                          name="conformity"
                          id="conformity"
                          checked={formData.conformity}
                          onChange={handleInputChange}
                          required/>
                          <span>
                            {contenidoReclamos.form_step_2.label_policies}
                            <Link href="/politicas-privacidad">{contenidoReclamos.form_step_2.label_policies_redirect}</Link>
                          </span>

                          <div className="error-terminos">
                          <p>{errors.conformity}</p>
                          </div>
                        </div>


                        <div className="row_buttons">
                          <div className="btn_back" onClick={()=>{ setTab1(true)}}>
                              <Image width={18} height={20} src="/img/icon_btn_back_form.png" alt="icon-formulario"/>
                              <span>{contenidoReclamos.form_step_2.text_btn_back}</span>
                          </div>

                          <div className="btn_form">
                            <button type="button" onClick={()=>{validacionTab2()}}>{contenidoReclamos.form_step_2.text_btn_send}</button>
                          </div>
                        </div>
                        </div>
                      }
                    </div>
                </form>

            </div>
            {
              loading && <Loadingv1></Loadingv1>
            }
                      {
                        registroCorrecto && <ConfirmacionFormularioLibro contenidoReclamos={contenidoReclamos} closeModal={closeModal}></ConfirmacionFormularioLibro>
                      }
    </>)
}
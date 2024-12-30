"use client";
import { useState } from "react";
import { ModalRegistroContacto } from "./modalRegistroContacto";
import { Loadingv1 } from "../generales/loading";
type FormData = {
    name: string;
    id_country: string;
    phone: string;
    email: string;
    message: string;

  };

  type FormErrors = Partial<Record<keyof FormData, string>>;

export const FormularioContacto=({contenidoContacto,phoneCode}:any)=>{


  const [loadingContacto, setLoadingContacto] = useState(false);   // Estado para el indicador de carga
  const [errorContacto, setErrorContacto] = useState(null);
  const [correoEnviado, setCorreoEnviado] = useState(false);


  const intialDataContacto={
    name: "",
    id_country: "139",
    phone: "",
    email: "",
    message: ""
  }
  const [formData, setFormData] = useState<FormData>(intialDataContacto);

  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleInputSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(`Selected country ID: ${value}`); // Captura el valor seleccionado
  };


  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    //if (!formData.id_country.trim()) newErrors.id_country = "Country is required.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\+?[0-9]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number format.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // True if no errors
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(errors)
    if (validateForm()) {
      console.log("Form submitted successfully!", formData);
      enviarContacto(formData);
      // Aquí puedes manejar el envío del formulario (e.g., API call)
    } else {
      console.log("Validation failed.");
    }
  };

  const enviarContacto = async (data:any) => {
    try {
        setLoadingContacto(true);
        const username = process.env.NEXT_PUBLIC_API_USER;
        const password = process.env.NEXT_PUBLIC_API_PASS;
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        // Codifica las credenciales en Base64
        const auth = btoa(`${username}:${password}`);

        const response = await fetch(`${apiUrl}/api/create-contact`,{
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
        console.log(result);
        //console.log(result);
        setCorreoEnviado(true)

    } catch (error:any) {
        setErrorContacto(error.message);       // Asigna el mensaje de error al estado
    } finally {
        setLoadingContacto(false);             // Finaliza el indicador de carga
    }
};
 const cerrarModal=()=>{
  setFormData(intialDataContacto);
  setCorreoEnviado(false);
 }

    return (
        <>
 { loadingContacto && <Loadingv1></Loadingv1>}
        <form onSubmit={handleSubmit} className="formulario-contacto"  method="post">
<h2 >{contenidoContacto.form_section.title}</h2>
<p>{contenidoContacto.form_section.subtitle}</p>

<div className="ui_input_form">
    <span>{contenidoContacto.form_section.label_name}</span>
    <input type="text" id="name"  value={formData.name}
          onChange={handleInputChange} name="name" maxLength={200} required />
           {errors.name && <p className="error">{errors.name}</p>}
</div>

<div className="ui_input_form">
    <span>{contenidoContacto.form_section.label_phone}</span>
    <div className="ui_selector_input">
        <select name="id_country" id="id_country"
           value={formData.id_country}
          onChange={handleInputSelectChange}
          >
            {phoneCode.map((item : any) => {
                return(
                    <option key={item.id} value={item.id}>+ {item.code_phone} {item.country_name}</option>
                );
            })
            }

        </select>
        <input type="text" id="phone"  value={formData.phone}
          onChange={handleInputChange} name="phone" maxLength={15} required/>

    </div>
    {errors.phone && <p className="error">{errors.phone}</p>}
</div>

<div className="ui_input_form">
    <span>{contenidoContacto.form_section.label_email}</span>
    <input type="email" id="email"  value={formData.email}
          onChange={handleInputChange} name="email" maxLength={100} required/>
           {errors.email && <p className="error">{errors.email}</p>}
</div>

<div className="ui_input_form">
    <span>{contenidoContacto.form_section.label_message}</span>
    <textarea id="message"   value={formData.message}
          onChange={handleInputChange} name="message" maxLength={220} required/>
            {errors.message && <p className="error">{errors.message}</p>}
</div>

<div className="ui_input_form">
    <button type="submit">{contenidoContacto.form_section.label_button}</button>
</div>
</form>
{correoEnviado ? <ModalRegistroContacto contenidoContacto={contenidoContacto} cerrarModal={cerrarModal}/> : <></>}
        </>
    )
}
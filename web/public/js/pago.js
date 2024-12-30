 /*** info culqui  ***/


 const btn_pagar = document.getElementById('pagar-culqui');
 let allValid;

 function validarCampos(){
    allValid = true;
    const first_lastname = document.getElementById('first_lastname');
    const second_lastname = document.getElementById('second_lastname');
    const name = document.getElementById('name');
    const doc_number = document.getElementById('doc_number');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const hour = document.getElementById('hour');
    const inp_terminos = document.getElementById('inp_terminos');

 // Lista de inputs a validar
 const inputs = [first_lastname, second_lastname, name, doc_number, email, phone, hour];

 inputs.forEach(input => {

   if (!input.value.trim()) {

     input.classList.add('error'); // Agregar clase si está vacío
     allValid = false;
   } else {
     input.classList.remove('error'); // Remover clase si tiene valor
   }
 });
 // Validar que el checkbox esté marcado

  if (!inp_terminos.checked) {
    inp_terminos.classList.add('error-checkbox');
    allValid = false;
  } else {
    inp_terminos.classList.remove('error-checkbox');
  }

 }
 btn_pagar.addEventListener('click', (e) => {


let data=JSON.parse(localStorage.getItem("datareserva"));



validarCampos();
console.log("-----****-----")
if (allValid) {
  if(data.tipo_pago==2){
    cargo();
  }else{
    cargoCulqui(e);
  }
}




 });
 function cargoCulqui(e){
  let dataReserva=JSON.parse(localStorage.getItem("datareserva"));
  var Culqi;
  var settings = {
          title: 'Perú Hotelier',
          currency: 'USD',
          amount: dataReserva.total_pago+"00",
          order: 'ord_live_d1P0Tu1n7Od4nZdp',
          xculqirsaid: 'be71cbe5-08f0-43ac-8c0a-a865ccecb69b',
          rsapublickey: '-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDLFswWxnKR0D0TnoYeon5mIa8wU3LQxBanoDjKlgrGHixJ4zIZmRF9SJ5ksBGt6K0F7sKoZsldUjyBzThcufoeXvZYqeqJ1M7OlB+MNOMa4ShAWkAgSbivJLzDNTYrF77gj6kRfgekfeCJnnwFcfEaQZ2DvmW3YUPEvF77jQ2LCwIDAQAB-----END PUBLIC KEY-----',
      }
      const paymentMethods = {// las opciones se ordenan según se configuren
              tarjeta: true,
              yape: true,
              billetera: true,
              bancaMovil: true,
              agente: true,
              cuotealo: true,
          }
      const options = {
          lang: 'auto',
          installments: true,
          modal: true,
          container: "#culqi-container", // Opcional
          paymentMethods: paymentMethods,
          paymentMethodsSort: Object.keys(paymentMethods), // las opciones se ordenan según se configuren en paymentMethods
      }
      const config = {
          settings,
          options,
      };


  const handleCulqiAction = () => {

          if (Culqi.token) {
              if (Culqi.token.id){
                  const token = Culqi.token.id;
                  const email = Culqi.token.email;
                  Culqi.close();
                  console.log(token);
                  console.log(email);
                  //AQUI CONSUMES EL API PARA ENVIAR EL TOKEN Y EL EMAIL QUE EL USUARIO AÑADA EN EL CAMPO DE EMAIL DEL FORMULARIO
              }
          } else if (Culqi.order) {
          const order = Culqi.order;
          } else {
          console.log('Errorrr : ', Culqi.error);
          }
      }
     const publicKey = 'pk_live_7e82730b0192c948'; //CLAVE PUBLICA
      Culqi = new CulqiCheckout(publicKey, config);
      Culqi.culqi = handleCulqiAction;
  Culqi.open()
  e.preventDefault();
 }

 async function cargo() {
  console.log("clickl aqui");
  const first_lastname = document.getElementById('first_lastname');
  const second_lastname = document.getElementById('second_lastname');
  const name = document.getElementById('name');
  const doc_number = document.getElementById('doc_number');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const tpdoc=document.getElementById('tpdoc').value;
  const id_country= document.getElementById('id_country');
  let value_tpdoc="Pasaporte"
  if(tpdoc==1){
    value_tpdoc="DNI";
  }
  let dataReserva=JSON.parse(localStorage.getItem("datareserva"));
  let detalle_aditional_services=[];
  dataReserva.aditional_services.map((item)=>{
    detalle_aditional_services.push(item.id)
  })
 // "date_in":dataReserva.date_in,
 // "date_out": dataReserva.date_out,
  let par_date_in=dataReserva.date_in.split("/")
  let par_date_out=dataReserva.date_out.split("/")
  const data = {
    "contact_name":  name.value ,
    "coupon" : "",
    "contact_lastname": first_lastname.value + " " + second_lastname.value,
    "contact_email": email.value,
    "contact_phone": phone.value,
    "code_phone":id_country.value,
    "contact_tpdoc": value_tpdoc,
    "contact_docnumber":doc_number.value,
    //"date_in":dataReserva.date_in,
    "date_in":par_date_in[2]+"-"+par_date_in[0]+"-"+par_date_in[1],
    //"date_out": dataReserva.date_out,
    "date_out":par_date_out[2]+"-"+par_date_out[0]+"-"+par_date_out[1],
    "id_tp_payment": dataReserva.tipo_pago,
    "import":dataReserva.total_pago,
    "note": "Test note",
    "num_adults": dataReserva.adults,
    "num_children":  dataReserva.children,
    "id_room" : dataReserva.id,
    "id_roomstype" : dataReserva.id_type_room,
    "payment_token" : "tkn_test_1c08j7eqr3VXkIVZ",
    "payment_email" : "mj.sistem@creasoftweb.com",
    "services" : detalle_aditional_services
};

console.log(data);
const username = "#|~4139h*II7yN@"; // Sustituye con tu usuario
const password = "r)qFV.Ey8W6PX5>"; // Sustituye con tu contraseña
const credentials = btoa(`${username}:${password}`); // Codifica en Base64

try {
const response = await fetch('https://api.sachacusco.com.pe/api/create-reservation', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${credentials}`,
  },
  body: JSON.stringify(data),
});

if (!response.ok) {
  throw new Error(`HTTP error! Status: ${response.status}`);
}

const result = await response.json();
console.log('Response:', result);
console.log(result.status);
if(result.status==200){
  console.log("aqui")
  $(".modal-gracias").fadeIn();
}
} catch (error) {
console.error('Error:', error.message);
}
 }

$(function(){
  $(".close-modal-gracias").click(function(){
    $(".modal-gracias").fadeOut();
    window.location="/"
  })
 })
/*** END CULQUI */

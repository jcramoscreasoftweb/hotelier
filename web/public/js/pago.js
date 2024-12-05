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
   // validarCampos();
    console.log(allValid)
    //tkn_test_ZQMyxrpwvH4vQfzC

    /*allValid=true;
    if (allValid) {
        let total=$("#pago-total").attr("data-total");

        var Culqi;
        var settings = {
                title: 'Perú Hotelier',
                currency: 'USD',
                amount: total+"00",
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
    }*/
        cargo();



 });

 async function cargo() {
  const data = {
    contact_name: "Moises",
    coupon: "",
    contact_lastname: "Jota",
    contact_email: "mjota@creasoftweb.com",
    contact_phone: "977153166",
    contact_tpdoc: "DNI",
    contact_docnumber: "78547414",
    date_in: "2024-11-08",
    date_out: "2024-11-10",
    id_tp_payment: "1",
    import: "500",
    note: "Test note",
    num_adults: "",
    num_children: "",
    reservation_services: [1, 2, 3],
    id_room: 1,
    payment_token: "tkn_test_MK8gj2Ra3S9lew70",
    payment_email:"mjota@creasoftweb.com"
};

const username = "#|~4139h*II7yN@"; // Sustituye con tu usuario
const password = "r)qFV.Ey8W6PX5>"; // Sustituye con tu contraseña
const credentials = btoa(`${username}:${password}`); // Codifica en Base64

try {
const response = await fetch('http://18.222.202.240/api/create-reservation', {
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
} catch (error) {
console.error('Error:', error.message);
}
 }

/*** END CULQUI */

 /*** info culqui  ***/


 const btn_pagar = document.getElementById('pagar-culqui');
 btn_pagar.addEventListener('click', (e) => {
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
 });

/*** END CULQUI */

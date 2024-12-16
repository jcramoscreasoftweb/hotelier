
"use client"
import { useSearchParams } from 'next/navigation'
import { useRef, useState, useEffect } from 'react';

import Image from "next/image";
import { useRouter } from 'next/navigation'
export const ContenidoDealleReserva=({contenidoDetalle}:any)=>{
  const router = useRouter()
    let localData:any;
    let reservaClienteLocal:any;
    const [reservaCliente, setReservaCliente] = useState(null);

    const inputCupon:any = useRef<HTMLInputElement>(null);
    const [dataCupon, setDataCupon] = useState<string | null>(null);
    const [loadingCupon, setLoadingCupon] = useState<boolean>(false); // Estado de carga
    const [errorCupon, setErrorCupon] = useState<string | null>(null);
    const [detalleCupon, setDetalleCupon] = useState<string | null>("");
    const [montoCupon, setMontoCupon] = useState<number | null>(0);
    const [cuponActivo, setCuponActivo] = useState<boolean>(false);



      useEffect(() => {
        localData=localStorage.getItem("datareserva");

        if(localData){
          console.log("hay data")
          let reservaClienteLocal=JSON.parse(localData.toString());

          setReservaCliente(reservaClienteLocal)
        }else{
          console.log("no hay data")
        }
      }, []);

      const calularMontoInicial=()=>{
        let monto_servicio=0;
        reservaClienteLocal.aditional_services.map((item:any)=>{
          monto_servicio=monto_servicio+reservaClienteLocal.aditional_services_aviables[item].price
        })

        let monto_reserva=reservaClienteLocal.price_web;
        if(reservaClienteLocal.tipo_pago=="2"){
          monto_reserva=reservaClienteLocal.price_hotel;
        }


        let monto=monto_reserva+monto_servicio;
        reservaClienteLocal.total_pago=monto;

      }


      console.log("------");
      console.log(reservaCliente);
      //calularMontoInicial()
      console.log("------");

  return (<>
  <h1>contenido</h1>
  </>)
}
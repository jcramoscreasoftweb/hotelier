import Image from "next/image";
import { useState } from "react";
export  default function NuevoModalServiciosAdicionales({contenidoBusqueda,closeModal,serviciosDisponibles, onSelectServices,onGenerateReservation}:any){
   // const [services, setServices] = useState([]);
   const [services, setServices] =  useState<{ id: number; icon: string;name: string; price: number }[]>([]);

    const handleToggleService = (service:any) => {
        setServices((prev:any) =>
          prev.includes(service)
            ? prev.filter((s:any) => s !== service)
            : [...prev, service]
        );

        onSelectServices(services);

      };

      const handleConfirmAndGenerate = () => {
        console.log("aqui desde el modal");
        console.log(services);
        //onSelectServices(services);

        onGenerateReservation(services);
      };
      console.log(services);
      let monto=0;
      services.map((item:any)=>{

        monto=monto+item.price;
      })
    return  (
        <>
         {/* <!-- MODAL SERVICIOS ADICIONALES --> */}
  <div className="ui_fondo_modal ui_popup servicios">
    <div className="ui_marco_modal">
      <div className="ui_contenido_modal">
        <div className="ui_close_modal" onClick={() => closeModal()}></div>
        <Image className="img_fondo_left" width={102} height={106} src="/img/adorno_popup_superior.png" alt="icon-popup" />
        <h1 >{contenidoBusqueda.popup_servicios.title}</h1>
        <h2 >{contenidoBusqueda.popup_servicios.subtitle}</h2>

        <div className="list_service">

            {
        serviciosDisponibles.map((item:any, index:any)=> {
             return(

                  <div className="item_row_service" key={index}>
                    <div className="title">

                      <input type="checkbox"
                      id={`service-${item.id}`}
                      checked={services.includes(item)}
                      onChange={() => handleToggleService(item)}
                       />

                      <label htmlFor={item.id} >
                      <h3>{item.name}</h3>
                      </label>

                    </div>
                    <h3>US$ {item.price}</h3>
                  </div>

            );


        })

        }



        </div>

        <span>Total: US$ {monto}</span>
        <br></br>
        <div className="button" onClick={()=>{ handleConfirmAndGenerate()}}>{contenidoBusqueda.popup_servicios.boton}</div>

        <Image className="img_fondo_right" width={102} height={106} src="/img/adorno_popup_inferior.png" alt="icon-popup" />
      </div>
    </div>
  </div>
  {/* <!-- END MODAL SERVICIOS ADICIONALES --> */}

        </>
    )
}
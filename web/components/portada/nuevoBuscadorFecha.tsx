"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { useRouter } from "next/navigation"; // Router para redirección
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";


interface NuevoBuscadorFechaProps {
  initialStartDate?: string | null;
  initialEndDate?: string | null;
  initialAdults?: number;
  initialChildren?: number;
}

export default function NuevoBuscadorFecha({
  initialStartDate,
  initialEndDate,
  initialAdults = 1,
  initialChildren = 0,
}:NuevoBuscadorFechaProps){
    const today = new Date();
    const router = useRouter();
    // Fecha actual

    const [startDate, setStartDate] = useState(
      initialStartDate ? new Date(initialStartDate) : today
    );
    const [endDate, setEndDate] = useState(
      initialEndDate ? new Date(initialEndDate) : null
    );
    const [adults, setAdults] = useState(initialAdults);
    const [children, setChildren] = useState(initialChildren);
    const [showGuests, setShowGuests] = useState(false);
  const handleSearch = () => {
    /*const searchParams = {
      startDate: startDate.toLocaleDateString("en-US"), // Formato mm/dd/yyyy
      endDate: endDate?.toLocaleDateString("en-US") || "", // Formato mm/dd/yyyy
      guests: {
        adults,
        children,
      },
    };*/

    const query = new URLSearchParams({
      startDate: startDate.toLocaleDateString("en-US"), // Formato mm/dd/yyyy
      endDate: endDate?.toLocaleDateString("en-US") || "", // Formato mm/dd/yyyy
      adults: String(adults),
      children: String(children),
    });



    router.push(`/busqueda-habitaciones?${query}`);


  };


  return (
    <>
         <div className="ui_marco_opciones_home">
              <div className="ui_barra_busqueda">
              <form className="ui_form_busqueda">
                      <div className="item_input_form">
                        <div className="label">
                          <Image width={18} height={20} src="/img/icon_date.png" alt="icon-search"></Image>
                          <h2>Fecha de entrada</h2>
                        </div>
                        <DatePicker
                        selected={startDate}
                        onChange={(date:any) => {
                            setStartDate(date);
                            // Si la fecha de fin es menor a la nueva fecha de inicio, actualízala
                            if (endDate && date > endDate) {
                            setEndDate(null);
                            }
                        }}
                        placeholderText="dd/mm/yyyy"
                        dateFormat="dd/MM/yyyy"
                        minDate={today}
                        />


                      </div>

                      <div className="ui_separator_input"></div>

                      <div className="item_input_form">
                        <div className="label">
                          <Image width={18} height={20} src="/img/icon_date.png" alt="icon-search"></Image>
                          <h2>Fecha de salida</h2>
                        </div>
                        <DatePicker
                        selected={endDate}
                        onChange={(date:any) => setEndDate(date)}
                        placeholderText="dd/mm/yyyy"
                        dateFormat="dd/MM/yyyy"
                        minDate={startDate || undefined} // Evita seleccionar una fecha menor a la de inicio
                        />
                      </div>

                      <div className="ui_separator_input"></div>

                      <div className="item_input_form">
                        <div className="label">
                          <Image width={18} height={20} src="/img/icon_huesped.png" alt="icon-search"></Image>
                          <h2>Huéspedes</h2>
                        </div>
                        <h2 className="label_huespedes" onClick={()=>{setShowGuests(true)}}>

                          {adults} adulto{adults > 1 ? "s" : ""}
                          {children > 0 && `, ${children} niño${children > 1 ? "s" : ""}`}

                          </h2>
                            {showGuests &&
                            <>
                             <div className="ui_box_huespedes">
                              <div className="item_box_huesped">
                                <h2>Adultos</h2>
                                <div className="contador_huesped">
                                  <button type="button" className="decrement" data-target="adults" onClick={() =>{setAdults((prev) => Math.max(1, prev - 1)) } }>−</button>
                                  <input type="text" id="adults" name="adults" value={adults} min="1" max="10" readOnly />
                                  <button type="button" className="increment" data-target="adults"  onClick={() => {setAdults((prev) => prev + 1) }} >+</button>
                                </div>
                              </div>

                              <div className="item_box_huesped">
                                <h2>Niños</h2>
                                <div className="contador_huesped">
                                  <button type="button" className="decrement" data-target="children"  onClick={() => setChildren((prev) => Math.max(0, prev - 1))}>−</button>
                                  <input type="text" id="children" name="children" value={children} min="0" max="10" readOnly />
                                  <button type="button" className="increment" data-target="children"  onClick={() => setChildren((prev) => prev + 1)}>+</button>
                                </div>
                              </div>

                              <div className="btn_huesped" onClick={()=>{setShowGuests(false)}}>Aplicar</div>

                              </div>
                            </>

                            }


                      </div>



                      <button type="button" className={!startDate || !endDate ? "btn_buscar inactive" :  "btn_buscar active"}   disabled={!startDate || !endDate}
                       onClick={(e) => {
                        e.preventDefault(); // Evitar el comportamiento por defecto del formulario
                        handleSearch();
                      }}>
                        <Image width={26} height={26} src="/img/icon_buscar.png" alt="icon-buscar"></Image>
                        Buscar
                      </button>
                    </form>
              </div>
            </div>
    </>



  );

};
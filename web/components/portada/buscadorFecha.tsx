
"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

export const BuscarFechasPortada=()=>{
  const [dateIn, setDateIn] = useState("");
  const [dateInMin, setDateInMin] = useState("");
  const [dateOut, setDateOut] = useState("");
  const [dateOutMin, setDateOutMin] = useState("");
  useEffect(() => {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + 1); // Añade un día a la fecha actual
    const nextDay = String(nextDate.getDate()).padStart(2, "0");
    setDateInMin(`${year}-${month}-${day}`)
    setDateIn(`${year}-${month}-${day}`);
    //setDateOut(`${year}-${month}-${nextDay}`); // Formato requerido para datetime-local
  }, []);

  const handleChangeDateIn = (e:any) => {
    setDateIn(e.target.value);

    const nextDate = new Date(e.target.value);
    nextDate.setDate(nextDate.getDate() + 2); // Añade un día a la fecha actual


    const year = nextDate.getFullYear();
    const month = String(nextDate.getMonth() + 1).padStart(2, "0");
    const day = String(nextDate.getDate()).padStart(2, "0");
    setDateOut(`${year}-${month}-${day}`);
    setDateOutMin(`${year}-${month}-${day}`)

  };
  const handleChangeDateOut = (e:any) => {
    setDateOut(e.target.value);
  };

return (
    <>
     <div className="ui_marco_opciones_home">
          <div className="ui_barra_busqueda">
          <form className="ui_form_busqueda" action="busqueda-habitaciones" method="get">
                  <div className="item_input_form">
                    <div className="label">
                      <Image width={18} height={20} src="/img/icon_date.png" alt="icon-search"></Image>
                      <h2>Fecha de entrada</h2>
                    </div>
                    <input type="date" name="date_in" id="checkin"
                    min={dateInMin}
                    value={dateIn} // Hora inicial basada en la fecha actual
                    onChange={handleChangeDateIn}
                    />
                  </div>

                  <div className="ui_separator_input"></div>

                  <div className="item_input_form">
                    <div className="label">
                      <Image width={18} height={20} src="/img/icon_date.png" alt="icon-search"></Image>
                      <h2>Fecha de salida</h2>
                    </div>
                    <input type="date" name="date_out"
                     min={dateOutMin}
                     value={dateOut} // Hora inicial basada en la fecha actual
                     onChange={handleChangeDateOut}
                     id="checkout" />
                  </div>

                  <div className="ui_separator_input"></div>

                  <div className="item_input_form">
                    <div className="label">
                      <Image width={18} height={20} src="/img/icon_huesped.png" alt="icon-search"></Image>
                      <h2>Huéspedes</h2>
                    </div>
                    <h2 className="label_huespedes">1 adulto</h2>

                    <div className="ui_box_huespedes">

                      <div className="item_box_huesped">
                        <h2>Adultos</h2>
                        <div className="contador_huesped">
                          <button type="button" className="decrement" data-target="adults">−</button>
                          <input type="text" id="adults" name="adults" value="1" min="1" max="10" readOnly />
                          <button type="button" className="increment" data-target="adults">+</button>
                        </div>
                      </div>

                      <div className="item_box_huesped">
                        <h2>Niños</h2>
                        <div className="contador_huesped">
                          <button type="button" className="decrement" data-target="children">−</button>
                          <input type="text" id="children" name="children" value="0" min="0" max="10" readOnly />
                          <button type="button" className="increment" data-target="children">+</button>
                        </div>
                      </div>

                      <div className="btn_huesped">Aplicar</div>

                    </div>


                  </div>



                  <button className="btn_buscar" >
                    <Image width={26} height={26} src="/img/icon_buscar.png" alt="icon-buscar"></Image>
                    Buscar
                  </button>
                </form>
          </div>
        </div>
        </>
)
}
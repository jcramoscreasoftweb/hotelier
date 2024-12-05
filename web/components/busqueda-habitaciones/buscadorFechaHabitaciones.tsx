
"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation'

export const BuscarFechasHabitaciones=({contenidoBusqueda}:any)=>{
    
    const searchParams = useSearchParams()

    const adults = searchParams.get('adults')
    const children = searchParams.get('children')
    const date_in:any = searchParams.get('date_in')
    const date_out = searchParams.get('date_out')
    const date = new Date(date_in);
    console.log(date instanceof Date && !isNaN(date_in));
   
    /*const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

    if (dateRegex.test(date_in)) {
      console.log("es una fecha")
    }*/


    const [dateIn, setDateIn] = useState("");
    const [dateOutMin, setDateOutMin] = useState("");
    const [dateOut, setDateOut] = useState("");
    useEffect(() => {
      
        if(date_in){
            setDateIn(date_in);
        }else{
            /*const now = new Date();
   
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, "0");
            const day = String(now.getDate()).padStart(2, "0");
            const hours = String(now.getHours()).padStart(2, "0");
            const minutes = String(now.getMinutes()).padStart(2, "0");
        
            /*const nextDate = new Date();
            nextDate.setDate(nextDate.getDate() + 1); // Añade un día a la fecha actual
            const nextDay = String(nextDate.getDate()).padStart(2, "0");
        
            setDateIn(`${year}-${month}-${day}`);*/
        }
        if(date_out){
            setDateOut(date_out);
            setDateOutMin(date_in);
        }else{
            const nextDate = new Date();
            nextDate.setDate(nextDate.getDate() + 1); // Añade un día a la fecha actual
            const year = nextDate.getFullYear();
            const month = String(nextDate.getMonth() + 1).padStart(2, "0");
            const nextDay = String(nextDate.getDate()).padStart(2, "0");
        
            setDateOutMin(`${year}-${month}-${nextDay}`);
        }
      
      //setDateOut(`${year}-${month}-${nextDay}`); // Formato requerido para datetime-local
    }, []);

    const handleChangeDateIn = (e:any) => {
        setDateIn(e.target.value);

        const nextDate = new Date(e.target.value);
        nextDate.setDate(nextDate.getDate() + 2); // Añade un día a la fecha actual
      
    
        const year = nextDate.getFullYear();
        const month = String(nextDate.getMonth() + 1).padStart(2, "0");
        const day = String(nextDate.getDate()).padStart(2, "0");
        setDateOutMin(`${year}-${month}-${day}`);

    }
    const handleChangeDateOut = (e:any) => {
        setDateOut(e.target.value);
    }



return(<>
<div className="ui_barra_busqueda">
                        <form className="ui_form_busqueda" action="" method="get">
                        <div className="item_input_form">
                            <div className="label">
                            <Image width={18} height={20} src="/img/icon_date.png" alt="icon-search"></Image>
                            <h2>{contenidoBusqueda.labels_search.date_in}</h2>
                            </div>
                            <input type="date" name="date_in" 
                             min={dateIn}
                             value={dateIn} // Hora inicial basada en la fecha actual
                             onChange={handleChangeDateIn}
                             id="checkin"/>
                        </div>

                        <div className="ui_separator_input"></div>

                        <div className="item_input_form">
                            <div className="label">
                            <Image width={18} height={20} src="/img/icon_date.png" alt="icon-search"></Image>
                            <h2>{contenidoBusqueda.labels_search.date_out}</h2>
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
                            <h2>{contenidoBusqueda.labels_search.guests}</h2>
                            </div>
                            <h2 className="label_huespedes">1 adulto</h2>

                            <div className="ui_box_huespedes">

                            <div className="item_box_huesped">
                                <h2>{contenidoBusqueda.labels_search.box_adutls}</h2>
                                <div className="contador_huesped">
                                <button type="button" className="decrement" data-target="adults">−</button>
                                <input type="text" id="adults" name="adults" value="1" min="1" max="10" readOnly />
                                <button type="button" className="increment" data-target="adults">+</button>
                                </div>
                            </div>

                            <div className="item_box_huesped">
                                <h2>{contenidoBusqueda.labels_search.box_children}</h2>
                                <div className="contador_huesped">
                                <button type="button" className="decrement" data-target="children">−</button>
                                <input type="text" id="children" name="children" value="0" min="0" max="10" readOnly />
                                <button type="button" className="increment" data-target="children">+</button>
                                </div>
                            </div>

                            <div className="btn_huesped">{contenidoBusqueda.labels_search.box_boton}</div>
                            </div>
                        </div>

                        <button className="btn_buscar" >
                            <Image width={26} height={26} src="/img/icon_buscar.png" alt="icon-buscar"></Image>
                            {contenidoBusqueda.labels_search.boton}
                        </button>
                        </form>

                    </div>
                    </>)


}
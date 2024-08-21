import  { Metadata } from "next"
import {HeaderSitev2, ListadoTipoHabitacion} from "@/components"
import Image from "next/image";

export const metadata:Metadata={
    title:"Resultado de busqueda",
    description:"Resultado de busqueda",
    keywords:["Busqueda","Reserva","Hotel"]
}
export default function Busqueda() {

  return (
    <>
      <HeaderSitev2 />
      <div className="contenedor page_busqueda">
        <section className="ui_seccion_1_busqueda">
          <div className="ui_marco_opciones_home no-position">
              <div className="ui_barra_busqueda">

              </div>
          </div>
        </section>

        <section className="ui_seccion_2_busqueda">
            <div className="ui_info_resultado">
                <p className="label">Resultados de búsqueda</p>
                <p className="label_resultado">3 Resultados</p>
            </div>

            <div className="ui_listado_habitaciones">
                <ListadoTipoHabitacion />
            </div>
      </section>

      </div>


      

      

    </>
  )
}

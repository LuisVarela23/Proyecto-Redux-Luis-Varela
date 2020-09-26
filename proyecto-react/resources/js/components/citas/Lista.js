import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { ObtenerListaCitasAccion } from "../../redux/Citas/CitasDusk";
import style from "./style.css";

const Lista = () => {
    const uDispatch = useDispatch()
    const uSelector = useSelector(store => store.citas.array)
   
    return (

        <div className="lista">
            
            <button className="mostrar" onClick={() => uDispatch(ObtenerListaCitasAccion())}>
                obtener Citas
            </button>
            <ul>
                {
                    uSelector.map((item, i) => (
                        
                        <li>
                            {
                                item.nombre

                            }
                        </li>
                    ))
                }
            </ul>

        </div>

    )
}

export default Lista;
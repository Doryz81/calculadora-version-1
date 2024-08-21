import React from "react";
import "./Operaciones.css";

export default function Operaciones(props){
    return(
        <div className="operaciones">
             <button>{props.operaciones}</button>
        </div>

    );
}


import React from "react";
function Conexion(props) {
    return (
        <div className="container bg-white p-4 w-auto rounded-2xl relative w-1/8">
            <h4 className="text-3xl block  px-4 py-1 rounded-full bg-gray-900 text-white text-semibold absolute -top-3 -right-3">{props.index}</h4>
            <p className="font-bold">Fecha: <span className="font-normal">{props.date}</span></p>
            <p className="font-bold">Anterior Vuelo: <span className="font-normal">{props.lastFlight}</span></p>
            <p className="font-bold">Nuevo Vuelo: <span className="font-normal">{props.flightnumber}</span></p>
        </div>
    );
}

export default Conexion;
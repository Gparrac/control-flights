import React from "react";
function Conexion(props) {
    return (
        <div className="container bg-white p-4 mt-4 w-auto rounded-2xl relative w-1/8 shadow-xl">
            <h4 className="text-3xl block  px-4 py-1 rounded-full bg-pink-700 text-white text-semibold absolute -top-6 -right-4">{props.index}</h4>
            
            <p className="font-bold">Aeropuerto: <span className="font-normal">{props.airport}</span></p>
            <p className="font-bold">Aerolinea: <span className="font-normal">{props.airline}</span></p>
            <p className="font-bold">Tag ciudad: <span className="font-normal">{props.city}</span></p>
            <p className="font-bold">N. Vuelo: <span className="font-normal">{props.flightNumber}</span></p>
        </div>
    );
}

export default Conexion;
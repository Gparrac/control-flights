import React from "react";
function Segment(props) {
    return (
        <div className="container bg-white p-4 w-auto rounded-2xl relative">
            <h4 className="text-3xl block  px-4 py-1 rounded-full bg-gray-900 text-white text-semibold absolute -top-3 -right-3">{props.index}</h4>
            <p className="font-bold">N. vuelo: <span className="font-normal">{props.flyNumber}</span></p>
            <p className="font-bold">Pais: <span className="font-normal">{props.country}</span></p>
            <p className="font-bold">Ciudad: <span className="font-normal">{props.city}</span></p>
            <p className="font-bold">Aerolinea: <span className="font-normal">{props.airline}</span></p>
            <p className="font-bold">Aeropuerto: <span className="font-normal">{props.airport}</span></p>
        </div>
    );
}

export default Segment;
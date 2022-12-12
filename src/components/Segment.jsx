import React from "react";
function Segment(props) {
    return (
        <div className="container bg-white p-4 w-48 min-w-max rounded-2xl relative shadow-xl">
            <h4 className="text-3xl block  px-4 py-1 rounded-full bg-indigo-700 text-white text-semibold absolute -top-3 -right-3">{props.index}</h4>
            <p className="font-bold">N. vuelo: <span className="font-normal">{props.flightNumber}</span></p>
            {/* <p className="font-bold">Pais: <span className="font-normal">{props.country}</span></p>
            <p className="font-bold">Ciudad: <span className="font-normal">{props.city}</span></p> */}
            <p className="font-bold">Aerolinea: <span className="font-normal">{props.airline}</span></p>
            <p className="font-bold">Aeropuerto origen: <span className="font-normal">{props.airport}</span></p>
            <p className="font-bold">Aeropuerto destino: <span className="font-normal">{props.destinyAirport}</span></p>
        </div>
    );
}

export default Segment;
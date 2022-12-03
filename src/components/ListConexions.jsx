import React from "react";
import Conexion from "./Conexion";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
function ListConexions({conexions}) {
    return (<>
        <ul className="flex items-center gap-5 mx-5">
            {conexions.length >0 ? conexions.map((con,index)=>(                
            <Conexion date={con.date} lastFlyNumber={con.lastFlight} flightNumber={con.flightNumber} index={index}></Conexion>
            )) : (<p className="text-2xl">Aun no se presentan conexiones...</p>)}
                     {/* <FontAwesomeIcon icon={faPlusCircle}/> */}                
        </ul>
    </>);
}

export default ListConexions;
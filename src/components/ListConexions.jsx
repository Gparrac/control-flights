import React from "react";
import Conexion from "./Conexion";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
function ListConexions({conexions,row="flex-row"}) {
    return (<>
        <ul className={"flex items-start w-2/3 gap-5 mx-5 pb-10 "+row}>
            {conexions.length >0 ? conexions.map((con,index)=>(                
            <Conexion city={con.airport.idplace} airport={con.airport.airportname} airline={con.airline.name} flightNumber={con.flightNumber}  index={index}></Conexion>
            )) : (<p className="text-xl mt-7 ml-7">Aun no se presentan conexiones...</p>)}
                     {/* <FontAwesomeIcon icon={faPlusCircle}/> */}                
        </ul>
    </>);
}

export default ListConexions;
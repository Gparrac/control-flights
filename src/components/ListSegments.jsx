import React from "react";
import Segment from "./Segment";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
function ListSegments({segments,row='flex-row'}) {

    return (
        <ul className={"flex items-start gap-10 mx-5  "+row}>
        {segments.length >0 ? segments.map((seg,index)=>(
            <Segment flightNumber={seg.flightNumber} country={'-'} city={'-'} airline={seg.airline.name} airport={seg.airport.name} destinyAirport={seg.destinyAirport.name} index={index}  key={index+'segment'}></Segment>
        )) : (<p className="text-xl mt-7 ml-7">Aun no se presentan registros...</p>)}

        </ul>
    );
}

export default ListSegments;
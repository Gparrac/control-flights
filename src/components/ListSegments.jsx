import React from "react";
import Segment from "./Segment";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
function ListSegments({segments}) {
        console.log('hijo',segments)
        console.log('hijo',segments.length)
    return (
        <ul className="flex items-center gap-5 mx-5">
        {segments.length >0 ? segments.map((seg,index)=>(
            <Segment FlyNumber={seg.FlyNumber} country={seg.country.name} city={seg.city.name} airline={seg.airline.name} airport={seg.airport.name} index={index}></Segment>
        )) : (<p className="text-2xl">Aun no se presentan registros...</p>)}

        </ul>
    );
}

export default ListSegments;
import React, { createContext,  useState } from "react";
// const FlyContext = createContext({
//     size: null,
//     auxSize: null,
//     Segments:[],
//     Conexions:[]
// })
const FlyContext = createContext();


function FlyProvider(){
    const [size, setSize] = useState(0)
    const [auxSize, setAuxSize] = useState(0)
    const [segments, setSegments] = useState([])
    const [conexions, setConexions] = useState([])
    const addSegment = (data) =>{
        if (segments.length > 0){
            if (segments[segments.length-1]?.flyNumber !== data.flyNumber ) {
                setConexions([...conexions,{
                    ...data,
                    lastFlight:segments[segments.length-1]
                }]);
            }
        }
        setAuxSize(auxSize+1);
        setSegments([...segments,data])
    }
    const valueFly =()=>{
        return ({
            size,
            setSize,
            segments,
            addSegment,
            conexions
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }
    return(
        <FlyContext.Provider value={valueFly} >

        </FlyContext.Provider>
    )
}

export  {FlyProvider, FlyContext};
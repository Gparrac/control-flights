import React, {useState} from "react";
import AirportForm from "../components/AirportForm";
import ListSegments from "../components/ListSegments";
import ListConexions from "../components/ListConexions";

function Dashboard() {
    const [countSegment, setCountSegment] = useState(1)
    const [auxCount, setAuxCount] = useState(0)
    const [segments, setSegments] = useState([])
    const [conexions, setConexions] = useState([])    
    const handleAddSegment = (data) =>{
        console.log('entrando')
        if (segments.length > 0){
            if (segments[segments.length-1]?.flyNumber !== data.flyNumber ) {
                setConexions([...conexions,{
                    ...data,
                    lastFlight:segments[segments.length-1].flyNumber
                }]);
            }
        }
        setAuxCount(auxCount+1);
        setSegments([...segments,data])
        console.log(segments)
        console.log(segments.length)
    }
    const handleCount = (event) =>{
        if(event.target.value>0){
            setCountSegment(event.target.value)
        }
    }

    return (
        <div className="w-screen flex flex-col lg:grid lg:grid-cols-3">
            <section className="row-span-2 bg-white mx-10">
            <div className="flex items-center justify-between">
                <h3 className="text-3xl text-gray-900 font-semibold m-5">Segmentos
                <input type="number" placeholder="#" className="w-12 bg-transparent text-center focus:outline-none border-b-2  border-b-pink-500 " value={countSegment} onChange={handleCount} min="1"></input>
                </h3>
                <h4 className="text-3xl text-pink-700 font-bold">{auxCount} <span className="text-xl font-normal">de</span> {countSegment}</h4>
            </div>                
                <AirportForm  callAddSegments={(data)=>handleAddSegment(data)} enableSend={auxCount < countSegment ? false : true} ></AirportForm>

            </section>
            <section className=" col-span-2 bg-indigo-500 pb-4">

            <h3 className="text-3xl text-gray-900 font-semibold m-5">
            Registros            
            </h3>                
                <ListSegments segments = {segments}></ListSegments>
            </section>
            <section className="col-span-2 bg-pink-700">
                <h3 className="text-3xl text-gray-900 font-semibold m-5 ">Conexiones</h3>
                <ListConexions conexions = {conexions}></ListConexions>
            </section>
        </div>
    );
}

export default Dashboard;
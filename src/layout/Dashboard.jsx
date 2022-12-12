import React, {useState} from "react";
import AirportForm from "../components/AirportForm";
import ListSegments from "../components/ListSegments";
import ListConexions from "../components/ListConexions";
import ConexionForm from "../components/ConexionForm";
import Swal from "sweetalert2";
function Dashboard() {
    const [countSegment, setCountSegment] = useState(1)
    const [auxCount, setAuxCount] = useState(0)
    const [segments, setSegments] = useState([])
    const [conexions, setConexions] = useState([]) 
    const [airlines, setAirlines] = useState([])
    const handleAddSegment = (data) =>{
        
        if (segments.length > 0){
            if (segments[segments.length-1]?.airline.id !== data.airline.id ) {
                setAirlines([...airlines,data.airline])
                // setConexions([...conexions,{
                //     ...data,
                //     lastFlight:segments[segments.length-1].flightNumber
                // }]);
            }
        }else{
            setAirlines([...airlines,data.airline])
        }
        setAuxCount(auxCount+1);
        setSegments([...segments,data])

    }
    const addConexion = (data) => {
        console.log(data)
        setConexions([...conexions,data])
    }
    const handleCount = (event) =>{
        if(event.target.value>0){
            setCountSegment(event.target.value)
        }
    }
    const enableSend = ()=>{
        if( auxCount< countSegment){
            return false;
        }else{
            return true;
        }
    }
      //formulario final
  const handleRequest = async () =>{
    // const d1 = new Date( '2001-12-12T12:12')
    // console.log('test', `${d1.getDay()}-${d1.getMonth()}-${d1.getFullYear()} ${d1.getHours()}:${d1.getMinutes()}`)
    if (enableSend()){
        try{
        const formData = {
            flight_number: segments[0].flightNumber,
            airline_name: segments[0].airline.name,
            airport_name: segments[0].airport.name,
            pilot_name: segments[0].pilot.name,            
            segments_info: {},
            connections_info: {},
        }
        segments.forEach((item,index)=>{
            formData.segments_info[`segment_${index+1}`] = {
                airport_name_origin:item.airport.name,
                airport_name_destiny:item.destinyAirport.name,                
                pilot_name: item.pilot.name,
                airport_origin_date: item.date,
                airport_destiny_date: item.lastDate
            }
        });
        conexions.forEach((item,index)=>{
            formData.connections_info[`connection_${index+1}`]={
                airline_name: item.airline.name,
                flight_number: item.flightNumber,
                airport_name: item.airport.airportname
            }
        })
        console.log(JSON.stringify(formData));
    const fetchApi = await fetch('http://127.0.0.1:5000/api/airlines/flights',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)     
    })
    const rta = await fetchApi.json();
    console.log(rta)
}catch(error){
    console.log(error)
}
    
      Swal.fire(
        'Registro exitoso!',
        `Todos los datos fueron cargados al sistema.`,
        'success'
      )
    }else{
        Swal.fire(
            'Error',
            `Ups..no has llenado todos los segmentos.`,
            'error'
          ) 
    }
  }

    return (
        <div className="w-full flex flex-col lg:grid lg:grid-cols-3">
            <section className="row-span-2 bg-white mx-10">
            <div className="flex items-center justify-between">
                <h3 className="text-3xl text-gray-900 font-semibold m-4">Segmentos
                <input type="number" placeholder="#" className="w-12 bg-transparent text-center focus:outline-none border-b-2  border-b-pink-500 " value={countSegment} onChange={handleCount} min="1"></input>
                </h3>
                <h4 className="text-3xl text-pink-700 font-bold">{auxCount} <span className="text-xl font-normal">de</span> {countSegment}</h4>
            </div>                
                <AirportForm  callAddSegments={(data)=>handleAddSegment(data)} enableSend={enableSend} countAux={auxCount} handleRequest={handleRequest}></AirportForm>

            </section>

            <section className=" col-span-2  pb-4">

            <h3 className="text-3xl text-gray-900 font-semibold m-5">
            Registros            
            </h3>                
                <ListSegments segments = {segments} row="flex-wrap overflow-y-snap"></ListSegments>
            </section>
            {/* <section className="w-full h-30"> */}
                
            {/* </section> */}
            <section className="col-span-2 ">
            <hr className="col-span-2 mr-3 border-gray-900 bg-gray-900 rounded border-2"></hr>
                <h3 className="text-3xl text-gray-900 font-semibold m-5 ">Conexiones</h3>
                <div className="flex justify-between">
                <ConexionForm airlines={airlines} addConexion={(data)=>addConexion(data)}></ConexionForm>
                <ListConexions conexions = {conexions} row="flex-wrap overflow-y-snap"></ListConexions>
                </div>
            </section>
        </div>
    );
}

export default Dashboard;
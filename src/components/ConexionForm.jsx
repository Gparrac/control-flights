
import { useForm } from "react-hook-form";
import { faPlugCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";

function ConexionForm({airlines, addConexion}) {
    const { register, formState:{errors}, handleSubmit } = useForm();
    const [flights, setFlights] = useState([])
    const [airports, setAirports] = useState([])
    const onSubmit = async(data,e) => {
      console.log('conexion',data)
        const dataAirport = await fetch(`http://127.0.0.1:5000/api/airports/${airports[data.airport].idFlight}`)
        const airport = await dataAirport.json();
        addConexion({
            airline: airlines[data.airline],
            airport: airport[0],
            flightNumber: data.flightNumber
        })
    }
    const randomFlights = () => {
        let temp = []
        for (let i = 0; i < 10; i++) {
            temp.push({idFlight:'YYZ'})            
        }
        return temp;
    }
    const handleFlights = async (event) =>{
        const dataFlights = await fetch(`http://127.0.0.1:5000/api/airlines/flights/${airlines[event.target.value].name}`);
        const rta = await dataFlights.json()
        console.log('vuelos',rta)
        setFlights(rta);
    }
    const handleAirports = async () =>{
        const dataFlights = randomFlights();
        setAirports(dataFlights);
    }
    
    return (
    <form className="container w-1/3  flex flex-col  px-3 my-7 rounded-xl shadow-xl max-w-xs" onSubmit={handleSubmit(onSubmit)}>
      <label className=" pt-2">Aerolinea</label>
      <select 
        className="mt-1 px-2 border-2 border-slate-300 text-slate-500 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 "        
        {...register("airline",{
          required:{
            value:true,
            message:"Aerolinea es requerida"            
          },
          validate: (value) => value !== 'No hay aerolineas disponibles...' ? true : 'Debe seleccionar un vuelo.'
          
        })}
        onChange={handleFlights}
      >
      {airlines.length > 0 ? airlines.map((item,index)=>{
          return (<option value={index} key={item.name+'-airline'}>{item.name}</option>)
        }): (<option>No hay aerolineas disponibles...</option>)}

        
      </select>      
      {errors.airline && <p className="text-pink-700 text-base mt-1">{errors.airline?.message}</p>}
      <label className=" pt-2">No. vuelo</label>
      <select 
        className="mt-1 px-2 border-2 border-slate-300 text-slate-500 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 "        
        {...register("flightNumber",{
          required:{
            value:true,
            message:"Aerolinea es requerida"            
          },
          validate: (value) => value !== 'No hay vuelos disponibles..' ? true : 'Debe seleccionar un vuelo.'
        })}
        onChange={handleAirports}
      >
      
      {flights.length > 0 ? flights.map((item,index)=>{
          return (<option value={index} key={item.idflight+'-airline'}>{item.idflight}</option>)
        }): (<option className="text-pink-700 text-base mt-1">No hay vuelos disponibles..</option>)}

        
      </select>      
      {errors.flightNumber && <p className="text-pink-700 text-base mt-1">{errors.flightNumber?.message}</p>}
      <label className=" pt-2">Aeropuerto</label>
      <select 
        className="mt-1 px-2 border-2 border-slate-300 text-slate-500 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 "        
        {...register("airport",{
          required:{
            value:true,
            message:"Aeropuerto es requerida"
            
       
          },
          validate: (value) => value !== 'No hay aeropuertos disponibles...' ? true : 'Debe seleccionar un vuelo.'
        })}
        onChange={handleAirports}
      >
      {airports.length > 0 ? airports.map((item,index)=>{
          return (<option value={index} key={item.idflight+'-airline'}>{item.idflight}</option>)
        }): (<option>No hay aeropuertos disponibles...</option>)}

        
      </select>      
      {errors.airport && <p className="text-pink-700 text-base mt-1">{errors.airport?.message}</p>}
      <button className="text-2xl text-center text-white  bg-pink-700 px-7  mx-1 my-4 w-content rounded-xl"  >
    <FontAwesomeIcon icon={faPlugCirclePlus}/>
  </button>
    </form>);
}

export default ConexionForm;
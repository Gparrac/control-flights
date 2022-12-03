import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faCheckToSlot } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
function AirportForm(props) {
  const {enableSend, callAddSegments} = props;
  const { register, formState:{errors}, handleSubmit } = useForm();
   const onSubmit = (data,e)=>{
    const testData = {
      date:data.date,
      airline:{
        name:data.airline,
        id: 2
      },
      airport:{
        name:data.airport,
        id:3
      },
      country:{
        name:data.country,
        id:6
      },
      city:{
        name:data.city,
        id:6
      },
      flyNumber: data.flyNumber,
      pilot:{
        id:2,
        name:data.pilot
      }
    }
    console.log('data',testData)
    console.log('enableSend',enableSend)
    !enableSend&&callAddSegments(testData);
    e.preventDefault();
   }
  return (
    <form className="container  flex flex-col mx-auto px-3 my-7 rounded-xl shadow-xl max-w-xs" onSubmit={handleSubmit(onSubmit)}>
    <label className=" py-1">Fecha</label>
      <input
        type="date"
        className="mt-3 px-2 border-2 border-slate-300 text-slate-500 rounded-xl  focus:outline-none focus:ring-1 focus:ring-indigo-500"
        {...register("date",{
          required:{
            value:true,
            message:"La fecha es requerida"            
          }
        })}
      ></input>
      {errors.date && <p className="text-pink-700 text-base mt-1">{errors.date?.message}</p>}

      <label className=" py-1">Pais</label>
      <input
        type="text"
        className="mt-3 px-2 border-2 border-slate-300 text-slate-500 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 "
        {...register("country",{
          required:{
            value:true,
            message:"El pais es requerido"            
          }
        })}
      ></input>
            {errors.country && <p className="text-pink-700 text-base mt-1">{errors.country?.message}</p>}
      <label className=" py-1">Ciudad</label>
      <input
        type="text"
        placeholder="Ciudad"
        className="mt-3 px-2 border-2 border-slate-300 text-slate-500 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 "
        {...register("city",{
          required:{
            value:true,
            message:"La ciudad es requerida"            
          }
        })}
      ></input>
      {errors.city && <p className="text-pink-700 text-base mt-1">{errors.city?.message}</p>}
      <label className=" py-1">Aerolinea</label>
      <select 
        className="mt-3 px-2 border-2 border-slate-300 text-slate-500 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 "
        {...register("airline",{
          required:{
            value:true,
            message:"Aerolinea es requerida"            
          }
        })}
      >
        <option>Aerolinea</option>
      </select>
      {errors.airline && <p className="text-pink-700 text-base mt-1">{errors.airline?.message}</p>}
      <label className=" py-1">Número del vuelo</label>
      <input
        type="number"
        placeholder="Número de vuelo"
        className="mt-3 px-2 border-2 border-slate-300 text-slate-500 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 "
        {...register("flyNumber",{
          required:{
            value:true,
            message:"Número de vuelo requerido"            
          }
        })}        
      ></input>
      {errors.flyNumber && <p className="text-pink-700 text-base mt-1">{errors.flyNumber?.message}</p>}
      <label className=" py-1">Aeropuerto</label>
      <select        
        className="mt-3 px-2 border-2 border-slate-300 text-slate-500 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 "
        {...register("airport",{
          required:{
            value:true,
            message:"Aeropuerto requerido"            
          }
        })}
      >
        <option>Aeropuerto</option>
        </select>
        {errors.airport && <p className="text-pink-700 text-base mt-1">{errors.airport?.message}</p>}
        <label className=" py-1">Pilot</label>
      <input
        type="text"
        className="mt-3 px-2 border-2 border-slate-300 text-slate-500 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 "
        {...register("pilot",{
          required:{
            value:true,
            message:"El Piloto es requerida"            
          }
        })}
      ></input>
        {errors.pilot && <p className="text-pink-700 text-base mt-1">{errors.pilot?.message}</p>}

      <div className="flex justify-evenly">
      <button type="submit" className="text-2xl text-center text-white  bg-pink-700 px-7  mx-1 my-4 w-content rounded-xl ">
        <FontAwesomeIcon icon={faPlusCircle}/>
      </button>
      <button className="text-2xl text-center text-white  bg-indigo-500 px-7  mx-1 my-4 w-content rounded-xl disabled:opacity-75" disabled={!enableSend} >
        <FontAwesomeIcon icon={faCheckToSlot}/>
      </button>
      </div>

    </form>
  );
}

export default AirportForm;

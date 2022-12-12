import React from "react";
function SelectAirport({title,errors,register,handleChange,options, defaultVal}) {
    // console.log('in select',options)
    return ( <>
    <label className=" pt-2">aeropuerto de {title}</label>
      <select        
        className="mt-1 px-2 border-2 border-slate-300 text-slate-500 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 "
        value={defaultVal && defaultVal}
        {...register(`airport${title}`,{
          required:{
            value:true,
            message:"Aeropuerto de origen requerido"            
          }
        })}
        onChange={handleChange}
      >
      {options.length > 0 && 
      options.map((item)=>{
        return (<option value={item.airportname} key={item.idairport+'-airport'}>{item.airportname}</option>)
      })}


        </select>
        {errors.airport && <p className="text-pink-700 text-base mt-1">{errors.airport?.message}</p>}
    </> );
}

export default SelectAirport;
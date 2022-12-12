import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faCheckToSlot } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAirport from "../hooks/useAirport";
import useAirline from "../hooks/useAirline";
import SelectAirport from "./SelectAirport";

function AirportForm(props) {
  const { enableSend, callAddSegments, handleRequest } = props;
  const { sourceAirport, destinyAirport, deleteAirport, deleteDuple } =
    useAirport();
  const { load, airlines } = useAirline();
  
    //formulario segmento
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue
  } = useForm({defaultValues:{
    flightNumber:''
  }});

  //selectAnidados

  const [optionSource, setOptionSource] = useState("");
  const [optionDestiny, setOptionDestiny] = useState("");
  const [pilots, setPilots] = useState([])
  const [random, setRandom] = useState(true)
  const handlerAuxAirport = (event) => {
    setOptionSource(event.target.value);
    deleteAirport(event.target.value);
  };
  const handlePilot = async (event)=>{
    console.log('evento',event.target.value)
    const dataPilots = await fetch(`http://127.0.0.1:5000/api/airlines/pilots/${airlines[event.target.value].airlinename}`)
    const pilotsArr = await dataPilots.json();
    const dataFlightNumber = await fetch(`http://127.0.0.1:5000/api/airlines/flightnumber/${airlines[event.target.value].airlinename}`)
    const flightNumberArr = await dataFlightNumber.json();
    
    setPilots(pilotsArr);
    if (random){
      const start = Date.now().toString().slice(-3);
      setRandom(false)
      setValue('flightNumber', start,{
        shouldValidate: true,
        shouldDirty: true
      });
    }

    console.log('consecutivo',flightNumberArr.flight_number)

  }
  
  //datatime logica
  const [origen, setOrigen] = useState();
  const validateLastDate = (value) => {
    let date1 = new Date(origen);
    let date2 = new Date(value);
    return date2 >= date1 ? true : "Verifique la fecha de llegada.";
  };


  const onSubmit = (data, e) => {
    console.log("all data", data);
    // let auxDate1 = new Date(data.dateOrigen)
    // let auxDate2 = new Date(data.dateDestino)
    // console.log("all",`${auxDate1.getDate()}-${(auxDate1.getMonth()+1).toString()}-${auxDate1.getFullYear()} ${auxDate1.getHours()}:${auxDate1.getMinutes()}`)
    // return false
    //añadiendo al array global
    let source = sourceAirport.find(
      ({ airportname }) => airportname === data.airportorigen
    );
    let destiny = destinyAirport.find(
      ({ airportname }) => airportname === data.airportdestino
    );
    if (!enableSend()) {
      let auxDate1 = new Date(data.dateOrigen)
      let auxDate2 = new Date(data.dateDestino)
      const testData = {
        date: `${auxDate1.getDate()}-${(auxDate1.getMonth()+1)}-${auxDate1.getFullYear()} ${auxDate1.getHours()}:${auxDate1.getMinutes()}`,
        lastDate: `${auxDate2.getDate()}-${(auxDate2.getMonth())+1}-${auxDate2.getFullYear()} ${auxDate2.getHours()}:${auxDate2.getMinutes()}`,
        airline: {
          name: airlines[data.airline].airlinename,
          id: airlines[data.airline].idairline,
        },
        airport: {
          name: source.airportname,
          id: source.idairport,
        },
        destinyAirport: {
          name: destiny.airportname,
          id: destiny.idairport,
        },
        flightNumber: data.flightNumber,
        pilot: {
          id: pilots[data.pilot].idperson,
          name: pilots[data.pilot].name
        },
      };
      //cambiando data
      setOrigen(data.dateDestino);
      callAddSegments(testData);
      Swal.fire(
        "Solicitud exitosa!",
        `Los datos para el vuelo N. ${testData.flightNumber} han sido agregado.`,
        "success"
      );
      //preparando nuevos datos
      deleteDuple(optionDestiny);
      setOptionSource(optionDestiny);
      setOptionDestiny("");
    } else {
      // callAddSegments(testData);
      Swal.fire(
        "Ups... verifica los campos",
        `Alcanzaste el limite de segmentos.`,
        "error"
      );
    }
    // !enableSend&&callAddSegments(testData);
    e.preventDefault();
  };

  return (
    <div className="container  flex flex-col mx-auto px-3 my-7 rounded-xl shadow-xl max-w-xs">
      <form
        className="flex w-full  flex-col mx-auto px-3 mt-7"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className=" pt-2">Fecha de origen</label>
        <input
          type="datetime-local"
          className="mt-1 px-2 border-2 border-slate-300 text-slate-500 rounded-xl  focus:outline-none focus:ring-1 focus:ring-indigo-500"
          {...register("dateOrigen", {
            required: {
              value: true,
              message: "La fecha es requerida",
            },
          })}
          value={origen}
          onChange={(event) => setOrigen(event.target.value)}
        ></input>
        {errors.dateOrigen && (
          <p className="text-pink-700 text-base mt-1">
            {errors.dateOrigen?.message}
          </p>
        )}
        <label className=" pt-2">Fecha de llegada</label>
        <input
          type="datetime-local"
          className="mt-1 px-2 border-2 border-slate-300 text-slate-500 rounded-xl  focus:outline-none focus:ring-1 focus:ring-indigo-500"
          {...register("dateDestino", {
            required: {
              value: true,
              message: "La fecha es requerida",
            },
            validate: validateLastDate,
          })}
        ></input>
        {errors.dateDestino && (
          <p className="text-pink-700 text-base mt-1">
            {errors.dateDestino?.message}
          </p>
        )}
        <label className=" pt-2">Aerolinea</label>
        <select
          className="mt-1 px-2 border-2 border-slate-300 text-slate-500 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 "
          {...register("airline", {
            required: {
              value: true,
              message: "Aerolinea es requerida",
            },
          })}
          onChange={handlePilot}
          
        >
          {airlines.map((item, index) => {
            return (
              <option value={index} key={item.idairline + "-airline"}>
                {item.airlinename}
              </option>
            );
          })}
        </select>
        {errors.airline && (
          <p className="text-pink-700 text-base mt-1">
            {errors.airline?.message}
          </p>
        )}
        <label className=" pt-2">Número del vuelo</label>
        <input
          type="number"
          placeholder="Número de vuelo"
          className="mt-1 px-2 border-2 border-slate-300 text-slate-500 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 "
          {...register("flightNumber", {
            required: {
              value: true,
              message: "Número de vuelo requerido",
            },
          })}
          
          disabled="true"
        ></input>
        {errors.flightNumber && (
          <p className="text-pink-700 text-base mt-1">
            {errors.flightNumber?.message}
          </p>
        )}
        

        <SelectAirport
          title="origen"
          errors={errors}
          register={register}
          handleChange={(event) => handlerAuxAirport(event)}
          options={sourceAirport}
          defaultVal={optionSource}
        ></SelectAirport>
        {optionSource && (
          <SelectAirport
            title="destino"
            errors={errors}
            register={register}
            handleChange={(event) => setOptionDestiny(event.target.value)}
            options={destinyAirport}
          ></SelectAirport>
        )}
        <label className=" pt-2">Piloto</label>
        <select
          className="mt-1 px-2 border-2 border-slate-300 text-slate-500 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 "
          {...register("pilot", {
            required: {
              value: true,
              message: "El piloto es requerido",
            },
            validate: (value) => value !== 'No hay pilotos registrados' ? true : 'Debe seleccionar un piloto.'
          })}
        >
          {pilots.length > 0 ? pilots.map((item, index) => {
            return (
              <option value={index} key={item.idperson + "-airline"}>
                {item.name}
              </option>
            );
          }): <option>No hay pilotos registrados</option>}
        </select>
        {errors.pilot && (
          <p className="text-pink-700 text-base mt-1">
            {errors.pilot?.message}
          </p>
        )}

        <button
          type="submit"
          className="text-2xl text-center text-white  bg-pink-700 px-7  mx-1 my-4 w-content rounded-xl "
        >
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
      </form>
      <button
        className="text-2xl text-center text-white  bg-indigo-500 px-7  mx-3 mb-4 w-content rounded-xl disabled:opacity-75"
        onClick={handleRequest}
        disabled={!enableSend}
      >
        <FontAwesomeIcon icon={faCheckToSlot} />
      </button>
    </div>
  );
}

export default AirportForm;

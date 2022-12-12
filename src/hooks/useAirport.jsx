import  {useEffect, useState} from "react";

function useAirport() {
    
    const [sourceAirport, setSourceAirport] = useState([]);
    const [destinyAirport, setDestinyAirport] = useState([]);

    const deleteAirport = (name) => {        
        let item = sourceAirport.findIndex(({airportname})=>airportname === name)
        if(item !== -1){
            
            setDestinyAirport(sourceAirport.filter(({airportname})=>airportname !== name));         
            return true;
        }else{        
            
            return false;
        }
    }
    const deleteDuple = (lastAirport) =>{

        setSourceAirport([destinyAirport.find(({airportname}) => airportname === lastAirport)])
        setDestinyAirport(destinyAirport.filter(({airportname}) => airportname !== lastAirport));

        
        
    }
    useEffect(() => {
        const fetchAirport = async () => {            
            const data  = await fetch('http://127.0.0.1:5000/api/airports')
            const airports = await data.json()            
            console.log('entrando!')
            
            setSourceAirport(airports)
            setDestinyAirport(airports)
            
        }
        fetchAirport()
        },[])
    return {
        sourceAirport,
        destinyAirport,
        deleteAirport,
        deleteDuple
    }
}

export default useAirport;
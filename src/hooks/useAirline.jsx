import { useEffect,useState } from "react";


function useAirline() {
    const [load, setLoad] = useState(false)
    const [airlines, setAirlines] = useState([])
    useEffect(()=>{
        setLoad(false)
        const fetchAirlines = async ()=>{
            const data = await fetch('http://127.0.0.1:5000/api/airlines')
            const airlines = await data.json();
            setAirlines(airlines)
        } 
        fetchAirlines()
        setLoad(true)
    },[])    
    return {
        load,
        airlines
    };
}

export default useAirline;
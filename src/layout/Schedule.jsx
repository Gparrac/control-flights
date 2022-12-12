
import ItemSchedule from "../components/ItemSchedule";
import  fakeList  from "../store/dataTest";


function Schedule() {
    
    const listTest = fakeList(5) 
    
    return (<>
        <h1 className="text-3xl mx-auto my-5 font-bold text-center">Intinerarios</h1>
        <ul className="container mx-auto shadow-xl rounded-xl   p-4 mb-7">
        <li className="hidden md:grid  md:grid-cols-12">
            <h3 className=" text-2xl col-span-1">ID</h3>                    
            <h3 className=" text-2xl col-span-5 text-center">Conexiones</h3>                    
            <h3 className=" text-2xl col-span-5 text-center md:ml-10">Trayectos</h3>            
         </li>
        {listTest.map((item,index)=>(
            <ItemSchedule segments= {item.segments} conexions={item.conexions} key={index+'itemSchedule'}></ItemSchedule>
        ))}
        </ul>
    </>);
}

export default Schedule;
import ListConexions from "./ListConexions";
import ListSegments from "./ListSegments";
function ItemSchedule({segments,conexions}) {
    return (<>
                 <hr className="my-5 border-pink-600"></hr>
         <li className="grid grid-cols-5 md:grid-cols-12 items-center">
            <h3 className="md:hidden font-bold">ID</h3>
            <div className="col-span-4 md:col-span-1 md:text-3xl   text-center py-7">1</div>
            <h3 className="md:hidden font-bold">Conexion</h3>
            <div className="md:col-span-6 col-span-4">
                <ListSegments segments={segments} row="flex-row max-h-96 overflow-y-scroll py-10 px-2 flex-wrap "></ListSegments>
            </div>
            <h3 className="md:hidden font-bold">Trayectos</h3>
            <div className="md:col-span-5 self-start col-span-4">
                <ListConexions conexions={conexions} row="flex-row md:flex-col max-h-96 overflow-y-scroll pt-5 px-4 items-center flex-wrap"></ListConexions>
            </div>
         </li>
    </>);
}

export default ItemSchedule;
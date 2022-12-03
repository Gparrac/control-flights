import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    const [menu, setMenu] = useState(false);
    return ( <>
        <nav className="flex bg-gray-900 md:flex-row-reverse px-4 py-3">
            <div className=" md:hidden">
            <button className="text-white text-3xl" onClick={()=>setMenu(!menu)}>
            <FontAwesomeIcon icon={menu ? faXmark:faBars }/>
            </button>
            </div>
            <ul className=" gap-6 hidden md:flex">
                <li>
                    <span href="#" className="text-white text-2xl">Registros</span>
                </li>
                <li>
                    <span href="#" className="text-white text-2xl">Formulario</span>
                </li>
            </ul>
        </nav>
        
        <ul className={menu ? "gap-6 p-4 flex flex-col shadow-xl rounded-br-2xl w-60 absolute bg-white" : " hidden" }>
                <li>
                    <span href="#" className="text-gray-900 text-2xl font-semibold">Registros</span>
                </li>
                <hr/>
                <li>
                    <span href="#" className="text-gray-900 text-2xl font-semibold">Formulario</span>
                </li>
            </ul>
        
        </>
    );
}

export default NavBar;
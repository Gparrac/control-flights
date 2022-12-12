import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
function NavBar() {
    const [menu, setMenu] = useState(false);
    return ( <>
        <nav className="flex bg-gray-900 md:flex-row-reverse px-4 py-2">
            <div className=" md:hidden">
            <button className="text-white text-3xl" onClick={()=>setMenu(!menu)}>
            <FontAwesomeIcon icon={menu ? faXmark:faBars }/>
            </button>
            </div>
            <ul className=" gap-6 hidden md:flex">
                <li>
                    <Link to="/schedule" className="text-white text-xl">Itinerarios</Link>
                </li>
                <li>
                    <Link to="/" className="text-white text-xl">Formulario</Link>
                </li>
            </ul>
        </nav>
        
        <ul className={menu ? "gap-6 p-4 flex flex-col shadow-xl rounded-br-2xl w-60 absolute bg-white" : " hidden" }>
                <li>
                    <Link href="#" className="text-gray-900 text-2xl font-semibold">Itinerarios</Link>
                </li>
                <hr/>
                <li>
                    <Link href="#" className="text-gray-900 text-2xl font-semibold">Formulario</Link>
                </li>
            </ul>
        
        </>
    );
}

export default NavBar;
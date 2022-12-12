import React from "react";
import Dashboard from './layout/Dashboard'
import Schedule from "./layout/Schedule";
import NavBar from './layout/NavBar';
import { Routes, Route} from "react-router-dom";
function App() {
    return ( <>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<Dashboard/>}></Route>
                <Route path="/schedule" element={<Schedule/>}></Route>


            </Routes>
            
    </> );
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import Dashboard from './layout/Dashboard'
import NavBar from './layout/NavBar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>  
    <NavBar></NavBar>
    <Dashboard></Dashboard>    

  </>
);


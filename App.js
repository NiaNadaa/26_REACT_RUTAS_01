import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import { useState } from "react";
import './App.css';

function App() {
  function Cabecera(){
    let saludo = "Rutas en React"
    return(<h1>{saludo}</h1>)
  }
  function Nombres(){
    let array = ["Jose","Antonio","Alejandro","Lola"]
    return(
      <>
      <li>{array[0]}</li>
      <li>{array[1]}</li>
      <li>{array[2]}</li>
      <li>{array[3]}</li>
      </>
    )
  }
  
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Cabecera/>}/>
    <Route path="/nombres" element={<Nombres />} />
    </Routes> 
    </BrowserRouter>
  );
}

export default App;

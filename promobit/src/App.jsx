import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import Home from './paginas/Home';
import Filmespopulares from './paginas/Filmespopulares'

export default function App() {
    return (
    <div className="App">
       <Home /> 
       <Filmespopulares />
       <Navbar /> 
        <h1>
          Filmes Populares
        </h1>
        
      
    </div>
  );
}



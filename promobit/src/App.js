import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import Home from './paginas/Home';
import Filmespopulares from './paginas/Filmespopulares'

function App() {
  return (
    <div className="App">
       <Home />
       <Filmespopulares />
       <Navbar /> 
        <h2>
          Filmes Populares
        </h2>
        
      
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import baseURL from './api';
import './App.css';

class App extends Component {

    state= {
        cartas: [],
    }
     
    async componentDidMount(){
        const response = await baseURL.get('');

        this.setState({ cartas: response.data});

    }

    render(){
       
        const { cartas } = this.state;

     return (
        <div>
            
            <header>
            <h1>Personare</h1>
            <h1> Tarot</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>
        <br></br>
                    <div class="botoes-menu">
                    <button onClick>Início</button></div>
                    <div class="botoes-menu">
                    <button onClick>Jogo de Tarot</button></div>
                
                {cartas.map(cartas => (
                <li key={cartas.show.id}>
                    <h2>
                    <strong>Carta: </strong>
                        {cartas.show.name}
                        {cartas.show.image}
                        </h2>
                </li>
                
            ))}
        </div>
     );
  };
};


export default App;


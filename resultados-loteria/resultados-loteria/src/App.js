import React from 'react';
import './App.css';




function App() {

  return (
    <div>
      <div class="tela-inteira">
        <header>
        
            <h1>Loteria</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          
            <nav class="menu-vertical">
            <select id="jogos">
    <option value=""></option>
    <option value="mega">Mega-sena</option>
    <option value="qui">Quina</option>
    <option value="lf">Lotofácil</option>
    <option value="lt">Lotomania</option>
    <option value="tm">Timemania</option>
    <option value="ds">Dia de sorte</option>
</select>
            </nav>
            
            <section>
                
            </section>
        </main>

        <footer>
            
        </footer>
      </div>
    </div>
  );
}




export default App;



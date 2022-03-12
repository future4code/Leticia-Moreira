import React from "react";
import { CharacterDetailPage } from "./componentes/CharacterDetailPage/personagensDetail/CharacterDetailPage"
import { CharacterListPage } from "./componentes/CharacterListPage/personagensList/CharacterListPage"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CharacterDetailPage />
        <CharacterListPage />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
      </header>
    </div>
  );
}

export default App;

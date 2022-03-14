import React from 'react';
import { CharacterDetailPage } from './componentes/CharacterDetailPage/personagensDetail/CharacterDetailPage'
import { CharacterListPage } from './componentes/CharacterListPage/personagensList//CharacterListPage'



const App = () => {
  
  return (
    <div>
    <CharacterDetailPage />
    <CharacterListPage  CharacterListPage={CharacterListPage.title}/> 
    
    
    </div>
  );
}

export default App;

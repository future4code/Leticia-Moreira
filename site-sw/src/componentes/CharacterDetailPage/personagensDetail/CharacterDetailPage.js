import React from 'react'
import { useState } from 'react'

export function CharacterDetailPage() {
 
  const [currentCharacterDetailPage, setCharacterDetailPage] = useState ([
    
  {
    id: '1',
    Name: 'Nome: Luke Skywalker',
    planeta: 'Planeta de origem: Tatooine',
  },
  
  { 
   id:'2',
   Name:'Nome: C-3PO',
   planeta: 'Planeta de origem: Tatooine',
  },

  { 
    id:'3',
    Name:'Nome: R2-D2',
    planeta: 'Planeta de origem: Naboo',
  },

  { 
    id:'4',
    Name:'Nome: Darth Vader',
    planeta: 'Planeta de origem: Tatooine',
  },

  { 
    id:'5',
    Name:'Nome: Leia Organa',
    planeta: 'Planeta de origem: Alderaan',
  },

  { 
    id:'6',
    Name:'Nome: Owen Lars',
    planeta: 'Planeta de origem: Tatooine',
  },

  { 
    id:'7',
    Name:'Nome: Beru Whitesun lars',
    planeta: 'Planeta de origem: Tatooine',
  },

  { 
    id:'8',
    Name:'Nome: R5-D4',
    planeta: 'Planeta de origem: Tatooine',
  },

  { 
    id:'9',
    Name:'Nome: Biggs Darklighter',
    planeta: 'Planeta de origem: Tatooine',
  },

  { 
    id:'10',
    Name:'Nome: Obi-Wan Kenobi',
    planeta: 'Planeta de origem: Stewjon'
  },
            
]) 

 setCharacterDetailPage(currentCharacterDetailPage)

 

   return (

<div>

    <h1> Detalhes dos Personagens</h1>
    
    {CharacterDetailPage.map(CharacterDetailPage => <CharacterDetailPage/>)}

    <button onClick={() => ('CharacterListPage')}>Voltar para lista de personagens</button>

  </div>

  )
    
}


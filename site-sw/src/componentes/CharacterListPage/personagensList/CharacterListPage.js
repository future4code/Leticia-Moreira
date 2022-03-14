import React from 'react'
import { useState } from 'react';

export function CharacterListPage(CharacterListPage) {
 
    const [currentPage, setCurrentPage] = useState('CharacterListPage')
        setCurrentPage(currentPage)
//   const selectPage = () => {
//     if (currentPage === 'CharacterDetailPage') {
//       return ( <CharacterDetailPage /> )
//     } else if (currentPage === 'CharacterListPage') {
//       return (<CharacterListPage />)
//     }
//   }

  const [currentCharacterListPage, setCharacterListPage] = useState ([
    
    {
      id: '1',
      title: 'Luke Skywalker',
    },
    
    { 
     id:'2',
     title:'C-3PO',
    },

    { 
      id:'3',
      title:'R2-D2',
    },

    { 
      id:'4',
      title:'Darth Vader',
    },

    { 
      id:'5',
      title:'Leia Organa',
    },

    { 
      id:'6',
      title:'Owen Lars',
    },

    { 
      id:'7',
      title:'Beru Whitesun lars',
    },

    { 
      id:'8',
      title:'R5-D4',
    },

    { 
      id:'9',
      title:'Biggs Darklighter',
    },

    { 
      id:'10',
      title:'Obi-Wan Kenobi',
    },
              
  ])
    
  setCharacterListPage(currentCharacterListPage)
    
    return (

    <div>

    <h1> Lista dos Personagens </h1>

    {CharacterListPage.map(CharacterListPage => <CharacterListPage/>)}
    
          
   </div>

    )

    }



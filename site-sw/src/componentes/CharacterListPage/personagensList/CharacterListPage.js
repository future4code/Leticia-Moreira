import React from 'react'


export function CharacterListPage(CharacterListPage) {

    
    return (

    <div>

    <h1> Lista dos Personagens </h1>

    {CharacterListPage.map(CharacterListPage => <CharacterListPage/>)}
    
          
   </div>

    )

    }



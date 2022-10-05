import React from 'react'
import { useEffect, useState } from 'react';
import FilmeCard from '../components/FilmeCard';

const filmesURL = import.meta.env.API;
const apiKey = import.meta.env.API_KEY;


const Home = () => {  
      const [topFilmes, setTopFilmes] = useState ([])

      const getTopRateFilmes = async (url) => {

        const res = await fetch(url);
        const data = await res.json();
        setTopFilmes(data.results);

      };

      useEffect(() => {
        const topRatedUrl = `${filmesURL} top_rated? ${apiKey}`;
        getTopRateFilmes (topRatedUrl);

      }, [])

  return <div>
    <h2 className='title'> Filmes Populares</h2>
    {topFilmes.length > 0 &&
      topFilmes.map ((filmes)=> <FilmeCard key = {filmes.id} filme ={filmes}/>)}
  </div>
  ;
}

export default Home;

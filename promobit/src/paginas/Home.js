import React from 'react'
import { useEffect, useState } from 'react';

const filmesURL = import.meta.env.API;
const apiKey = import.meta.env.API_KEY;


const Home = () => {  
      const [topFilmes, setTopFilmes] = useState ([])

      const getTopRateFilmes = async (url) => {

        const res = await fetch(url);
        const data = await res.json();

      };

      useEffect(() => {

      }, [])

  return <div>Home</div>
  ;
}

export default Home;

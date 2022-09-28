import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


import FilmeCard from "../components/FilmeCard";


const filmesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Filme = () => {
  const {id} = useParams();
  const [filme, setFilme] = useState(null);

  const getFilme = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setFilme(data);
  };

 
  useEffect(() => {
    const filmeUrl = `${filmesURL}${id}?${apiKey}`;
    getFilme(filmeUrl);
  }, );

  return (
    <div className="filme-page">
      {filme && (
        <>
          <FilmeCard filme={filme} showLink={false} />
          <p className="tagline">{filme.tagline}</p>
            <div className="info">
            <h3>
              Duração:
            </h3>
            <p>{filme.runtime} minutos</p>
          </div>
          <div className="info description">
            <h3>
               Descrição:
            </h3>
            <p>{filme.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Filme;
import  {  Link  }  from  "react-router-dom" ;

const  imagensURL  =  import.meta.env.IMG;

function FilmeCard({ filme, showLink = true }) {
  return (
    <div className="cartão de filme">
      <img src={imagensURL + filme.poster_path} alt={filme.título} />
      <h2> {filme.título} </h2>
      <p>

      </p>
      {showLink && <Link to={`/movie/ ${filme.id} `}> Detalhes </Link>}
    </div>
  );
}

export default FilmeCard;
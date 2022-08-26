import React from "react";
import { Link } from "react-router-dom";


const navbar = () => {
return (
          <nav id="navbar">
        <h2>
          <Link to="/"> Home </Link>
        </h2>
         <Link to="/filme1"> FilmesPopulares </Link>
        <form> 
            <input type="text" placeholder="Busque um filme"
/> 
            <button type="submit"></button>                 
</form>
      </nav>
      );
      }

 export default navbar;   
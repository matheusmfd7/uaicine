import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import MovieCard from "../components/MovieCard";

import "./MoviesGrid.css";


const apiUrl = "https://api.themoviedb.org/3";
const apiKey = "3c764988241e7679dac5328fb82d819c";


const Search = () => {

  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);

  const query = searchParams.get("q");


  useEffect(() => {


    const buscarFilmes = async () => {


      if (!query) {

        setMovies([]);

        return;

      }


      const url = `${apiUrl}/search/multi?api_key=${apiKey}&language=pt-BR&query=${encodeURIComponent(query)}`;


      const response = await fetch(url);

      const data = await response.json();



      const resultados = data.results.filter(

        (item) =>

          (item.media_type === "movie" ||

          item.media_type === "tv") &&

          item.poster_path

      );



      setMovies(resultados);


    };


    buscarFilmes();


  }, [query]);



  return (

    <div className="container">


      <h2 className="title">

        Resultados para:

        <span className="query-text">

          {" "}{query}

        </span>


      </h2>



      <div className="movies-container">


        {movies.length > 0 ? (


          movies.map((movie) => (


            <MovieCard

              key={movie.id}

              movie={movie}

            />


          ))


        ) : (


          <h2 className="title">

            Nenhum resultado encontrado

          </h2>


        )}


      </div>


    </div>

  );

};


export default Search;
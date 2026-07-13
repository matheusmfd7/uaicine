import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./MovieDetails.css";

const apiUrl = "https://api.themoviedb.org/3";
const apiKey = "3c764988241e7679dac5328fb82d819c";

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const buscarDetalhes = async () => {
      const url = `${apiUrl}/movie/${id}?api_key=${apiKey}&language=pt-BR`;

      const response = await fetch(url);
      const data = await response.json();

      setMovie(data);
    };

    buscarDetalhes();
  }, [id]);


  if (!movie) {
    return (
      <h2 className="loading">
        Carregando...
      </h2>
    );
  }


  return (
    <div className="movie-details">

      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "/sem-imagem.jpg"
        }
        alt={movie.title}
      />


      <div className="movie-info">

        <h1>
          {movie.title}
        </h1>


        <h3>
          {movie.release_date
            ? movie.release_date.substring(0, 4)
            : "2026"
          }
        </h3>


        <h2>
          Sinopse
        </h2>


        <p>
          {movie.overview
            ? movie.overview
            : "Sinopse ainda não disponível."
          }
        </p>


      </div>

    </div>
  );
};


export default MovieDetails;
import { Link } from "react-router-dom";
import "./MovieCard.css";

const imageUrl = "https://image.tmdb.org/t/p/w500";


const MovieCard = ({ movie }) => {

  const title = movie.title || movie.name;


  return (

    <div className="movie-card">


      <img
        src={
          movie.poster_path
            ? imageUrl + movie.poster_path
            : "/sem-imagem.jpg"
        }
        alt={title}
      />


      <h3>
        {title}
      </h3>


      <Link
        to={
          movie.media_type === "tv"
            ? `/tv/${movie.id}`
            : `/movie/${movie.id}`
        }
      >

        <button className="details-button">

          Detalhes

        </button>


      </Link>


    </div>

  );

};


export default MovieCard;
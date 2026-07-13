import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Movie.css";


const apiUrl = "https://api.themoviedb.org/3";
const apiKey = "3c764988241e7679dac5328fb82d819c";


const SeriesDetails = () => {

  const { id } = useParams();

  const [serie, setSerie] = useState(null);



  useEffect(() => {

    const buscarSerie = async () => {

      const url = `${apiUrl}/tv/${id}?api_key=${apiKey}&language=pt-BR`;


      const response = await fetch(url);

      const data = await response.json();


      setSerie(data);

    };


    buscarSerie();


  }, [id]);



  if (!serie) {

    return <h2>Carregando...</h2>;

  }



  return (

    <div className="movie-details">


      <img

        src={
          serie.poster_path
            ? `https://image.tmdb.org/t/p/w500${serie.poster_path}`
            : "/sem-imagem.jpg"
        }

        alt={serie.name}

      />



      <div className="movie-info">


        <h1>
          {serie.name}
        </h1>


        <h3>
          {serie.first_air_date?.substring(0,4)}
        </h3>



        <h2>
          Sinopse
        </h2>


        <p>

          {serie.overview
            ? serie.overview
            : "Sinopse não disponível."
          }

        </p>



        <h2>
          Informações
        </h2>


        <p>
          Temporadas: {serie.number_of_seasons}
        </p>


        <p>
          Episódios: {serie.number_of_episodes}
        </p>


      </div>


    </div>

  );

};


export default SeriesDetails;
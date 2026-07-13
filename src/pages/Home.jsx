import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import "./MoviesGrid.css";

const apiUrl = "https://api.themoviedb.org/3";
const apiKey = "3c764988241e7679dac5328fb82d819c";

const filmes = [
  "Minions e Monstros",
  "A Odisseia",
  "Marsupilami",
  "Homem-Aranha: Um Novo Dia",
  "O Sorveteiro",
  "A Morte de Robin Hood",
  "Coyote vs Acme",
  "Resident Evil",
  "Vingadores: Ultimato",
  "Street Fighter",
  "Cara de Barro",
  "Gato de Cartola",
  "Jogos Vorazes: Amanhecer na Colheita",
  "Hexed",
  "Entrando Numa Grande Fria",
  "Duna: Parte 3",
  "Vingadores: Doomsday",
  "Angry Birds 3",
  "Werwulf"
];

const Home = () => {
  const [movies, setMovies] = useState([]);

  const buscarFilme = async (nome) => {
    const url = `${apiUrl}/search/movie?api_key=${apiKey}&language=pt-BR&query=${encodeURIComponent(nome)}`;

    const res = await fetch(url);
    const data = await res.json();

    return data.results?.[0];
  };

  useEffect(() => {
    const carregarFilmes = async () => {
      const lista = [];

      for (const filme of filmes) {
        const resultado = await buscarFilme(filme);

        if (resultado) {
          lista.push(resultado);
        }
      }

      setMovies(lista);
    };

    carregarFilmes();
  }, []);

  return (
    <div className="container">

      <h2 className="title">
        Lançamentos 
      </h2>

      <div className="movies-container">

        {movies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
          />
        ))}

      </div>

    </div>
  );
};

export default Home;
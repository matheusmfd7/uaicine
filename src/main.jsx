import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import SeriesDetails from "./pages/SeriesDetails.jsx";
import Search from "./pages/Search.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>

      <Routes>

        <Route element={<App />}>

          <Route 
            path="/" 
            element={<Home />} 
          />

          <Route 
            path="/movie/:id" 
            element={<MovieDetails />} 
          />

          <Route 
            path="/tv/:id" 
            element={<SeriesDetails />} 
          />

          <Route 
            path="/search" 
            element={<Search />} 
          />

        </Route>

      </Routes>

    </HashRouter>
  </StrictMode>
);
import "./App.css";
import {useEffect, useState} from "react";

import Header from "./components/Header";

import Search from "./components/Search";
import Results from "./components/Results";
import Nominated from "./components/Nominated";

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [nominated, setNominated] = useState([]);

  const nominateMovie = (movie) => {
    const nominatedList = [...nominated, movie];
    setNominated(nominatedList);
  };

  const removeNomination = (movie) => {
    const adjustedNominatedList = nominated.filter(
      (nominatedMovie) => nominatedMovie.imdbID !== movie.imdbID
    );

    setNominated(adjustedNominatedList);
  };

  const getMovies = async (search) => {
    let pagesCount = 3;
    let movies = [];
    for (let i = 1; i <= pagesCount; i++) {
      let requestURL = `http://www.omdbapi.com/?s=${search}&page=${i}&apikey=${API_KEY}`;

      let request = await fetch(requestURL);
      let response = await request.json();
      console.log(response);
      if (response.Search) {
        movies = movies.concat(response.Search);
      }
    }

    setMovies(movies);
  };

  useEffect(() => {
    getMovies(search);
  }, [search]);

  return (
    <div className="App">
      <Header />
      <Search searchVal={search} setSearchVal={setSearch} />

      <Results movies={movies} handleClick={nominateMovie} />

      <Nominated movies={nominated} handleClick={removeNomination} />
    </div>
  );
}

export default App;

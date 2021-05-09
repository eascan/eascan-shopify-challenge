import "./App.css";
import {useEffect, useState} from "react";
import Header from "./components/Header";

import Search from "./components/Search";
import Results from "./components/Results";

console.log("API KEY:", process.env.REACT_APP_API_KEY);
const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

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

      <Results movies={movies} />

      {/* Nominations */}
    </div>
  );
}

export default App;

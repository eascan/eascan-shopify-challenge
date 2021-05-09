import "./App.css";
import {useEffect, useState} from "react";
import Header from "./components/Header";

import Search from "./components/Search";
import Results from "./components/Results";
import Heading from "./components/Heading";

console.log("API KEY:", process.env.REACT_APP_API_KEY);
const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const getMovies = async (search) => {
    const requestURL = `http://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`;

    const request = await fetch(requestURL);
    const response = await request.json();

    if (response.Search) {
      setMovies(response.Search);
    }
  };

  useEffect(() => {
    getMovies(search);
  }, [search]);

  return (
    <div className="App">
      <Header />
      <Search searchVal={search} setSearchVal={setSearch} />

      <div>
        <Heading title={"Results"} />
        <div className="flex flex-nowrap overflow-x-scroll scrollbar-hide w-screen">
          <Results movies={movies} />
        </div>
      </div>
      {/* Nominations */}
    </div>
  );
}

export default App;

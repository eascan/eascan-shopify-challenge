import {useEffect, useState} from "react";

import Header from "./components/Header";

import Search from "./components/Search";
import Results from "./components/Results";
import Nominated from "./components/Nominated";
import {Alert} from "@material-ui/lab";

//custom states for alert
const TRUE = "true";
const FALSE = "false";

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [nominated, setNominated] = useState([]);
  const [alertMode, setAlertMode] = useState("false");

  // const [nominationBtn, setNominationBtn] = useState("false");

  const nominateMovie = (movie) => {
    if (nominated.length === 5) {
      setAlertMode(TRUE);
      setTimeout(function () {
        setAlertMode(FALSE);
      }, 4000);
    } else {
      const nominatedList = [...nominated, movie];
      setNominated(nominatedList);
    }
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

  //checking localdata on load

  useEffect(() => {
    const localDataObj = localStorage.getItem("nominatedMovies");
    if (localDataObj) {
      setNominated(JSON.parse(localDataObj));
    }
  }, []);

  useEffect(() => {
    getMovies(search);
  }, [search]);

  useEffect(() => {
    localStorage.setItem("nominatedMovies", JSON.stringify(nominated));
  }, [nominated]);

  return (
    <div className="App">
      {alertMode === FALSE && (
        <Alert
          className="fixed opacity-0 top-12 left-1/4 w-1/2"
          severity="error"
          onClose={() => {}}
        >
          This is an alert
        </Alert>
      )}
      {alertMode === TRUE && (
        <Alert
          className="fixed top-12 left-1/4 w-1/2 z-50"
          severity="error"
          onClose={() => {
            setAlertMode("false");
          }}
        >
          You've reached the nomination limit!
        </Alert>
      )}
      <Header />
      <Search searchVal={search} setSearchVal={setSearch} />

      <Results
        movies={movies}
        handleClick={nominateMovie}
        nomination={nominated}
      />

      <Nominated movies={nominated} handleClick={removeNomination} />
    </div>
  );
}

export default App;

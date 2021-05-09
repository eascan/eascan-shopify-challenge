function Results({movies}) {
  return (
    <>
      {movies.map((movie) => (
        <img
          className="h-52 w-72 ml-7 mr-5 md:h-72 md:w-1/6  cursor-pointer"
          src={movie.Poster}
        ></img>
      ))}
    </>
  );
}

export default Results;

// className="group transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"

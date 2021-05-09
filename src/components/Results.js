import "./Results.css";

function Results({movies}) {
  return (
    <div className="flex flex-nowrap  overflow-x-scroll scrollbar-hide w-screen ">
      {movies.map((movie) => (
        <>
          <img
            className="shadow-sm h-52 w-72 ml-7 mr-5 md:h-72 md:w-1/6  cursor-pointer transition duration-200 ease-in md:transform md:hover:scale-105 md:hover:shadow-2xl"
            src={movie.Poster}
          ></img>

          <div className="flex items-center justify-center w-full -bottom-0">
            Hello
          </div>
        </>
      ))}
    </div>
  );
}

export default Results;

// className="group transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"

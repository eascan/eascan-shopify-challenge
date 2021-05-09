import Thumbnail from "./Thumbnail";
import {PlusCircleIcon} from "@heroicons/react/outline";
import "./Results.css";

function Results({movies, handleClick}) {
  return (
    <>
      <h2 className="px-8 pt-10 mb-10 font-bold text-xl">Results</h2>
      <div className="flex whitespace-nowrap overflow-x-auto overflow-y-visible scrollbar-hide w-full px-5 ">
        {movies.map((movie) => (
          <Thumbnail
            key={movie.imdbID}
            movie={movie}
            handleClick={handleClick}
            Icon={PlusCircleIcon}
          />
        ))}
      </div>
    </>
  );
}

export default Results;

// sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center

// className="group transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"

{
  /* <div className="flex flex-nowrap overflow-x-scroll scrollbar-hide w-screen;">
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
</div> */
}

import {XCircleIcon} from "@heroicons/react/outline";
import NominatedThumbNail from "./NominatedThumbNail";
import Thumbnail from "./Thumbnail";

function Nominated({movies, handleClick}) {
  return (
    <>
      <h2 className="px-8 font-bold text-xl text-center mt-8">Nominations</h2>
      <div className="nominations__bg px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center items-center ">
        {movies &&
          movies.map((movie) => (
            <NominatedThumbNail
              key={movie.imdbID}
              movie={movie}
              Icon={XCircleIcon}
              handleClick={handleClick}
            />
          ))}
      </div>
    </>
  );
}

// flex flex-col md:flex-row whitespace-nowrap  w-full h-96 px-1 pl-3

export default Nominated;

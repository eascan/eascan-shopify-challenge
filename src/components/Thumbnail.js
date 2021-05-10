import "./Thumbnail.css";

function Thumbnail({movie, handleClick, Icon, iconClass}) {
  return (
    <div className="thumbnail__result p-3 pt-10 pb-10 group cursor-pointer transition duration-300 ease-in w-56 hover:z-40 relative">
      <img className="h-56 w-36" src={movie.Poster} alt="" />

      <div className="thumbnail__text w-36 p-2">
        <p className="truncate max-w-md opacity-0  md:group-hover:opacity-100">
          Year: {movie.Year}
        </p>
        <p className="mt-1 min-h-full text-xs text-white transition-all duration-100 ease-in-out truncate opacity-100 sm:opacity-0 sm:group-hover:font-bold  sm:group-hover:opacity-100">
          {movie.Title}
        </p>
        <p className="flex text-xs items-center opacity-100 sm:opacity-0   sm:group-hover:opacity-100 ">
          Nominate
        </p>

        <Icon className={iconClass} onClick={() => handleClick(movie)} />
      </div>
    </div>
  );
}

export default Thumbnail;

/* {nomination.includes(`${movie.imdbID}`) === "false" ? ( */
/* ) : (
          <Icon className="h-5 mx-1 hover:text-red-400 opacity-0 group-focus:opacity-0" />
        )} */

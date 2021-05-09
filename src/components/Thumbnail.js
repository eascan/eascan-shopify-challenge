import "./Thumbnail.css";

function Thumbnail({movie, handleClick, Icon}) {
  return (
    <div className="thumbnail__result p-3 pt-10 pb-10 group cursor-pointer transition duration-300 ease-in w-56 hover:z-50 relative">
      <img className="h-56 w-36" src={movie.Poster} alt="" />

      <div className="thumbnail__text w-36 p-2">
        <p className="truncate max-w-md opacity-0 group-focus:opacity-100  md:group-hover:opacity-100">
          Year: {movie.Year}
        </p>
        <p className="mt-1 min-h-full text-xs text-white transition-all duration-100 ease-in-out group-hover:font-bold opacity-0 group-focus:opacity-100  md:group-hover:opacity-100">
          {movie.Title}
        </p>
        <p className="flex text-xs items-center opacity-0 group-focus:opacity-100  md:group-hover:opacity-100 ">
          Nominate
        </p>
        <Icon
          className="h-5 mx-1 hover:text-red-400 opacity-0 group-focus:opacity-100  md:group-hover:opacity-100"
          onClick={() => handleClick(movie)}
        />
      </div>
    </div>
  );
}

export default Thumbnail;

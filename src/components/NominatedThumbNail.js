import "./NominatedThumbNail.css";

function NominatedThumbNail({movie, handleClick, Icon}) {
  return (
    <div className="thumbnail__nominated pl-5 pt-10 pb-10 group cursor-pointer transition duration-300 ease-in w-96 h-96 md:hover:z-40 relative ml-auto mr-auto ">
      <img
        className="h-full w-3/4 ml-auto mr-auto shadow-md"
        src={movie.Poster}
        alt=""
      />

      <div className="thumbnail__text ml-auto mr-auto w-3/4 p-2">
        <p className="mt-1 min-h-full text-xs text-white transition-all duration-100 ease-in-out md:group-hover:font-bold opacity-0 group-focus:opacity-100 md:group-hover:opacity-100">
          {movie.Title}
        </p>
        <div className="flex">
          <p className="flex text-xs items-center opacity-0 group-focus:opacity-100 group-hover:opacity-100 ">
            Remove
          </p>
          <Icon
            className="h-5 mx-1 hover:text-red-400 opacity-0 group-focus:opacity-100  group-hover:opacity-100"
            onClick={() => handleClick(movie)}
          />
        </div>
      </div>
    </div>
  );
}

export default NominatedThumbNail;

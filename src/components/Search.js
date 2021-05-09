import {SearchIcon} from "@heroicons/react/outline";

function Search({searchVal, setSearchVal}) {
  return (
    <>
      <div className="search__bar flex p-1 items-center rounded-full bg-gray-200 h-10 w-10/12 m-auto mt-14 md:mt-20 transition duration-300 md:h-20 md:w-9/12 justify-between">
        <input
          className="outline-none border-none text-gray-700 bg-transparent placeholder-gray-500 pl-5 md:pl-7 md:text-2xl"
          placeholder="Search movies.."
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => (e.target.placeholder = "Search movies..")}
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          type="text"
        />
        <SearchIcon className="h-8 pr-3 md:pr-5 text-gray-400" />
      </div>
    </>
  );
}

export default Search;

function SearchBar() {
    return (
      <form className="flex gap-2.5 text-sm tracking-normal grow max-md:flex-wrap">
        <label htmlFor="searchInput" className="sr-only">Search for people, tasks, videos and more</label>
        <input
          className="flex-auto my-auto w-80 flex flex-col justify-center text-sm leading-6 text-neutral-800 max-md:max-w-full px-3 py-1.5 bg-white rounded-2xl shadow-sm"
          type="text"
          id="searchInput"
          placeholder="Search for videos, tasks and more..."
        />
      </form>
    );
  }

  export default SearchBar
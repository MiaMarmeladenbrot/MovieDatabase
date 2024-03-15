import "./Search.css";

//! props: setMoviesState, moviesState
const Search = (props) => {
  // Funktion, um UserInput zu bekommen und mit array zu vergleichen:
  const getInput = (e) => {
    e.preventDefault();

    // User-Input, Suchwort:
    const userInput = e.target[0].value.toLowerCase();

    // Filtern des arrays nach User-Input:
    const searchedMovies = props.moviesState.filter((item) => {
      return item.title.toLowerCase().includes(userInput);
    });

    // moviesState ändern mit den gefilterten array-Inhalten:
    props.setMoviesState(searchedMovies);
  };

  const reset = () => {
    props.setMoviesState(props.movies);
  };

  return (
    <section className="search">
      <form onSubmit={getInput}>
        <input type="text" placeholder="Which movie are you looking for?" />
        <input className="btn-lila" type="submit" value={"Search"} />
        <input
          onClick={reset}
          className="btn-lila"
          type="reset"
          value="Reset"
        />
      </form>
    </section>
  );
};

export default Search;

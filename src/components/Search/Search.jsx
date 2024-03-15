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

  return (
    <section className="search">
      <form onSubmit={getInput}>
        <input type="text" />
        <input type="submit" />
      </form>
    </section>
  );
};

export default Search;

import "./MoviesOutput.css";
import Stars from "../Stars";
import movies from "../movies";
import { useState } from "react";

const MoviesOutput = () => {
  // console.table(movies);
  // console.log(movies[1]);
  // console.log(movies[1].title);

  // state für den Sortier-Wert:
  const [sortValue, setSortValue] = useState("");

  // Funktion, um state für Sortiervalue bei Buttonklick zu ändern und Sortierfunktion mit neuem state-Wert aufzurufen:
  const changeSort = (e) => {
    setSortValue(e.target.value);
    console.log(e.target.value);
    sortFunc(sortValue);
  };

  // veränderbare Variable für die gefilterten Movies, default ist das ursprüngliche Movie-Array:
  let sortedMovies = movies;

  // Funktion, um die Filme je nach angeklicktem Button zu sortieren:
  const sortFunc = (paraValue) => {
    // console.log(sortValue);
    // # Movies erst leeren? geht auch nicht...
    sortedMovies = [];

    if (paraValue === "dateA") {
      sortedMovies = movies.sort((a, b) => Number(b.year) - Number(a.year));
    } else if (paraValue === "dateD") {
      sortedMovies = movies.sort((a, b) => Number(a.year) - Number(b.year));
    } else if (paraValue === "rate") {
      sortedMovies = movies.sort((a, b) => Number(b.rate) - Number(a.rate));
    } else if (paraValue === "az") {
      sortedMovies = movies.sort((a, b) => a.title - b.title);
    }
    console.log(sortedMovies);
    // console.log(sortValue);
  };

  return (
    <section>
      <button onClick={changeSort} value={"dateA"}>
        Date Ascending
      </button>
      <button onClick={changeSort} value={"dateD"}>
        Date Descending
      </button>
      <button onClick={changeSort} value={"rate"}>
        best rate
      </button>
      <button onClick={changeSort} value={"az"}>
        A-Z
      </button>
      {/* <button onClick={sortFunc("za")} value={"za"}>
        Z-A
      </button> */}

      <section className="output__container">
        {sortedMovies.map((movie, index) => (
          <div key={index}>
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
            <p>{movie.director}</p>
            <p>{movie.duration}</p>
            {/* <p>{movie.rate}</p> */}
            <Stars rate={movie.rate} />
            {movie.genre.map((genreItem, index) => (
              <p key={index}>{genreItem}</p>
            ))}
          </div>
        ))}
      </section>
    </section>
  );
};

export default MoviesOutput;

// {movies.map((movie, index) => (
//     <div key={index}>
//       <h2>{movie.title}</h2>
//       <p>{movie.year}</p>
//       <p>{movie.director}</p>
//       <p>{movie.duration}</p>
//       {/* <p>{movie.rate}</p> */}
//       <Stars rate={movie.rate} />
//       {movie.genre.map((genreItem, index) => (
//         <p key={index}>{genreItem}</p>
//       ))}
//     </div>
//   ))}

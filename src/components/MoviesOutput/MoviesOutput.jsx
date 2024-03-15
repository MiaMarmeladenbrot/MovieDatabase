import "./MoviesOutput.css";
import Stars from "../Stars";
import movies from "../movies";
import { useState } from "react";
import Buttons from "../Buttons/Buttons";
import Search from "../Search/Search";
import { Link } from "react-router-dom";

const MoviesOutput = () => {
  // state für die gefilterten Movies, default ist das ursprüngliche Movie-Array:
  const [moviesState, setMoviesState] = useState(movies);

  return (
    <section>
      <Search
        setMoviesState={setMoviesState}
        moviesState={moviesState}
        movies={movies}
      />
      <Buttons setMoviesState={setMoviesState} moviesState={moviesState} />

      <section className="output__container">
        {moviesState.length > 0 ? (
          moviesState.map((movie, index) => (
            <div key={index}>
              <img src="/img/eyes.jpg" alt="" />
              <h2>{movie.title}</h2>
              <Stars rate={movie.rate} />
              <Link className="btn-red" to={`/details/${movie.title}`}>
                More Info
              </Link>
            </div>
          ))
        ) : (
          <p className="error">
            Leider haben wir diesen Film nicht in der Datenbank.
          </p>
        )}
      </section>
    </section>
  );
};

export default MoviesOutput;

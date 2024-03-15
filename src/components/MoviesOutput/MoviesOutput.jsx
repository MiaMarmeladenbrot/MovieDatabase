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
  console.log(movies);

  return (
    <section>
      <Search setMoviesState={setMoviesState} moviesState={moviesState} />
      <Buttons setMoviesState={setMoviesState} moviesState={moviesState} />

      <section className="output__container">
        {moviesState.length > 0 ? (
          moviesState.map((movie, index) => (
            <div key={index}>
              <h2>{movie.title}</h2>
              <p>{movie.year}</p>
              <p>{movie.director}</p>
              <p>{movie.duration}</p>
              <Stars rate={movie.rate} />
              {movie.genre.map((genreItem, index) => (
                <p key={index}>{genreItem}</p>
              ))}
              <Link to={`/details/${movie.title}`}>More Info</Link>
            </div>
          ))
        ) : (
          <p>Leider haben wir diesen Film nicht in der Datenbank.</p>
          // //# wie kriege ich die Fehlermeldung wieder weg bei neuer Suche?
        )}
      </section>
    </section>
  );
};

export default MoviesOutput;

{
  /* <Link to="/details/"></Link> */
}

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

// // Funktion, um die Filme je nach angeklicktem Button zu sortieren:
// const sortFunc = (paraValue) => {
//     // console.log(sortValue);
//     // # Movies erst leeren? geht auch nicht...
//     //   sortedMovies = [];

//     if (paraValue === "dateA") {
//       sortedMovies = movies.sort((a, b) => Number(b.year) - Number(a.year));
//     } else if (paraValue === "dateD") {
//       sortedMovies = movies.sort((a, b) => Number(a.year) - Number(b.year));
//     } else if (paraValue === "rate") {
//       sortedMovies = movies.sort((a, b) => Number(b.rate) - Number(a.rate));
//     } else if (paraValue === "az") {
//       sortedMovies = movies.sort((a, b) => a.title - b.title);
//     }
//     console.log(sortedMovies);
//     // console.log(sortValue);
//   };

// statt Funktion useEffect(), um Sortierung in Abhängigkeit von sortValue zu machen:
//   useEffect(() => {
//     if (sortValue === "dateA") {
//       const temp = movies
//         .slice()
//         .sort((a, b) => Number(b.year) - Number(a.year));
//       setMoviesState(temp);
//     } else if (sortValue === "dateD") {
//       sortedMovies = movies.sort((a, b) => Number(a.year) - Number(b.year));
//     } else if (sortValue === "rate") {
//       sortedMovies = movies.sort((a, b) => Number(b.rate) - Number(a.rate));
//     } else if (sortValue === "az") {
//       sortedMovies = movies.sort((a, b) => a.title - b.title);
//     }
//     console.log(sortValue);
//     // console.log(sortedMovies);
//   }, [sortValue]);

//   // Funktion, um state für Sortiervalue bei Buttonklick zu ändern und Sortierfunktion mit neuem state-Wert aufzurufen:
//   const changeSort = (e) => {
//     setSortValue(e.target.value);
//     // console.log(e.target.value);
//     sortFunc(sortValue);
//     console.log("test");
//   };
//   console.log(sortValue);

//   // Test-Funktion mit Parametern für Button2, Date Descending: //--> läuft nicht?
//   const sortFunc = (paraValue) => {
//     if (paraValue === "dateD") {
//       const temp = movies
//         .slice()
//         .sort((a, b) => Number(b.year) - Number(a.year));
//       setMoviesState(temp);
//     }
//   };

// // state für den Sortier-Wert:
// const [sortValue, setSortValue] = useState("");

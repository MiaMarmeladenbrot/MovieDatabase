import "./Details.css";
import { useNavigate, useParams } from "react-router-dom";
import movies from "../../components/movies";
import { useEffect, useState } from "react";
import Stars from "../../components/Stars";

const Details = () => {
  // Variable für Navigate() für den Back-to-previous-site-Button:
  const navigate = useNavigate();

  // state für gefilterte Movie-Inhalte:
  const [movieDetails, setMovieDetails] = useState(movies);

  // Id der Seite holen:
  const { id } = useParams();

  // Abgleich zw. ID der Seite und Titel im movies-array; Speichern der Ergebnisse im movieDetails-State:
  useEffect(() => {
    const find = movies.find((item) => item.title === id);
    setMovieDetails(find);
  }, [movies]);

  console.log(movieDetails);

  return (
    <section className="details">
      <div>
        <svg
          className="back-arrow"
          onClick={() => navigate(-1)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
        <h2>{movieDetails.title}</h2>
        <p>{movieDetails.year}</p>
        <p>{movieDetails.director}</p>
        <p>{movieDetails.duration}</p>
        {/* <p>{movieDetails.rate}</p> */}
        <Stars rate={movieDetails.rate} />
        {movieDetails?.genre?.map((genreItem, index) => (
          <p key={index}>{genreItem}</p>
        ))}
      </div>
    </section>
  );
};

export default Details;

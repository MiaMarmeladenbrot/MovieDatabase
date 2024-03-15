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
        <img src="/img/arrow.svg" alt="" onClick={() => navigate(-1)} />
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

import "./Home.css";
import movies from "../../components/movies";
import MoviesOutput from "../../components/MoviesOutput/MoviesOutput";

const Home = () => {
  return (
    <section>
      <h1>Movies</h1>
      <MoviesOutput />
    </section>
  );
};

export default Home;

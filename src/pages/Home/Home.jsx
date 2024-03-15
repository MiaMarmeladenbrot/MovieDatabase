import "./Home.css";
import MoviesOutput from "../../components/MoviesOutput/MoviesOutput";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <section className="home">
      <Header />
      <h1>Movies</h1>

      <MoviesOutput />
    </section>
  );
};

export default Home;

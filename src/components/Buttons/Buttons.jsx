import "./Buttons.css";

//! props: setMoviesState, moviesState
const Buttons = (props) => {
  // Sortier-Funktion Date Ascending:
  const sortDateA = () => {
    const temp = props.moviesState.toSorted(
      (a, b) => Number(a.year) - Number(b.year)
    );
    props.setMoviesState(temp);
  };

  // Sortier-Funktion Date Descending:
  const sortDateD = () => {
    const temp = props.moviesState.toSorted(
      (a, b) => Number(b.year) - Number(a.year)
    );
    props.setMoviesState(temp);
  };

  // Sortier-Funktion Rate:
  const sortRate = () => {
    const temp = props.moviesState.toSorted(
      (a, b) => Number(b.rate) - Number(a.rate)
    );
    props.setMoviesState(temp);
  };

  // Sortier-Funktion A-Z:
  const sortAZ = () => {
    const temp = props.moviesState.toSorted((a, b) =>
      a.title.localeCompare(b.title)
    );
    props.setMoviesState(temp);
  };

  // Sortier-Funktion Z-A:
  const sortZA = () => {
    const temp = props.moviesState.toSorted(
      (a, b) => -1 * a.title.localeCompare(b.title)
    );
    props.setMoviesState(temp);
  };

  return (
    <section className="buttons">
      <button className="btn-lila2" onClick={sortDateA}>
        Date Ascending
      </button>
      <button className="btn-lila2" onClick={sortDateD}>
        Date Descending
      </button>
      <button className="btn-lila2" onClick={sortRate}>
        Best Rate
      </button>
      <button className="btn-lila2" onClick={sortAZ}>
        A-Z
      </button>
      <button className="btn-lila2" onClick={sortZA}>
        Z-A
      </button>
    </section>
  );
};

export default Buttons;

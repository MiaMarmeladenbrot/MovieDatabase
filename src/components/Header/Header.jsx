import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <h2>Logo</h2>
      <nav>
        <NavLink>Movies</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Impressum</NavLink>
      </nav>
    </header>
  );
};

export default Header;

import "../styles/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="Background">
      <header className="Navbar">
        <div className="UpperNavBar-wrapper">
          <Link to="/">
            <img src="/img/Logo.png" className="logo" alt=""></img>
          </Link>
          <div className="SearchBox-wrapper">
            <img
              src="/img/SearchGradient.png"
              className="SearchIcon"
              alt="Pesquisar"
            />

            <input
              className="SearchBox"
              placeholder="Pesquisar por produtos..."
            />
          </div>
        </div>
        <div className="LowerNavBar-wrapper">
          <nav className="Navigation">
            <a href="#">Categorias</a>
            <a href="#">Empréstimos</a>
            <a href="#">Vender</a>
            <a href="#">Trocas</a>
            <Link to="/catalog">Catálogo</Link>
          </nav>
          <div className="ButtonsWrapper">
            <button>
              <img src="/img/UserGradient.png" /> Login
            </button>
            <img src="/img/Separator.png" />
            <button>
              <img src="/img/CartGradient.png"></img>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

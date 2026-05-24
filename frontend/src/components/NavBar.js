import "../styles/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="Background">
      <header className="Navbar">
        <div className="UpperNavBar-wrapper">
          <Link to="/">
            <img src="/img/LogoUgbMarket.png" className="logo" alt=""></img>
          </Link>
          <div className="SearchBox-wrapper">
            <img
              src="/img/Search-icon.svg"
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
            <a href="#">Produtos</a>
          </nav>
          <div className="ButtonsWrapper">
            <button>
              <img src="/img/Person-icon.png" /> Login
            </button>
            <img src="/img/Separator.png" />
            <button>
              <img src="/img/Kart-icon.png"></img>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

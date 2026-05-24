import "./App.css";
import NavBar from "./components/NavBar";
import CardHero from "./components/CardHero";
import CategoryCard from "./components/CategoryCard";
import FeaturedProducts from "./components/FeaturedProducts";
import RelatedProduct from "./components/RelatedProduct";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <img src="./img/Hero-ugb.png" className="HeroBackground" />
      <div className="HeroHeadlineWrapper">
        <h1 className="Headline">
          O marketplace de alunos <br />
          para alunos.
        </h1>
        <p>
          Venda, troque e realize empréstimos de materias com o <br />
          poder de um clique.
        </p>
      </div>
      <div className="SliderPassWrapper">
        <div className="SliderPass">
          <img src="./img/ChevronLeft.png"></img>
        </div>
        <div className="SliderPass">
          <img src="./img/ChevronRight.png"></img>
        </div>
      </div>
      <div className="SlideIndexWrapper">
        <div className="SliderIndex active"></div>
        <div className="SliderIndex"></div>
        <div className="SliderIndex"></div>
        <div className="SliderIndex"></div>
        <div className="SliderIndex"></div>
      </div>
      <section className="HeroBody">
        <div className="HeroCardWrapper">
          <CardHero
            title="Transações confiáveis"
            image="./img/Shield.png"
            description="Nosso sistema de reputação avalia tanto vendedor como cliente."
            buttonText="Começar a comprar"
            onClick={() => {}}
          />
          <CardHero
            title="Venda dentro do campus"
            image="./img/Target.png"
            description="Alcance todo o campus e venda seus produtos de forma prática."
            buttonText="Começar a vender"
            onClick={() => {}}
          />
          <CardHero
            title="Troque produtos"
            image="./img/Present.png"
            description="Alcance todo o campus e venda seus produtos de forma prática."
            buttonText="Começar a trocar"
            onClick={() => {}}
          />
        </div>
        <div className="CategoryCardWrapper">
          <CategoryCard />
        </div>
        <div className="ProductCardWrapper">
          <FeaturedProducts />
          <RelatedProduct />
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

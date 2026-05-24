import "./App.css";
import NavBar from "./components/NavBar";
import CardHero from "./components/CardHero";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
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
        <div className="HeroCardWrapper"></div>
      </section>
    </div>
  );
}

export default App;

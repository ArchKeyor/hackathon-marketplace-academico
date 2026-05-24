import "../styles/CardHero.css";

export default function CardHero(props) {
  return (
    <div>
      <div className="Card">
        <div className="CardContent">
          <h2>{props.cardTitle}</h2>
          <p>{props.cardDesc}</p>
          <button>{props.cardCta}</button>
        </div>
      </div>
    </div>
  );
}

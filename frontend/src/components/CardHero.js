import "../styles/CardHero.css";

export default function CardHero({
  title,
  image,
  description,
  buttonText,
  onClick,
}) {
  return (
    <div className="info-card">
      <h2 className="info-card-title">{title}</h2>
      <img src={image} alt={title} className="info-card-image" />
      <p className="info-card-description">{description}</p>
      <button className="info-card-button" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}

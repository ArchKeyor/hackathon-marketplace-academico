import "../styles/CategoryCard.css";

export default function CategoryCard() {
  const categories = [
    {
      name: "Serviços",
      image: "./img/CardBoard.png",
    },
    {
      name: "Snacks",
      image: "./img/Food.png",
    },
    {
      name: "Usados",
      image: "./img/Users.png",
    },
    {
      name: "Trocas",
      image: "./img/Trade.png",
    },
    {
      name: "Urgência",
      image: "./img/Urgency.png",
    },
  ];

  return (
    <div className="CardCategory">
      <h2 className="CategoryTitle">Categorias</h2>

      <div className="CategoryWrapper">
        {categories.map((category, index) => (
          <div className="CategoryItem" key={index}>
            <div className="CategoryBG">
              <img
                src={category.image}
                alt={category.name}
                className="CategoryIcon"
              />
            </div>

            <p className="CategoryName">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

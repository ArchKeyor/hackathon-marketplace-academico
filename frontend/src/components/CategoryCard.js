import "../styles/CategoryCard.css";

export default function CategoryCard() {
  const categories = [
    {
      name: "Serviços",
      image: "/img/ServicesGradient.png",
    },
    {
      name: "Snacks",
      image: "/img/FoodGradient.png",
    },
    {
      name: "Usados",
      image: "/img/UserGradient.png",
    },
    {
      name: "Trocas",
      image: "/img/HandGradient.png",
    },
    {
      name: "Urgência",
      image: "./img/UrgencyGradient.png",
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

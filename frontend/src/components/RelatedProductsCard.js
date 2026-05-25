import "../styles/ProductCard.css";

import { useNavigate } from "react-router-dom";

export default function RelatedProductsCard({
  id,
  image,
  title,
  author,
  price,
  category,
}) {
  const navigate = useNavigate();

  return (
    // Componente que mapeia um json (../data/products) e aloca as informações dele nos cards
    <div className="ProductCard" onClick={() => navigate(`/produto/${id}`)}>
      <img src={image} alt={title} className="ProductImage" />

      <h3 className="ProductTitle">{title}</h3>

      <p className="ProductAuthor">{author}</p>

      <h2 className="ProductPrice">{price}</h2>

      <p className="ProductCategory">{category}</p>
    </div>
  );
}

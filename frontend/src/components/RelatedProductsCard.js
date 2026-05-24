import "../styles/ProductCard.css";

export default function RelatedProductsCard({
  image,
  title,
  author,
  price,
  category,
}) {
  return (
    <div className="ProductCard">
      <img src={image} alt={title} className="ProductImage" />

      <h3 className="ProductTitle">{title}</h3>

      <p className="ProductAuthor">{author}</p>

      <h2 className="ProductPrice">{price}</h2>

      <p className="ProductCategory">{category}</p>
    </div>
  );
}

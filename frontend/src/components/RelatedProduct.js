import "../styles/FeaturedProducts.css";
import RelatedProductsCard from "../components/RelatedProductsCard";
import products from "../data/products";

export default function RelatedProduct() {
  const relatedProducts = products.filter((product) => product.related);

  return (
    <div className="FeaturedProducts">
      <div className="FeaturedHeader">
        <h2>Relacionados ao último produto que você viu</h2>
      </div>

      <div className="ProductsGrid">
        {relatedProducts.map((product) => (
          <RelatedProductsCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            author={product.author}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
}

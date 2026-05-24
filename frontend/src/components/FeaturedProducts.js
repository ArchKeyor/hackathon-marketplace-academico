import ProductCard from "./ProductCard";
import "../styles/FeaturedProducts.css";
import products from "../data/products";

export default function FeaturedProducts() {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <div className="FeaturedProducts">
      <div className="FeaturedHeader">
        <h2>Produtos em destaque</h2>

        <a href="/">Ver todo o catálogo →</a>
      </div>

      <div className="ProductsGrid">
        {featuredProducts.map((product) => (
          <ProductCard
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

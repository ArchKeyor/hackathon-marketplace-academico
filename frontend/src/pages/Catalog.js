import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import products from "../data/products";
import "../styles/Catalog.css";

const catalogProducts = products.filter(
  (p) => p.featured === false && p.related === false,
);

export default function Catalog() {
  const navigate = useNavigate();

  return (
    <div className="CatalogPage">
      <NavBar />

      <div className="CatalogContainer">
        <div className="CatalogBreadcrumb">
          <span>Produtos</span>
          <span className="BreadcrumbSeparator">›</span>
          <span>Catálogo</span>
        </div>

        <div className="CatalogGrid">
          {catalogProducts.map((product) => (
            <div
              key={product.id}
              className="CatalogCard"
              onClick={() => navigate(`/produto/${product.id}`)}
            >
              <div className="CatalogCardImage">
                <img src={product.image} alt={product.title} />
              </div>

              <div className="CatalogCardBody">
                <h3 className="CatalogCardTitle">{product.title}</h3>
                <p className="CatalogCardAuthor">{product.author}</p>
                <p className="CatalogCardPrice">{product.price}</p>
                <p className="CatalogCardCategory">{product.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

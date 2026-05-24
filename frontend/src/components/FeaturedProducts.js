import ProductCard from "./ProductCard";
import "../styles/FeaturedProducts.css";

export default function FeaturedProducts() {
  const products = [
    {
      image: "./img/Brownie.png",
      title: "Brownie da ADM",
      author: "Bruno Alves | 5 Período Administração",
      price: "R$ 7,99",
      category: "Snacks",
    },

    {
      image: "./img/Book.png",
      title: "Livro Lógica de programação e algoritmos com Javascript",
      author: "Pedro Dias | 5 Período Eng. Software",
      price: "R$ 39,90",
      category: "Ciência",
    },

    {
      image: "./img/Kaue.png",
      title: "Serviço de mentoria em algoritmos",
      author: "Kauê Loreno | 5 Período Eng. Software",
      price: "R$ 29,99/hora",
      category: "Mentoria",
    },

    {
      image: "./img/Bike.png",
      title: "Bicicleta Aro 29 Gts Dexter 24 Marchas",
      author: "João Marcos | 5 Período Eng. Software",
      price: "R$ 599,99",
      category: "Usados",
    },
  ];

  return (
    <div className="FeaturedProducts">
      <div className="FeaturedHeader">
        <h2>Produtos em destaque</h2>

        <a href="/">Ver todo o catálogo →</a>
      </div>

      <div className="ProductsGrid">
        {products.map((product, index) => (
          <ProductCard
            key={index}
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

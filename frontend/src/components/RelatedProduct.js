import "../styles/FeaturedProducts.css";
import RelatedProductsCard from "../components/RelatedProductsCard";

export default function RelatedProduct() {
  const products = [
    {
      image: "./img/Sandwich.png",
      title: "Sanduíche natural com ingredientes frescos por unidade",
      author: "João Paulo | 5 Período Administração",
      price: "R$ 12,90",
      category: "Snacks",
    },

    {
      image: "./img/Cake.png",
      title: "Bolo de pote 250ml vários sabores ",
      author: "Bruna Azevedo | 7 Período Biomedicina",
      price: "R$ 15,90",
      category: "Snacks",
    },

    {
      image: "./img/Brigadeiro.png",
      title: "Brigadeiro por unidades",
      author: "Kauê Loreno | 5 Período Eng. Software",
      price: "R$ 5,99",
      category: "Snacks",
    },

    {
      image: "./img/PalhaItaliana.png",
      title: "Bicicleta Aro 29 Gts Dexter 24 Marchas",
      author: "João Marcos | 5 Período Eng. Software",
      price: "R$ 6,67",
      category: "Snacks",
    },
  ];

  return (
    <div className="FeaturedProducts">
      <div className="FeaturedHeader">
        <h2>Relacionados ao último produto que você viu</h2>
      </div>

      <div className="ProductsGrid">
        {products.map((product, index) => (
          <RelatedProductsCard
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

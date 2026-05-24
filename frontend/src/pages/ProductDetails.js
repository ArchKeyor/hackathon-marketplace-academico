import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import products from "../data/products";
import "../styles/ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h1>Produto não encontrado.</h1>;
  }

  return (
    <div className="ProductDetailsPage">
      <NavBar />

      <div className="ProductDetailsContainer">
        <div className="Breadcrumb">
          <p>
            ← Voltar ao catálogo | {product.category} →{product.title}
          </p>
        </div>

        <div className="ProductDetailsCard">
          <div className="ProductTopSection">
            <div className="ProductImageWrapper">
              <img
                src={product.image}
                alt={product.title}
                className="ProductMainImage"
              />
            </div>

            <div className="ProductInfoWrapper">
              <p className="ProductLink">
                Conferir mais produtos em {product.category}
              </p>

              <p className="ProductSales">
                + 300 vendas | ★★★★★ 4,9 Avaliação média
              </p>

              <div className="FeaturedBadge">Em destaque</div>

              <h1 className="ProductTitlePage">{product.title}</h1>

              <p className="ProductDescriptionPage">{product.description}</p>

              <p className="ProductAuthorPage">{product.author}</p>

              <h2 className="ProductPricePage">{product.price}</h2>

              <button className="BuyButton">Comprar Agora</button>
            </div>
          </div>

          <div className="ProductDivider"></div>

          <div className="ReviewSection">
            <div className="ReviewSummary">
              <h2>Veja as avaliações do produto</h2>

              <div className="RatingBig">
                <span>4,9</span>

                <div>
                  <p>★★★★★</p>
                  <small>312 Avaliações</small>
                </div>
              </div>

              <div className="SellerBadge">
                <img src="/img/Verified.png" alt="" />

                <div>
                  <h3>Vendedor Certificado</h3>

                  <p>+300 Vendas</p>
                </div>
              </div>
            </div>

            <div className="ReviewList">
              <h2>Avaliações</h2>

              <p className="ReviewCount">312 Comentários</p>

              <div className="ReviewCard">
                <div className="ReviewerHeader">
                  <img src="/img/User1.png" alt="" />

                  <div>
                    <h3>Rodrigo Júnior</h3>

                    <p>Estudante de Eng. Software | 5 Período</p>
                  </div>
                </div>

                <p className="Stars">★★★★★</p>

                <p className="ReviewText">
                  Que brownie gostoso! Além de tudo super acessível e com um
                  atendimento incrível. Recomendo.
                </p>
              </div>

              <div className="ReviewCard">
                <div className="ReviewerHeader">
                  <img src="/img/User2.png" alt="" />

                  <div>
                    <h3>Maria Fernanda</h3>

                    <p>Estudante de Eng. Elétrica | 3 Período</p>
                  </div>
                </div>

                <p className="Stars">★★★★★</p>

                <p className="ReviewText">
                  Amei o brownie, me surpreendi com o custo benefício! Compro
                  todo dia agora rsrs.
                </p>
              </div>

              <button className="MoreReviews">Ver todas as avaliações</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

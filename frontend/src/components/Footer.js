import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="FooterContent">
        {/* LEFT SIDE */}
        <div className="FooterBrand">
          <img src="/img/Logo.png" alt="UGB Market" className="FooterLogo" />

          <p className="FooterDescription">
            Usando a tecnologia para promover um ambiente acadêmico melhor.
          </p>
        </div>

        {/* LINKS */}
        <div className="FooterLinks">
          <div className="FooterColumn">
            <h3>Contato</h3>

            <a href="/">Suporte</a>
            <a href="/">Dúvidas</a>
            <a href="/">Fale conosco</a>
          </div>

          <div className="FooterColumn">
            <h3>Serviços</h3>

            <a href="/">Mentorias</a>
            <a href="/">Trabalhos</a>
            <a href="/">Artigos</a>
          </div>

          <div className="FooterColumn">
            <h3>Compras</h3>

            <a href="/">Produtos</a>
            <a href="/">Usados</a>
            <a href="/">Snacks</a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="FooterBottom">
        <p>© 2026 | UGB Market - Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

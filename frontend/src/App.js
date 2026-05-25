import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Catalog from "./pages/Catalog";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    // Gerenciador de rotas usando a biblioteca reac router
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<ProductDetails />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

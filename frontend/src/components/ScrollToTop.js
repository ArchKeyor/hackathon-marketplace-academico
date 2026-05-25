import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Componente que força o router dom a renderizar a página no início sem preservar o scroll anterior
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

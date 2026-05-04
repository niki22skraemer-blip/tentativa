import { useEffect } from "react";
import "../../components/Carousel/Carousel.css";
import Carousel from "../../components/Carousel/Carousel.jsx";
import Section1 from "../../components/Section1/Section1.jsx";
import Section2 from "../../components/Section2/Section2.jsx";
import Section3 from "../../components/Section3/Section3.jsx";
import Section4 from "../../components/Section4/Section4.jsx";

import './home.css';

export default function Home() {
  useEffect(() => {
    // Lógica para animar elementos quando aparecem na tela
    const elementos = document.querySelectorAll(".reveal");
    if (!elementos.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Diminuído um pouco para a animação começar mais cedo
    );

    elementos.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="home-page">
      {/* ==================== CARROSSEL DE IMAGENS ==================== */}
      <Carousel />

      {/* As classes "reveal" devem estar dentro dos componentes Section1, Section2, etc. */}
      {/* Para animar as seções inteiras, podemos envolvê-las em divs: */}
      
      <div className="reveal">
        <Section1 />
      </div>

      <div className="reveal">
        <Section2 />
      </div>

      <div className="reveal">
        <Section3 />
      </div>

      <div className="reveal">
        <Section4 />
      </div>
    </main>
  );
}
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Carousel() {
  const carouselRef = useRef(null);

  const slides = useMemo(
    () => [
      { title: "DRAWBACK", text: "Reduza custos e ganhe competitividade nas exportações.", to: "/drawback" },
      { title: "VISOEDU", text: "Treinamentos e simuladores para aprender na prática.", to: "/educacional" },
      { title: "SERVIÇOS", text: "Consultoria e soluções sob medida para o seu Comex.", to: "/servicos" },
      { title: "SISTEMAS", text: "Ferramentas para compliance e performance no dia a dia.", to: "/sistemas" },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  function goTo(nextIndex) {
    const el = carouselRef.current;
    if (!el) return;

    const i = (nextIndex + slides.length) % slides.length;
    setIndex(i);
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  }

  function move(direction) {
    goTo(index + direction);
  }

  useEffect(() => {
    const id = window.setInterval(() => {
      goTo(index + 1);
    }, 4500);

    return () => window.clearInterval(id);
  }, [index]);
  
  useEffect(() => {
    function handleResize() {
      const el = carouselRef.current;
      if (!el) return;
      el.scrollTo({ left: index * el.clientWidth, behavior: "auto" });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [index]);

  return (
    <section aria-label="Destaques">
      <div className="carousel-container home-hero">
        <button type="button" onClick={() => move(-1)} aria-label="Anterior">
          <i className="bi bi-chevron-bar-left" />
        </button>

        <div className="carousel" ref={carouselRef}>
          {slides.map((s) => (
            <div className="carousel-item" key={s.title}>
              <div className="carousel-card">
                <h2 className="carousel-title">{s.title}</h2>
                <p className="carousel-text">{s.text}</p>

                <Link className="carousel-btn" to={s.to}>
                  Saiba mais
                </Link>
              </div>
            </div>
          ))}
        </div>

        <button type="button" onClick={() => move(1)} aria-label="Próximo">
          <i className="bi bi-chevron-bar-right" />
        </button>
      </div>
    </section>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import './sistemas.css';

export default function Sistemas() {
  const [isAtivo, setIsAtivo] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAtivo(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (
    <main className="sistemas-page">
      {/* SEÇÃO 1 */}
      <section className="sistemas-secao-1">
        <div className="sistemas-titulo-1">
          <h1>Tecnologia que impulsiona sua empresa no Comércio Exterior</h1>
        </div>
        <div className="sistemas-subtitulo">
          <p>Nossas soluções digitais, como o VISOImport e o GESPRO, 
            foram desenhadas para automatizar fluxos complexos, reduzir 
            erros manuais e oferecer mais controle sobre suas 
            operações de Comércio Exterior.</p>
        </div>
      </section>

      {/* SEÇÃO ANIMADA */}
      <section ref={sectionRef} className="sistemas-secao-animada-container">
        <div className={`sistemas-wrapper-animacao ${isAtivo ? 'ativo' : ''}`}>
          <img 
            src="/Midias/servicos/foto-2.jpg" 
            alt="Soluções em Comércio Exterior" 
            className="sistemas-foto-animada"
          />
          <div className="sistemas-texto-animado">
            <p>
              A Visonet oferece ecossistemas digitais robustos e integrados, 
              apoiados por tecnologias de ponta e Inteligência Artificial para 
              conferir previsibilidade e alta performance às rotinas de Importação, 
              Exportação e Drawback. Nossos sistemas especializados e soluções como 
              o VISOImport e GESPRO, são desenvolvidos para reduzir o retrabalho e 
              aumentar a eficiência, transformando a complexidade operacional em 
              confiabilidade e resultados concretos para a gestão do seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* ============================= SEÇÃO 5 (CARDS) ============================= */}
      <section className="sistemas-secao-5">
        <div className="sistemas-titulos-header">
          <h1>Nossos Sistemas</h1>
          <hr style={{ background: "#0465bf", height: 4, border: 0, width: 200, margin: "20px auto" }} />
        </div>

        <div className="sistemas-container-geral">
          <div className="sistemas-container-grid">
            {/* CARD 1 */}
            <div className="sistemas-card-item">
              <a href="/visodue">
                <h3>VISO DUE</h3>
                <p className="sistemas-card-descricao">
                  Com mais de 30 anos de experiência, a Visonet simplifica a elaboração da DUE com agilidade, segurança e
                  confiança, otimizando suas exportações para alcançar novos mercados.
                </p>
                <span className="sistemas-saiba-mais">Saiba mais</span>
              </a>
            </div>

            {/* CARD 2 */}
            <div className="sistemas-card-item">
              <a href="/visoimport">
                <h3>VISO ImportNFE</h3>
                <p className="sistemas-card-descricao">
                  O Sistema gera arquivos XML’s que possibilitam a emissão da NF-e de Importação, a partir dos dados da
                  Declaração de Importação (DI) Registrada no SISCOMEX.
                </p>
                <span className="sistemas-saiba-mais">Saiba mais</span>
              </a>
            </div>

            {/* CARD 3 */}
            <div className="sistemas-card-item">
              <a href="/gespro">
                <h3>GESPRO</h3>
                <p className="sistemas-card-descricao">
                  Sistema especializado na gestão eficiente de produtos e na emissão automatizada de Declarações de Origem, simplificando as operações da sua empresa.
                </p>
                <span className="sistemas-saiba-mais">Saiba mais</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
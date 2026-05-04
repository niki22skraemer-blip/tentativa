import React, { useState, useEffect, useRef } from 'react';
import './servicos.css';

export default function Servicos() {

  const [isAtivo, setIsAtivo] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAtivo(true);
        }
      },
      { threshold: 0.5 } // Ativa quando metade da seção estiver visível
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  return (

<main className="servicos-page">
      {/* SEÇÃO 1 */}
      <section className="servicos-secao-1">
        <div className="servicos-titulo-1">
          <h1>
          Inteligência Operacional que transforma a sua gestão no Comércio Exterior.
          </h1>
        </div>
        <div className="servicos-subtitulo">
          <p>
             A Visonet simplifica processos, reduz burocracia e entrega suporte 
             estratégico para que sua empresa opere com segurança e eficiência 
            nas importações, exportações e regimes especiais.
            </p>
        </div>
      </section>

      {/* SEÇÃO ANIMADA */}
      <section ref={sectionRef} className="servicos-secao-animada-container">
        <div className={`servicos-wrapper-animacao ${isAtivo ? 'ativo' : ''}`}>
          <img 
            src='/Midias/servicos/foto-1.png'
            alt="Serviços Visonet" 
            className="servicos-foto-animada"
          />
          <div className="servicos-texto-animado">
            <p>
               Com mais de 30 anos de expertise e profundo domínio da legislação 
               aduaneira e tributária, a Visonet presta suporte estratégico completo 
               que abrange desde a gestão de cadastros de produtos no SISCOMEX até o 
               cumprimento de obrigações acessórias digitais. Nossas soluções incluem 
               programas de recuperação de tributos, elaboração de declarações eletrônicas 
               e gestão de certificados de origem, garantindo total conformidade, rastreabilidade 
               e alinhamento às normas vigentes em todas as etapas das operações de Comércio Exterior.
            </p>
          </div>
        </div>
      </section>

      {/* ============================= SEÇÃO 5 (CARDS) ============================= */}
      <section className="servicos-secao-5">
        <div className="servicos-titulos-header">
          <h1>Nossos Serviços</h1>
          <hr style={{ background: "#0465bf", height: 4, border: 0, width: 200, margin: "20px auto" }} />
        </div>

        <div className="servicos-container-geral">
          <div className="servicos-container-grid">
            {/* CARD 1 */}
            <div className="servicos-card-item">
              <a href="/reintegra">
                <h3>REINTEGRA</h3>
                <p className="servicos-card-descricao">
                  Programa da Receita Federal que devolve 
                   às empresas exportadoras parte dos tributos
                   pagos ao longo da cadeia produtiva.
                </p>
                <span className="servicos-saiba-mais">Saiba mais</span>
              </a>
            </div>

            {/* CARD 2 */}
            <div className="servicos-card-item">
              <a href="/sped">
                <h3>SPED para Exportação</h3>
                <p className="servicos-card-descricao">
                  Sistema da Receita Federal que unifica e 
                   digitaliza a escrituração fiscal e contábil 
                   das empresas.
                </p>
                <span className="servicos-saiba-mais">Saiba mais</span>
              </a>
            </div>

            {/* CARD 3 */}
            <div className="servicos-card-item">
              <a href="/catalogo">
                <h3>CATÁLOGO DE PRODUTOS</h3>
                <p className="servicos-card-descricao">
                  Serviço de catalogação de produtos importados
                   no portal Siscomex, focado em otimizar e 
                   dar segurança às suas operações.
                </p>
                <span className="servicos-saiba-mais">Saiba mais</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    );
  }

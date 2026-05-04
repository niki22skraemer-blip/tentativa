import './educacional.css';
//import CounterSection from "../../components/CounterSection/CounterSection";

/*const educCounters = [
  { target: 50000, label: "Alunos capacitados", prefix: "+ " },
  { target: 200, label: "Instituições atendidas", prefix: "+ " },
  { target: 6000, label: "Turmas", prefix: "+ " },
];*/

export default function Educacional() {
  return (
    <main className="educacional-page">
      {/* ===================================== SEÇÃO 1 ==================================== */}
      <section className="educacional-secao-1">
        <div className="educacional-titulo-1">
          <h1>
            Profissionalize sua Formação em Comércio Exterior
          </h1>
        </div>

        <div className="educacional-subtitulo">
          <p>
            A Visonet oferece soluções educacionais modernas, com simuladores, conteúdos atualizados e suporte
            especializado para universidades, escolas e empresas que desejam formar profissionais preparados para o
            mercado.
          </p>
        </div>
      </section>

      {/*===================================COUNTER SECTION==================================*/}
      {/*<CounterSection items={educCounters} />*/}

      {/* ===================================== SEÇÃO 2 ==================================== */}
      <section className="educacional-secao-2">
        <div className="educacional-titulos">
          <h1>Apresentando o VISOEDU</h1>
          <hr style={{ background: "#0465bf", height: 4, border: 0, width: 200, margin: "20px auto" }} />
        </div>

        <p>
          Nosso Educacional reúne três simuladores — <b>Exportação</b>, <b>Importação</b> e <b>Drawback Suspensão</b> —
          que colocam o aluno no fluxo real do Siscomex. Nos simuladores os alunos podem elaborar DUE, DUIMP, DI, LI,
          Fatura, Packing List, Certificado de Origem e o Ato Concessório de Drawback, entendendo regras, prazos e
          documentos na prática.
        </p>
      </section>

      {/* ===================================== SEÇÃO 3 ==================================== */}
      <section className="educacional-secao-3">
        <div className="educacional-titulos">
          <h1>Por que escolher a Visonet?</h1>
          <hr style={{ background: "#0465bf", height: 4, border: 0, width: 200, margin: "20px auto" }} />
        </div>

        <p>
          Com mais de 30 anos de experiência em Comércio Exterior e TI, e mais de 20 anos de pioneirismo em simuladores
          de Comex, a Visonet já apoiou mais de 100 mil usuários em universidades e empresas em todo o Brasil. Nossos
          cases e a constante atualização garantem conteúdos alinhados às normas, com suporte técnico-pedagógico completo
          e foco em resultados reais.
        </p>
      </section>

      {/* ===================================== SEÇÃO 4 ==================================== */}
      <section className="educacional-secao-4">
        <div className="educacional-titulos">
          <h1>O que a Visonet oferece?</h1>
          <hr style={{ background: "#0465bf", height: 4, border: 0, width: 200, margin: "20px auto" }} />
        </div>

        <div className="educacional-container-poster">
          <div className="educacional-poster">
            <a href="https://edu.visonet.com.br/courses/modulo-exportacao/">
              <img src="/Midias/posteres/2.png" alt="módulo de exportação" />
            </a>
          </div>

          <div className="educacional-poster">
            <a href="https://edu.visonet.com.br/courses/modulo-importacao/">
              <img src="/Midias/posteres/1.png" alt="módulo de importação" />
            </a>
          </div>

          <div className="educacional-poster">
            <a href="https://edu.visonet.com.br/courses/modulo-drawback/">
              <img src="/Midias/posteres/3.png" alt="módulo de drawback" />
            </a>
          </div>
        </div>

        <div className="educacional-titulos">
          <h1>Como funciona?</h1>
          <hr style={{ background: "#0465bf", height: 4, border: 0, width: 200, margin: "20px auto" }} />
        </div>

        <div className="educacional-container-balao">
          <div className="educacional-balao">Serviço 100% online</div>
          <div className="educacional-balao">Acesso aos simuladores e exercícios</div>
          <div className="educacional-balao">Ambiente similar ao Siscomex</div>
          <div className="educacional-balao">Módulos de Exportação, Importação e Drawback</div>
          <div className="educacional-balao">Ambiente especializado para professores</div>
          <div className="educacional-balao">Suporte técnico durante todo o período contratado</div>
        </div>
      </section>

      {/* ===================================== SEÇÃO 5 ==================================== */}
      <section className="educacional-secao-5">
        <div className="educacional-titulos">
          <h1>Para quem é?</h1>
          <hr style={{ background: "#0465bf", height: 4, border: 0, width: 200, margin: "20px auto" }} />
        </div>

        <div className="educacional-container-balao-2">
          <div className="educacional-balao-2">
            Universidades, faculdades e escolas técnicas
          </div>

          <div className="educacional-balao-2">
            Empresas que treinam equipes de Exportação/Importação
          </div>

          <div className="educacional-balao-2">
            Estudantes iniciantes ou avançados
          </div>

          <div className="educacional-balao-2">
            Profissionais que querem dominar DUIMP, DI, LI, DUE e Drawback
          </div>
        </div>

        <div className="educacional-titulos">
          <h1>Nossos parceiros:</h1>
          <hr style={{ background: "#0465bf", height: 4, border: 0, width: 200, margin: "20px auto" }} />
        </div>

        <div className="educacional-carrossel">
          <div className="educacional-carrossel-track">
            {/* GRUPO 1 */}
            <div className="educacional-carrossel-group">
              <div className="educacional-card">
                <img src="/Midias/educacional/abracomex-logo.png" alt="Abracomex" />
              </div>
              <div className="educacional-card">
                <img src="/Midias/educacional/pucrs-logo.png" alt="PUCRS" />
              </div>
              <div className="educacional-card">
                <img src="/Midias/educacional/senac-logo.png" alt="Senac" />
              </div>
              <div className="educacional-card">
                <img src="/Midias/educacional/uepg-logo.png" alt="UEPG" />
              </div>
              <div className="educacional-card">
                <img src="/Midias/educacional/unisanta-logo.webp" alt="unisanta" />
              </div>
              <div className="educacional-card">
                <img src="/Midias/educacional/unisinos-logo.png" alt="unisinos" />
              </div>
              <div className="educacional-card">
                <img src="/Midias/educacional/uniso-logo.webp" alt="uniso" />
              </div>
              <div className="educacional-card">
                <img src="/Midias/educacional/univille-logo.webp" alt="univille" />
              </div>
            </div>

            {/* GRUPO 2 (Duplicado para o efeito infinito) */}
            <div className="educacional-carrossel-group">
              <div className="educacional-card">
                <img src="/Midias/educacional/abracomex-logo.png" alt="Abracomex" />
              </div>
              <div className="educacional-card">
                <img src="/Midias/educacional/pucrs-logo.png" alt="PUCRS" />
              </div>
              <div className="educacional-card">
                <img src="/Midias/educacional/senac-logo.png" alt="Senac" />
              </div>
              <div className="educacional-card">
                <img src="/Midias/educacional/uepg-logo.png" alt="UEPG" />
              </div>
              <div className="educacional-card">
                <img src="/Midias/educacional/unisanta-logo.webp" alt="unisanta" />
              </div>
              <div className="educacional-card">
                <img src="/Midias/educacional/unisinos-logo.png" alt="unisinos" />
              </div>
              <div className="educacional-card">
                <img src="/Midias/educacional/uniso-logo.webp" alt="uniso" />
              </div>
              <div className="educacional-card">
                <img src="/Midias/educacional/univille-logo.webp" alt="univille" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================== SEÇÃO 6 ==================================== */}
      <section className="educacional-secao-6">
        <div className="educacional-titulos">
          <h1>Entre em contato</h1>
          <hr style={{ background: "#0465bf", height: 4, border: 0, width: 200, margin: "20px auto" }} />
        </div>

        <div className="educacional-fale-conosco">
          <div className="educacional-conteudo-container">
            <p>FALE COM A VISONET</p>

            <div className="educacional-contatos">
              <div className="educacional-contato-item">
                <img src="/Icons/ic_call-20-outline-white.svg" alt="Telefone" />
                <a href="tel:+5551993753092">(51) 99375-3092</a>
              </div>

              <div className="educacional-contato-item">
                <img src="/Icons/ic_mail-20-outline-white.svg" alt="E-mail" />
                <a href="mailto:ensino@visonet.net">ensino@visonet.net</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
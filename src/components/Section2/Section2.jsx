import { Link } from "react-router-dom";

export default function Section2() {
  return (
    <section className="secao-2">
      <div className="titulo">
        <h2>PRINCIPAIS SOLUÇÕES</h2>
<hr style={{ background: "#0465bf", height: 4, border: 0, width: 200, margin: "20px auto" }} />      </div>

      {/* ====== SERVIÇOS ====== */}
      <section className="grupo">
        <h3 className="subtitulos">SERVIÇOS</h3>

        <div className="container-baloes">
          <Link to="/drawback" className="balao-wrapper">
            <div className="balao">
              <div className="abas" style={{ color: "white" }}>
                DRAWBACK
              </div>
              <div className="conteudo">
                Regime que suspende ou isenta tributos sobre insumos para exportação, reduzindo custos e aumentando a
                competitividade internacional.
              </div>
            </div>
          </Link>

          <Link to="/reintegra" className="balao-wrapper">
            <div className="balao">
              <div className="abas" style={{ color: "white" }}>
                REINTEGRA
              </div>
              <div className="conteudo">
                Programa da Receita Federal que devolve parte dos tributos às empresas exportadoras para incentivar as
                exportações brasileiras.
              </div>
            </div>
          </Link>

          <Link to="/sped" className="balao-wrapper">
            <div className="balao">
              <div className="abas" style={{ color: "white" }}>
                SPED para Exportação
              </div>
              <div className="conteudo">
                Sistema da Receita Federal que unifica e digitaliza a escrituração fiscal e contábil das empresas,
                substituindo documentos em papel e simplificando obrigações acessórias.
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ====== SISTEMAS ====== */}
      <section className="grupo">
        <h3 className="subtitulos">SISTEMAS</h3>

        <div className="container-baloes">
          <Link to="/visodue" className="balao-wrapper">
            <div className="balao">
              <img src="/Midias/visodue.png" alt="VISODUE" />
              <div className="conteudo">Sistema de Gestão e Emissão de DUE (Declaração Única de Exportação)</div>
            </div>
          </Link>

          <Link to="/visoimport" className="balao-wrapper">
            <div className="balao">
              <img src="/Midias/nfe.png" alt="VisoImportNFE" />
              <div className="conteudo">
                Realize a geração do XML da NF-e a partir do XML da DI (Declaração de Importação) ou da DUIMP (Declaração
                Única de Importação) de forma automática e rápida.
              </div>
            </div>
          </Link>

          <Link to="/gespro" className="balao-wrapper">
            <div className="balao">
              <img src="/Midias/gespro.png" alt="GESPRO" />
              <div className="conteudo">Sistema de Gestão de Produtos e Emissão de Declaração de Origem</div>
            </div>
          </Link>
        </div>
      </section>

      {/* ====== EDUCACIONAL ====== */}
      <section className="grupo">
        <h3 className="subtitulos">VISOEDU</h3>

        <div className="container-baloes">
          <a
            href="https://edu.visonet.com.br/courses/modulo-exportacao/"
            className="balao-wrapper"
            target="_blank"
            rel="noreferrer"
          >
            <div className="balao">
              <div className="conteudo">
                <div className="abas" style={{ color: "white" }}>
                  Simulador de Exportação
                </div>
                <div className="explica">
                  Permite simular a criação do Packing List, Fatura Comercial, Certificado de Origem e DUE.
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://edu.visonet.com.br/courses/modulo-importacao/"
            className="balao-wrapper"
            target="_blank"
            rel="noreferrer"
          >
            <div className="balao">
              <div className="conteudo">
                <div className="abas" style={{ color: "white" }}>
                  Simulador de Importação
                </div>
                <div className="explica">
                  Simule a criação da DI, LI e DUIMP, utilizando também o Catálogo de Produtos.
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://edu.visonet.com.br/courses/modulo-drawback/"
            className="balao-wrapper"
            target="_blank"
            rel="noreferrer"
          >
            <div className="balao">
              <div className="conteudo">
                <div className="abas" style={{ color: "white" }}>
                  Simulador de Drawback Suspensão
                </div>
                <div className="explica">
                  Construa o Ato Concessório do Drawback em um ambiente especializado para exercícios.
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </section>
  );
}
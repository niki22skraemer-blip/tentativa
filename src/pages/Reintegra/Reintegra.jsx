import './reintegra.css';

export default function Reintegra() {
  return (
    <main className="reintegra-page">
      {/* ======================== SEÇÃO 1 ======================== */}
      <section className="reintegra-secao-1">
        <div className="reintegra-titulos-1">
          <h1>Apresentando o REINTEGRA</h1>
          <hr style={{ background: "#0465bf", height: 4, border: 0, width: 200, margin: "20px auto" }} />
        </div>

        <p>
          O REINTEGRA é um programa instituído pelo Governo Federal com o objetivo de estimular as exportações brasileiras
          por meio da restituição parcial de tributos incidentes ao longo da cadeia produtiva. O mecanismo possibilita às
          empresas exportadoras a recuperação de valores incorporados ao custo de produção dos bens exportados,
          contribuindo diretamente para o aumento da competitividade no Mercado Internacional.
          <br />
          <br />
          O REINTEGRA faz parte do conjunto de instrumentos de incentivo às exportações <b>associados ao regime de Drawback</b>, atuando de
          forma complementar na redução da carga tributária incidente sobre produtos destinados ao mercado externo. O
          programa é aplicável exclusivamente às empresas que realizam a exportação de bens manufaturados, abrangendo
          organizações industriais ou comerciais que exportam produtos processados em território nacional.
        </p>
      </section>

      {/* ======================== SEÇÃO 2 ======================== */}
      <section className="reintegra-secao-2">
        <div className="reintegra-titulos">
          <h1>Como funciona?</h1>
          <hr style={{ background: "#0465bf", height: 4, border: 0, width: 200, margin: "20px auto" }} />
        </div>

        <p>
          O REINTEGRA funciona devolvendo às empresas exportadoras uma parte dos tributos acumulados ao longo da cadeia
          produtiva, reduzindo o custo final do produto exportado. A empresa realiza a exportação normalmente e, após o
          embarque da mercadoria, pode solicitar o crédito do programa com base no valor da receita de exportação. Essa
          devolução é feita por meio de um percentual estabelecido pelo governo, aplicado sobre o valor exportado, e o
          crédito obtido pode ser usado para compensar outros tributos federais ou ser ressarcido em dinheiro. Dessa
          forma, o REINTEGRA ajuda a melhorar a competitividade da indústria brasileira no Mercado Internacional e
          incentiva a ampliação das exportações de produtos manufaturados.
        </p>
      </section>

      {/* ======================== SEÇÃO 3 (CTA) ======================== */}
      <section className="reintegra-secao-3">
        <div className="reintegra-titulos">
          <h1>Entre em contato</h1>
          <hr style={{ background: "#0465bf", height: 4, border: 0, width: 200, margin: "20px auto" }} />
        </div>

        <div className="reintegra-fale-conosco">
          <div className="reintegra-conteudo-container">
            <p>FALE COM A VISONET</p>

            <div className="reintegra-contatos">
              <div className="reintegra-contato-item">
                <img src="/Icons/ic_call-20-outline-white.svg" alt="Telefone" />
                <a href="tel:+5551993753092">(51) 99375-3092</a>
              </div>

              <div className="reintegra-contato-item">
                <img src="/Icons/ic_mail-20-outline-white.svg" alt="E-mail" />
                <a href="mailto:contato@visonet.net">contato@visonet.net</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
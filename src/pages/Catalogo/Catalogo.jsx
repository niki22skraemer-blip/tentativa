import './catalogo.css';

export default function Catalogo() {
  return (
    <main className="catalogo-page">
      {/* ======================== SEÇÃO 1 ======================== */}
      <section className="catalogo-secao-1">
        <div className="catalogo-titulos-1">
          <h1>
            Apresentando o <br />
            Catálogo de Produtos
          </h1>
          <hr style={{ background: "#0465bf", height: 4, border: 0, width: 200, margin: "20px auto" }} />
        </div>

        <p>
          O Catálogo de Produtos é uma funcionalidade do Novo Processo de Importação (NPI) e faz parte do novo módulo do
          Portal Único Siscomex, totalmente integrado à DUIMP. Ele reúne o cadastro de produtos importados e dos
          Operadores Estrangeiros, que são informações essenciais para a elaboração correta e padronizada da DUIMP. Com
          essa ferramenta, as empresas conseguem organizar previamente seus dados, garantindo mais agilidade, precisão e
          conformidade no processo de importação.
        </p>
      </section>

      {/* ======================== SEÇÃO 2 ======================== */}
      <section className="catalogo-secao-2">
        <div className="catalogo-titulos">
          <h1>Como funciona?</h1>
          <hr style={{ background: "#0465bf", height: 4, border: 0, width: 200, margin: "20px auto" }} />
        </div>

        <p>
          O Catálogo de Produtos funciona como uma base de dados centralizada no Portal Único Siscomex, onde a empresa
          registra previamente todas as informações relacionadas aos produtos que pretende importar. Nesse cadastro são
          incluídos detalhes como descrição, NCM, características técnicas, produtor estrangeiro e exportador, que são
          definidos como Operadores Estrangeiros. Após o produto estar cadastrado no Catálogo, essas informações podem
          ser reutilizadas automaticamente na elaboração da DUIMP, evitando retrabalho, eliminando erros e garantindo
          padronização. Assim, o Catálogo otimiza o processo de importação ao permitir que os dados fiquem prontos antes
          da operação, tornando o registro mais rápido, seguro e alinhado às exigências do Novo Processo de Importação.
        </p>
      </section>

      {/* ======================== SEÇÃO 3 (CTA) ======================== */}
      <section className="catalogo-secao-3">
        <div className="catalogo-titulos">
          <h1>Entre em contato</h1>
          <hr style={{ background: "#0465bf", height: 4, border: 0, width: 200, margin: "20px auto" }} />
        </div>

        <div className="catalogo-fale-conosco">
          <div className="catalogo-conteudo-container">
            <p>FALE COM A VISONET</p>

            <div className="catalogo-contatos">
              <div className="catalogo-contato-item">
                <img src="/Icons/ic_call-20-outline-white.svg" alt="Telefone" />
                <a href="tel:+5551993753092">(51) 99375-3092</a>
              </div>

              <div className="catalogo-contato-item">
                <img src="/Icons/ic_mail-20-outline-white.svg" alt="Email" />
                <a href="mailto:contato@visonet.net">contato@visonet.net</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
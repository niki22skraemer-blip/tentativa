import './viso-import.css';

export default function VisoImport() {

  return (
    <main>
      {/* ======================== SEÇÃO 1 ======================== */}
      <section className="viso-import-secao-1">
        <div className="viso-import-titulos-1">
          <h1>
            Apresentando o <br />
            VISOImportNFE
          </h1>
          <hr style={{ background: "#0465bf", height: 4, border: 0, width: 200, margin: "20px auto" }} />
        </div>

        <p>
          O VISOImportNFE é um sistema web desenvolvido para tornar o processamento de rateios de impostos e despesas
          muito mais simples e eficiente. Ele automatiza a geração de arquivos e reduz significativamente o tempo gasto
          na emissão da NF-e de entrada. Uma de suas principais vantagens é eliminar a necessidade de redigitar dados e
          valores, o que torna o trabalho mais ágil, preciso e seguro. Com essa ferramenta, o usuário consegue otimizar
          seu fluxo de trabalho, economizar tempo e evitar retrabalho, especialmente graças à praticidade no cálculo dos
          tributos de importação, à dispensa do cadastro manual de produtos e ao processo intuitivo e de fácil operação
          que facilita a rotina de quem lida com notas fiscais e operações de Comércio Exterior.
        </p>
      </section>

      {/* ======================== SEÇÃO 2 ======================== */}
      <section className="viso-import-secao-2">
        <div className="viso-import-titulos">
          <h1>Como funciona?</h1>
          <hr style={{ background: "#0465bf", height: 4, border: 0, width: 200, margin: "20px auto" }} />
        </div>

        <p>
          Na plataforma, o usuário pode consultar a Declaração de Importação usando o Certificado Digital A1, importar o
          XML da DI e, com apenas um clique em “Gerar Tributos”, obter o cálculo detalhado dos impostos incidentes,
          incluindo II, IPI, PIS, COFINS e ICMS. O sistema também permite gerar o espelho da NF-e em Excel, além dos
          arquivos TXT e XML necessários para emissão e integração com diferentes ERPs. Depois disso, o usuário pode
          enviar o espelho para o cliente ou para o setor financeiro, bem como importar os arquivos diretamente no site
          da SEFAZ. O VISOImportNFE trabalha com três tipos principais de arquivos: o espelho da nota fiscal em Excel, o
          arquivo TXT no padrão da SEFAZ e o XML utilizado para importação em sistemas de gestão.
        </p>
      </section>

      {/* ======================== SEÇÃO 3 ======================== */}
      <section className="viso-import-secao-3">
        <div className="viso-import-titulos">
          <h1>Entre em contato</h1>
          <hr style={{ background: "#0465bf", height: 4, border: 0, width: 200, margin: "20px auto" }} />
        </div>

        <div className="viso-import-fale-conosco">
          <div className="viso-import-conteudo-container">
            <p>FALE COM A VISONET</p>

            <div className="viso-import-contatos">
              <div className="viso-import-contato-1">
                <img src="/Icons/ic_call-20-outline-white.svg" alt="Telefone" />
                <a href="tel:+5551993753092">(51) 99375-3092</a>
              </div>

              <div className="viso-import-contato-2">
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

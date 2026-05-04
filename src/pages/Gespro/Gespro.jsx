import './gespro.css';

export default function Gespro() {
  return (
    <main className="gespro-page">
      {/* ======================== SEÇÃO 1 ======================== */}
      <section className="gespro-secao-1">
        <div className="gespro-titulos-1">
          <h1>Apresentando o GESPRO</h1>
          <hr style={{ background: "#0465bf", height: 4, border: 0, width: 200, margin: "20px auto" }} />
        </div>

        <p>
          O GESPRO é uma solução empresarial robusta desenvolvida para simplificar, validar e automatizar o processo de
          exportação. Criado para atuar como uma ponte segura entre a empresa exportadora e as Entidades Emissoras —
          especialmente a FIERGS — o sistema elimina a burocracia manual e reduz significativamente erros na documentação
          aduaneira. Com forte foco em conformidade, segurança e integração oficial, o GESPRO garante que cada etapa da
          emissão de Certificados de Origem siga padrões técnicos rigorosos, oferecendo às empresas mais agilidade,
          precisão e controle em suas operações de comércio exterior. Além disso, o sistema combina validações
          inteligentes, gestão de produtos e acordos internacionais, rastreamento completo e uma experiência de uso
          amigável, atendendo tanto ao público operacional quanto às áreas técnicas e estratégicas.
        </p>
      </section>

      {/* ======================== SEÇÃO 2 ======================== */}
      <section className="gespro-secao-2">
        <div className="gespro-titulos">
          <h1>Como funciona?</h1>
          <hr style={{ background: "#0465bf", height: 4, border: 0, width: 200, margin: "20px auto" }} />
        </div>

        <p>
          O GESPRO funciona através de um fluxo estruturado que reúne validações automáticas, integração direta com a
          FIERGS e um processo completo de emissão de Certificados de Origem. Tudo começa pelo cadastro unificado de
          clientes e produtos, onde são armazenadas informações essenciais como NCM, peso e valores, evitando redigitação
          futura. O sistema também permite criar e gerenciar as necessidades dos fornecedores, garantindo a comprovação
          de origem das mercadorias. Na etapa de emissão, o usuário seleciona a fatura e os produtos, enquanto o backend
          do sistema monta o documento de acordo com as regras do acordo comercial aplicável, como MERCOSUL ou ALADI, e
          transmite tudo diretamente aos servidores da FIERGS.
          <br />
          <br />
          Durante todo o processo, o GESPRO valida automaticamente CPFs, CNPJs, classificações fiscais e regras de
          negócio, prevenindo rejeições e inconsistências. Após o envio, o usuário recebe feedback em tempo real sobre o
          status do certificado, podendo acompanhar aprovações, pendências e históricos completos por meio dos módulos de
          rastreabilidade e relatórios. Todo esse fluxo é sustentado por uma arquitetura robusta em Java, interfaces
          amigáveis e interoperabilidade com padrões governamentais, garantindo segurança e alto desempenho em cada
          operação.
        </p>
      </section>

      {/* ======================== SEÇÃO 3 (CTA) ======================== */}
      <section className="gespro-secao-3">
        <div className="gespro-titulos">
          <h1>Entre em contato</h1>
          <hr style={{ background: "#0465bf", height: 4, border: 0, width: 200, margin: "20px auto" }} />
        </div>

        <div className="gespro-fale-conosco">
          <div className="gespro-conteudo-container">
            <p>FALE COM A VISONET</p>

            <div className="gespro-contatos">
              <div className="gespro-contato-item">
                <img src="/Icons/ic_call-20-outline-white.svg" alt="Telefone" />
                <a href="tel:+5551993753092">(51) 99375-3092</a>
              </div>

              <div className="gespro-contato-item">
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
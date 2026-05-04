import './viso-due.css';

export default function VisoDue() {

  return (
    <main>
      {/* ======================== SEÇÃO 1 ======================== */}
      <section className="viso-due-secao-1">
        <div className="viso-due-titulos-1">
          <h1>Apresentando o VISO DUE</h1>
          <hr style={{ background: "#0465bf", height: 4, border: 0, width: 200, margin: "20px auto" }} />
        </div>

        <p>
          O VISODUE é uma solução de alta performance desenvolvida para simplificar e automatizar a emissão e a gestão da
          Declaração Única de Exportação (DU-E). Ele atua como um middleware inteligente entre o ERP da empresa e o Portal
          Único Siscomex, garantindo que todas as informações sejam validadas, assinadas digitalmente e transmitidas com
          segurança. Construído para atender equipes de TI, gestores de comércio exterior e empresas que precisam de
          confiabilidade no envio de dados ao governo, o VISODUE oferece uma operação estruturada, robusta e totalmente
          integrada ao ambiente corporativo.
        </p>
      </section>

      {/* ======================== SEÇÃO 2 ======================== */}
      <section className="viso-due-secao-2">
        <div className="viso-due-titulos">
          <h1>Como funciona?</h1>
          <hr style={{ background: "#0465bf", height: 4, border: 0, width: 200, margin: "20px auto" }} />
        </div>

        <p>
          O VISODUE opera a partir de dois pilares principais: o módulo de segurança e identidade e o motor de
          processamento e comunicação. O primeiro, chamado VISODUE ID, é responsável por controlar o acesso e gerenciar
          os certificados digitais A1 utilizados na assinatura automática dos arquivos transmitidos ao governo. Ele cuida
          da segurança, garantindo que apenas usuários autorizados possam emitir, retificar ou consultar declarações,
          registrando todas as ações em logs detalhados.
          <br />
          <br />
          Já o segundo pilar, o VISODUE Core, é o núcleo que processa e envia as informações ao Portal Único. Antes da
          transmissão, o sistema realiza uma pré-validação em camadas, aplicando internamente as mesmas regras e críticas
          do Siscomex. Isso inclui verificar a estrutura do XML ou JSON, cruzar dados como Peso Líquido e Quantidade
          Estatística, checar atributos da NCM e validar informações relacionadas a LPCO e Drawback, evitando rejeições e
          retrabalho. Depois de validar tudo, o VISODUE realiza a transmissão direta ao ambiente de produção do Siscomex,
          captura automaticamente a DU-E, a chave da RUC e inicia o rastreamento contínuo do processo, atualizando o
          status até a averbação sem que o usuário precise acessar o portal manualmente.
        </p>
      </section>

      {/* ======================== SEÇÃO 3 ======================== */}
      <section className="viso-due-secao-3">
        <div className="viso-due-titulos">
          <h1>Entre em contato</h1>
          <hr style={{ background: "#0465bf", height: 4, border: 0, width: 200, margin: "20px auto" }} />
        </div>

        <div className="viso-due-fale-conosco">
          <div className="viso-due-conteudo-container">
            <p>FALE COM A VISONET</p>

            <div className="viso-due-contatos">
              <div className="viso-due-contato-1">
                <img src="/Icons/ic_call-20-outline-white.svg" alt="Telefone" />
                <a href="tel:+5551993753092">(51) 99375-3092</a>
              </div>

              <div className="viso-due-contato-2">
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

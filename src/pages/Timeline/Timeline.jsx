import React, { useState, useEffect, useRef } from "react";
import "./Timeline.css";

const timelineData = [
  { date: "1992", text: "Este ano marca o início das atividades da VISONET. Nossa fundação ocorreu no mesmo período em que foi publicado o decreto que instituiu o Sistema Integrado de Comércio Exterior (Siscomex), alinhando o surgimento da empresa com um dos momentos mais importantes de reestruturação e modernização do Comércio Exterior brasileiro.", spacing: "margin-bottom-xlarge" },
  { date: "1993", text: "No início de 1993 desenvolvemos uma integração direta com o Siscomex, possibilitando o envio dos Registros de Exportação (RE's) em lotes, obtendo desde cedo os benefícios da tecnologia e agilidade nos processos de Comércio Exterior.", spacing: "margin-bottom-xlarge" },
  { date: "2002", text: "Na visão de também contribuir para a formação de novos profissionais na área de Comércio Exterior e para tal feito é iniciado o projeto de criação dos simuladores, uma área que será destinada a ser muito similar ao SISCOMEX.", spacing: "margin-bottom-xlarge" },
  { date: "2004", text: "Após dois anos de projeto e de forma pioneira no Brasil, neste ano fizemos o início oficial dos simuladores pelas Escolas Técnicas de Comex, Faculdades e diretamente ao mercado, apenas com o módulo de Exportação, que futuramente se chamará VISODUE. Além de capacitar o mercado, este foi o ano em que começamos a prestar serviços de Drawback, assumindo a complexidade burocrática para entregar resultados financeiros, tributários e de custos de forma clara, com significativa contribuição aos clientes exportadores.", spacing: "margin-bottom-xlarge" },
  { date: "2005", text: "Construímos um ERP completo e focado no Comércio Exterior, que entregava alta performance na integração com DESPRO (desenvolvimento de produtos), Exportação, Importação, Drawback e Câmbio em uma única plataforma.", spacing: "margin-bottom-xlarge" },
  { date: "2007", text: "Visando um mercado com mais demandas por qualificação e aprendizagem prática, a VISONET começou a expandir seus simuladores e criou o módulo de Importação.", spacing: "margin-bottom-xlarge" },
  { date: "2009", text: "Tendo os módulos de Exportação e Importação prontos, nasceu a ideia de criar um módulo somente para Drawback e nesse ano foi finalizado e inserido no ambiente dos simuladores.", spacing: "margin-bottom-xlarge" },
  { date: "2010", text: "Com o mercado procurando soluções mais eficientes para o Comércio Exterior, a VISONET inicia a parceria de integração com clientes, realizando o serviço de RE’s  de forma remota através do VISOCONNECT. Foi neste ano que os simuladores receberam um novo site, juntamente com uma nova identidade visual, sendo chamado agora de COMEXLABS, recebendo um novo domínio: www.comexlabs.com.br", spacing: "margin-bottom-xlarge" },
  { date: "2012", text: "O ano foi marcado pelo lançamento do NOVOEX, com a atualização completa do nosso módulo de Exportação. Também demos um passo importante na modernização tecnológica da empresa ao desenvolver e migrar nossas soluções de Exportação, Importação, Drawback, SPED e REINTEGRA para aplicações baseadas na web.", spacing: "margin-bottom-xlarge" },
  { date: "2013", text: "No ano em que fizemos um reposicionamento estrutural, passamos a desenvolver soluções isoladas para clientes específicos e nos voltamos para o mercado como um todo. Nosso objetivo foi desenvolver plataformas escaláveis e abrangentes, democratizando o acesso a ferramentas de Comex de alto nível.", spacing: "margin-bottom-xlarge" },
  { date: "2015", text: "Ampliamos nosso portfólio de produtos e serviços com o desenvolvimento do Sistema Integrado - SIV (Exportação, Importação, Produtos e Drawback) e o lançamento de uma aplicação dedicada à gestão do programa REINTEGRA e o SPED Exportação, facilitando o controle fiscal e aduaneiro pelos usuários.", spacing: "margin-bottom-xlarge" },
  { date: "2018", text: "Entramos em uma nova fase de modernização dos simuladores, começando com a atualização trazendo as DU-E para o módulo de Exportação. Neste ano também começa a operacionalização do VISODUE, com uma solução interna para automatizar a emissão de DUE e também disponibilizado como serviço aos clientes.", spacing: "margin-bottom-xlarge" },
  { date: "2019", text: "Seguindo o plano de expansão e modernização dos simuladores, neste ano foi realizada a atualização do Módulo de Importação, espelhando a primeira versão da nova Declaração de Importação (DUIMP) junto com o Catálogo de Produtos.", spacing: "margin-bottom-xlarge" },
  { date: "2020", text: "Visualizando as demandas do mercado a VISONET desenvolve o GESPRO, satisfazendo uma necessidade de facilitação das Declarações de Origem, sendo capaz de enviar centenas de arquivos no próprio sistema de forma automatizada para as Autoridades Certificadoras que possuem processo de integração.", spacing: "margin-bottom-xlarge" },
  { date: "2023", text: "Iniciamos a integração de ferramentas de Inteligência Artificial aos nossos processos, acompanhando as demandas do novo cenário digital. Compreendendo que a automação se tornava um requisito essencial para o comércio global, onde começamos a adotar essas tecnologias com o objetivo de impulsionar a eficiência das operações dos nossos clientes.", spacing: "margin-bottom-xlarge" },
  { date: "2025", text: "Seguindo o Novo Processo de Importação (NPI), atualizamos nosso simulador de importação para contemplar as novas exigências e o formato da DUIMP (Declaração Única de Importação). Em paralelo, iniciamos o desenvolvimento prático de novas funcionalidades baseadas em Inteligência Artificial para nossos sistemas.", spacing: "margin-bottom-xlarge" },
  { date: "2026", text: "Em transição para o modelo SaaS (Software as a Service), nos focamos na readequação da empresa para operar com soluções totalmente integradas à Inteligência Artificial – IA, na busca de produtividade nos processos operacionais de nossos clientes. Atualmente, nossos esforços de desenvolvimento estão também concentrados em fornecer suporte completo à DUIMP e ao LPCO nos módulos de Importação e Exportação dos simuladores.", spacing: "margin-bottom-xlarge" }
];

export default function Timeline() {
  const [barHeight, setBarHeight] = useState(0);
  const progressRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!progressRef.current) return;
      
      const rect = progressRef.current.getBoundingClientRect();
      const pointOfFocus = 170; 
      
      let targetFill = pointOfFocus - rect.top;
      let filled = targetFill;

      if (window.scrollY < 300) {
        const percentage = window.scrollY / 300;
        filled = targetFill * percentage;
      }

      if (filled < 0) filled = 0;
      if (filled > rect.height) filled = rect.height;

      setBarHeight(filled);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="section-timeline">
      <div className="container">
        <div className="timeline_component">
          
          <div className="timeline_progress" ref={progressRef}>
            <div 
              className="timeline_progress-bar"
              style={{ height: `${barHeight}px` }} 
            ></div>
          </div>

          {timelineData.map((item, index) => (
            <div key={index} className="timeline_item">
              <div className="timeline_left">
                <div className="timeline_date-text">{item.date}</div>
              </div>

              <div className="timeline_centre">
                <div className="timeline_circle"></div>
              </div>

              <div className="timeline_right">
                <div className={item.spacing}>
                  <div className="timeline_text">{item.text}</div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="overlay-fade-top"></div>
          <div className="overlay-fade-bottom"></div>
        </div>
      </div>
    </div>
  );
}
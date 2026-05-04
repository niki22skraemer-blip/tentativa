import "./Mission.css";

export default function Mission() {
  return (
    <section className="sobre-mission-container">
      {/* MISSÃO */}
      <div className="sobre-mission-card">
        <div className="sobre-mission-header">
          <h3>MISSÃO</h3>
        </div>
        <div className="sobre-mission-content">
          <div className="sobre-mission-inner">
            <p>
              Promover serviços em Comércio Exterior e Produtos, fortalecendo a base exportadora brasileira,
              apoianado a entrada de empresas em novos mercados e disseminando a cultura do Comércio Internacional.
            </p>
          </div>
        </div>
      </div>

      {/* VISÃO */}
      <div className="sobre-mission-card">
        <div className="sobre-mission-header">
          <h3>VISÃO</h3>
        </div>
        <div className="sobre-mission-content">
          <div className="sobre-mission-inner">
            <p>
              Proporcionar às empresas brasileiras serviços, ensino e tecnologia para impulsionar o Comércio
              Internacional, contribuindo para o desenvolvimento sustentável e competitivo do nosso país.
            </p>
          </div>
        </div>
      </div>

      {/* VALORES */}
      <div className="sobre-mission-card">
        <div className="sobre-mission-header">
          <h3>VALORES</h3>
        </div>
        <div className="sobre-mission-content">
          <div className="sobre-mission-inner">
            <p>
              Profissionalismo<br></br>
              Honestidade<br></br>
              Agilidade<br></br>
              Competência<br></br> 
              Presteza<br></br>
              Compliance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useId, useState } from "react";
import "./ExpandableProfileCard.css";

export default function ExpandableProfileCard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentId = useId();

  function handleToggle() {
    setIsExpanded((previousValue) => !previousValue);
  }

  return (
    <section className="profileCardSection">
      <article className={`profileCard ${isExpanded ? "isExpanded" : ""}`}>
        <button
          type="button"
          className="profileCardHeader"
          onClick={handleToggle}
          aria-expanded={isExpanded}
          aria-controls={contentId}
        >
          <div className="profileCardAvatarWrap" aria-hidden="true">
            <img
              className="profileCardAvatar"
              src="/Midias/angelo.webp"
              alt=""
            />
          </div>

          <div className="profileCardHeaderText">
           <h3
  className="profileCardName"
  style={{ fontFamily: '"Roboto Condensed", sans-serif' }}
>
  Angelo Virtuoso
</h3>
          </div>

          <span className="profileCardChevron" aria-hidden="true">
            ▾
          </span>
        </button>

        <div className="profileCardBody" id={contentId}>
          <div className="profileCardBodyInner">
            <p className="profileCardText">
              - Despachante Aduaneiro;
              <br />
              <span className="profileCardDivider" />
              - Engenheiro de Operações e Mecânica pela Unisinos;
              <br />
              <span className="profileCardDivider" />
              - Pós-Graduação: Metodologia do Ensino Superior, SINTEL, Sistemas e
              Telecomunicações pela UFRGS/RS; Redes e Internet, Marketing, Direito
              e Gestão Tributária pela Unisinos/RS; Direito Tributário pela
              PUC/RS; Contabilidade, Gestão Tributária e Direito Tributário
              (online) pela BSSP;
              <br />
              <span className="profileCardDivider" />
              - Consultor, Professor e Palestrante em Comércio Exterior.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}

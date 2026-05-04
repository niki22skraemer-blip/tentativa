import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer" id="footer-container">
      <div className="site-footer__inner colunas">
        {/* Coluna 1 */}
        <div className="footer-col colu-1">
          <img
            src="/Midias/VISONet-logo_horizontal_white_negativo.png"
            alt="VISONet"
          />
          <p className="footer-text texto">
            Tecnologia, confiança e inovação para conectar você ao futuro com
            segurança e qualidade.
          </p>
        </div>

        {/* Coluna 2 */}
        <div className="footer-col colu-2">
          <div className="item">
            <img src="/Icons/ic_mail-20-outline-white.svg" alt="" />
            <a className="footer-link" href="mailto:contato@visonet.net">
              contato@visonet.net
            </a>
          </div>

          <div className="item">
            <img src="/Icons/ic_call-20-outline-white.svg" alt="" />
            <a className="footer-link" href="tel:+5551993753092">
              (51) 99375-3092
            </a>
          </div>

          <div className="item">
            <img src="/Icons/ic_location-20-outline-white.svg" alt="" />
            <span className="footer-text">
              Edfício Silec – Av. João Correa, 933, sala 604 Centro, São
              Leopoldo
            </span>
          </div>
        </div>

        {/* Coluna 3 */}
        <div className="footer-col colu-3">
          <p className="encontre-nos">ENCONTRE-NOS ONLINE</p>

          <div className="item-2">
            <a
              href="https://br.linkedin.com/company/visonet-tecnologia"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <img src="/Icons/ic_linkedin-24-outline-white.svg" alt="LinkedIn" />
            </a>

            <a
              href="https://www.instagram.com/visonet.tecnologia/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <img src="/Icons/ic_insta-32-outline-white.svg" alt="Instagram" />
            </a>

            <a
              href="https://www.youtube.com/@comexlabs"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <img src="/Icons/ic_youtube-32-outline-white.svg" alt="YouTube" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom linha-final">
        <p>© {new Date().getFullYear()} Visonet — Todos os direitos reservados.</p>

        <ul className="politica">
          <li>
            <a
              href="https://visonet.com.br/politica-de-privacidade/"
              target="_blank"
              rel="noreferrer"
            >
              Políticas de privacidade
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

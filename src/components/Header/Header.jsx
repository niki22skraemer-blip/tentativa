import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"; 

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
    setDropdownOpen(false);
  };

  const toggleMenu = () => {
    setOpen((v) => !v);
    setDropdownOpen(false); 
  };

  const handleParentClick = (e) => {
    if (window.innerWidth <= 768) {
      if (!dropdownOpen) {
        // Primeiro clique no Mobile: impede a navegação e apenas abre o submenu "Histórico"
        e.preventDefault();
        setDropdownOpen(true);
      } else {
        // Segundo clique no Mobile (submenu já aberto): fecha o menu e permite a navegação para /sobre
        closeMenu();
      }
    } else {
      // No Desktop, o CSS (hover) geralmente cuida do submenu, então o clique normal apenas navega e fecha o menu
      closeMenu();
    }
  };

  const checkActive = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <header className={open ? "is-open" : ""}>
      <div className="header-inner">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <img src="/Midias/VISONet-logo_horizontal_dark-blue_positivo.png" alt="VISONet" />
        </NavLink>

        <button className="menu-toggle" onClick={toggleMenu} type="button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav id="primary-nav" className={`nav ${open ? "is-open" : ""}`}>
          <div className="nav-menu">
            <NavLink to="/drawback" className={checkActive} onClick={closeMenu}>Drawback</NavLink>
            <NavLink to="/educacional" className={checkActive} onClick={closeMenu}>Visoedu</NavLink>
            <NavLink to="/servicos" className={checkActive} onClick={closeMenu}>Serviços</NavLink>
            <NavLink to="/sistemas" className={checkActive} onClick={closeMenu}>Sistemas</NavLink> 
            
            <div className={`nav-item-container ${dropdownOpen ? "dropdown-active" : ""}`}>
              <NavLink 
                to="/sobre" 
                className={checkActive} 
                onClick={handleParentClick}
              >
                Quem Somos
              </NavLink>
              
              <div className="submenu">
                <NavLink to="/historico" className="submenu-link" onClick={closeMenu}>
                  Histórico
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
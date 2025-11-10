import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <nav className="Barranav">
          <h3>Mi Pagina</h3>
          <ul className="Nav-links">
            <li>
              <Link to="/inicio">Inicio</Link>
            </li>
            <li>
              <Link to="/caracteristicas">Características</Link>
            </li>
            <li>
              <Link to="/registrar">Registrate</Link>
            </li>
            <li>
              <Link to="/Login">Iniciar sesion</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;

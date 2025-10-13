import './header.jsx'
import "./header.css"
function Header (){
    return (
    <>
     <header>
      <nav className="Barranav">
       <h3>Mi Pagina</h3>
        <ul className="Nav-links">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Características</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
     </header>
    </>
    )
}
export default Header;
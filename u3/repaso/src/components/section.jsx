import "./section.css"
import 'bootstrap/dist/css/bootstrap.min.css';
function Section (){
    return (
    <>
     <section>
      <div className="container-fluid bienvenidos">
        <h1 className="display-3">Bienvenido a Mi sitio</h1>
        <h4>Una solucion simple para comenzar tu proyecto web</h4>
        <button type="button" className="btn btn-light contacto">
          Contactanos
        </button>
      </div>
      <h3 className="title">Caracteristicas</h3>
      <div className="container-2">
        <div>
          <h4>Rapido</h4>
          <p>Carga rapida y optimizada para todos los dispositivos.</p>
        </div>
        <div>
          <h4>Simple</h4>
          <p>Diseño minimalista y facil de mantener.</p>
        </div>
        <div>
          <h4>Escalable</h4>
          <p>Preparado para migrar a React u otros Irameworks.</p>
        </div>
      </div>
    </section>
    </>
    )
}
export default Section;
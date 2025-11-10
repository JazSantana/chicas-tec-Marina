import React from "react";
import "./inicio.css";

function Inicio() {
  return (
    <>
      <section>
        <div className="container-fluid bienvenidos">
          <h1 className="display-3">Bienvenido a Mi sitio</h1>
          <h4>Una solución simple para comenzar tu proyecto web</h4>
          <button type="button" className="btn btn-light registrate">
            Empieza ahora
          </button>
        </div>

        <section className="intro">
          <div className="container text-center mt-5">
            <h2 className="titulo-seccion">¿Qué puedes hacer aquí?</h2>
            <p className="descripcion">
              En esta página podrás explorar diferentes secciones pensadas para
              ayudarte a desarrollar tu propio proyecto web. Aprende, crea y
              experimenta con tecnologías modernas.
            </p>

            <div className="row mt-5">
              <div className="col-md-4">
                <div className="card tarjeta">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5956/5956591.png"
                    alt="Diseño"
                  />
                  <h4>Diseños Modernos</h4>
                  <p>
                    Explora estilos limpios y adaptables para que tu web luzca
                    profesional.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card tarjeta">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3050/3050525.png"
                    alt="Código"
                  />
                  <h4>Aprende a Programar</h4>
                  <p>
                    Descubre cómo usar HTML, CSS, JavaScript y frameworks como
                    React.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card tarjeta">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/747/747086.png"
                    alt="Registro"
                  />
                  <h4>Regístrate Fácilmente</h4>
                  <p>
                    Guarda tu información y accede a secciones personalizadas de
                    aprendizaje.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contacto">
          <div className="container text-center">
            <h2>¿Tienes alguna pregunta?</h2>
            <p>
              Contáctanos y te ayudaremos a iniciar tu camino en el desarrollo
              web.
            </p>
            <button className="btn btn-contacto">Contáctanos</button>
          </div>
        </section>
      </section>

    
    </>
  );
}

export default Inicio;

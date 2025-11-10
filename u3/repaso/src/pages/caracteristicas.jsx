import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./caracteristicas.css";
import { Link } from "react-router-dom";


function Caracteristicas() {
  return (
    <div>
      
      <section>
        <div className="container-fluid bienvenidos">
          <h1 className="display-3">Bienvenido a Mi sitio</h1>
          <h4>Una solución simple para comenzar tu proyecto web</h4>
          <button type="button" className="btn btn-light registrate">
            Empieza ahora
          </button>
        </div>

        <h3 className="title">Características</h3>
        <div className="container-2">
          <div>
            <h4>Rápido</h4>
            <p>Carga rápida y optimizada para todos los dispositivos.</p>
          </div>
          <div>
            <h4>Simple</h4>
            <p>Diseño minimalista y fácil de mantener.</p>
          </div>
          <div>
            <h4>Escalable</h4>
            <p>Preparado para migrar a React u otros frameworks.</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="title">Beneficios</h3>
        <div className="container-2">
          <div>
            <i className="fas fa-mobile-alt fa-2x mb-3" style={{ color: "#6610f2" }}></i>
            <h4>Responsivo</h4>
            <p>Se adapta a cualquier pantalla y dispositivo.</p>
          </div>
          <div>
            <i className="fas fa-lock fa-2x mb-3" style={{ color: "#6610f2" }}></i>
            <h4>Seguro</h4>
            <p>Protege tus datos y privacidad de forma confiable.</p>
          </div>
          <div>
            <i className="fas fa-cogs fa-2x mb-3" style={{ color: "#6610f2" }}></i>
            <h4>Fácil de actualizar</h4>
            <p>Modifica y mantén tu sitio de manera sencilla.</p>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section>
        <h3 className="title">Testimonios</h3>
        <div className="container-2">
          <div>
            <p>"Excelente servicio y muy fácil de usar!"</p>
            <strong>- Ana P.</strong>
          </div>
          <div>
            <p>"Me ayudó mucho a iniciar mi proyecto web."</p>
            <strong>- Juan R.</strong>
          </div>
          <div>
            <p>"Recomiendo esta plataforma a todos los principiantes."</p>
            <strong>- María S.</strong>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section>
        <h3 className="title">Preguntas Frecuentes</h3>
        <div className="accordion container-2" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq1">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse1"
              >
                ¿Es gratis usar el sitio?
              </button>
            </h2>
            <div
              id="collapse1"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Sí, ofrecemos un plan gratuito con funciones básicas.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faq2">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2"
              >
                ¿Puedo migrar a React fácilmente?
              </button>
            </h2>
            <div
              id="collapse2"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Sí, el sitio está preparado para migrar a React u otros frameworks modernos.
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default Caracteristicas;

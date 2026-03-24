// src/App.jsx
import { useState, useEffect } from 'react';
import { useAnimations } from './hooks/useAnimations';

// ── Componente Notification ──────────────────────────────
function Notification({ message, type, onDone }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hide   = setTimeout(() => setVisible(false), 3000);
    const remove = setTimeout(() => onDone?.(), 3500);
    return () => { clearTimeout(hide); clearTimeout(remove); };
  }, [onDone]);

  return (
    <div style={{
      position:     'fixed',
      top:          '100px',
      right:        '20px',
      padding:      '1rem 2rem',
      background:   type === 'success' ? '#198754' : '#dc3545',
      color:        'white',
      borderRadius: '10px',
      boxShadow:    '0 5px 20px rgba(0,0,0,0.3)',
      zIndex:       10000,
      fontWeight:   500,
      animation:    visible ? 'slideInRight 0.5s ease' : 'slideOutRight 0.5s ease',
    }}>
      {message}
    </div>
  );
}

// ── App principal ────────────────────────────────────────
function App() {
  useAnimations(); // ← activa todos los efectos

  // Estado del newsletter
  const [email, setEmail]   = useState('');
  const [notif, setNotif]   = useState(null);

  const validateEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleSubscribe = () => {
    if (validateEmail(email)) {
      setNotif({ message: '¡Gracias por suscribirte!', type: 'success' });
      setEmail('');
    } else {
      setNotif({ message: 'Por favor, ingresa un email válido', type: 'error' });
    }
  };

  return (
    <>
      {/* Notificación flotante */}
      {notif && (
        <Notification
          message={notif.message}
          type={notif.type}
          onDone={() => setNotif(null)}
        />
      )}


      {/* HEADER */}
      <header className="main-header">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">

            <div className="logo-section">
              <img
                src="img/phishing_imagen.jpg"
                alt="Phishing Logo"
                className="logo-img"
              />
              <h1 className="brand-title">
                Phishing Information
              </h1>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >

              <ul className="navbar-nav gap-3">

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.infobae.com/tag/phishing/"
                    target="_blank"
                  >
                    <i className="bx bx-news"></i> Más noticias
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#dialogo1"
                  >
                    <i className="bx bx-info-circle"></i>
                    ¿Quiénes somos?
                  </a>
                </li>

              </ul>

            </div>

          </div>
        </nav>
      </header>



      {/* MODAL */}
<div
  className="modal fade"
  id="dialogo1"
  tabIndex="-1"
>

  <div className="modal-dialog modal-dialog-centered">

    <div className="modal-content">

      <div className="modal-header">

        <h5 className="modal-title">
          ¿Quiénes somos?
        </h5>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
        ></button>

      </div>


      <div className="modal-body">

        <p>
          Creamos una página web para que los usuarios tomen
          <strong> CONCIENCIA </strong>
          e información sobre la problemática y así aprender a cuidarse
          para no caer en este tipo de estafas. Además, en dicha página
          verán algunos links para que los usuarios vean noticias sobre
          experiencias de otras personas respecto al phishing y así no
          caigan en ellas. Con esto buscamos crear una comunidad informada.
        </p>

      </div>


      <div className="modal-footer">

        <button
          type="button"
          className="btn btn-primary"
          data-bs-dismiss="modal"
        >
          Cerrar
        </button>

      </div>

    </div>

  </div>

</div>



      {/* MAIN */}

      <main className="main-content">

        <div className="container">


          <section className="hero-section">

            <h1 className="hero-title">
              Phishing Information
            </h1>

            <p className="hero-subtitle">
              Información sobre el Phishing
            </p>

            <div className="hero-divider"></div>

          </section>



          <div className="banner-container">

            <img
              src="img/banner.jpg"
              className="banner-img"
            />

          </div>



          {/* CARD 1 */}

          <div className="info-card card-primary">

            <div className="card-icon">
              <i className="bx bx-shield-alt-2"></i>
            </div>

            <h3 className="card-header-title">
              Suplantación de Identidad
            </h3>

            <h5 className="card-subtitle">
              ¿Qué es el phishing?
            </h5>

            <p className="card-text">
              El phishing es un método para engañar a las personas y hacer que compartan contraseñas, números de tarjeta de crédito, y otra información confidencial haciéndose pasar por una institución de confianza (Ej: personal de un banco) en un mensaje de correo electrónico o llamada telefónica para robar sus datos personales y, cometer así, suplantación de identidad.
            </p>

          </div>



          {/* Carousel */}
<div className="carousel-section">

  <div
    id="carouselExampleIndicators"
    className="carousel slide"
    data-bs-ride="carousel"
  >

    <div className="carousel-indicators">

      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        className="active"
      ></button>

      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
      ></button>

      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
      ></button>

    </div>


    <div className="carousel-inner">

      <div className="carousel-item active">
        <img
          src="img/ciberseguridad-04.jpg"
          className="d-block w-100"
          alt="Ciberseguridad"
        />
      </div>

      <div className="carousel-item">
        <img
          src="img/image.jpg"
          className="d-block w-100"
          alt="Seguridad Digital"
        />
      </div>

      <div className="carousel-item">
        <img
          src="img/618f5d42634d992357423deee07f4ffb_XL.jpg"
          className="d-block w-100"
          alt="Protección Online"
        />
      </div>

    </div>


    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon"></span>
    </button>


    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon"></span>
    </button>

  </div>

</div>



          {/* Card 2: Consecuencias */}
<div className="info-card card-danger">

  <div className="card-icon">
    <i className="bx bx-error-circle"></i>
  </div>

  <h3 className="card-header-title">
    Consecuencias
  </h3>

  <h5 className="card-subtitle">
    ¿En qué puede afectar a mis contraseñas?
  </h5>

  <p className="card-text">
    Quien intente robar una identidad puede usar luego la información
    recolectada para solicitar un crédito o realizar alguna gestión
    ante un organismo público. Estas acciones pueden dañar la reputación
    y patrimonio de la víctima, además de costar tiempo y recursos
    económicos para reparar el daño.
  </p>

  <ul className="consequences-list">

    <li>
      <i className="bx bx-chevron-right"></i>
      {" "}
      Que pidan un crédito o adquieran bienes o servicios en tu nombre
    </li>

    <li>
      <i className="bx bx-chevron-right"></i>
      {" "}
      Que te vacíen la cuenta bancaria sin tu conocimiento
    </li>

    <li>
      <i className="bx bx-chevron-right"></i>
      {" "}
      Que utilicen tu identidad para cometer delitos graves
    </li>

    <li>
      <i className="bx bx-chevron-right"></i>
      {" "}
      Que te denieguen préstamos o no puedas conseguir un empleo
    </li>

  </ul>

</div>



          {/* Card 3: Tipos de Estafa */}
<div className="info-card card-warning">

  <div className="card-icon">
    <i className="bx bx-bug"></i>
  </div>

  <h3 className="card-header-title">
    Distintos tipos de estafa
  </h3>

  <div className="scam-types">

    <div className="scam-type">
      <h6>
        <i className="bx bx-envelope"></i>
        {" "}Por correo electrónico
      </h6>

      <p>
        Los mensajes de correo electrónico son el método más común para
        entregar el cebo del phishing. Suelen contener enlaces que llevan
        hasta sitios web maliciosos o archivos adjuntos infectados con malware.
      </p>
    </div>


    <div className="scam-type">
      <h6>
        <i className="bx bx-globe"></i>
        {" "}Por sitio web
      </h6>

      <p>
        Se hacen copias falsas de sitios web que la gente conoce y en los
        que confía. Los hackers crean estos sitios para engañarlo de modo
        que introduzca sus credenciales de inicio de sesión.
      </p>
    </div>


    <div className="scam-type">
      <h6>
        <i className="bx bx-phone"></i>
        {" "}Vishing
      </h6>

      <p>
        Esta abreviatura de "voice phishing" hace referencia a la versión
        telefónica del phishing. El atacante intenta convencer por teléfono
        a las víctimas para que revelen información personal.
      </p>
    </div>


    <div className="scam-type">
      <h6>
        <i className="bx bx-message"></i>
        {" "}Smishing
      </h6>

      <p>
        Éste se refiere al phishing vía SMS. La persona recibe un mensaje
        de texto donde se le pide que haga clic en un enlace o descargue
        una aplicación maliciosa.
      </p>
    </div>


    <div className="scam-type">
      <h6>
        <i className="bx bxl-facebook-circle"></i>
        {" "}Por redes sociales
      </h6>

      <p>
        Algunos atacantes pueden colarse en las cuentas de redes sociales
        y forzar a la gente a enviar enlaces maliciosos a sus amigos.
      </p>
    </div>

  </div>

</div>


{/* Security Image */}
<div className="security-image">

  <img
    src="img/images.jpg"
    alt="Seguridad Digital"
    className="img-fluid"
  />

</div>



          {/* Card 4: Recomendaciones */}
<div className="info-card card-success">

  <div className="card-icon">
    <i className="bx bx-check-shield"></i>
  </div>

  <h3 className="card-header-title">
    ¿Cómo evitarlo?
  </h3>

  <h5 className="card-subtitle">
    Recomendaciones
  </h5>

  <p className="card-text">
    Comunícate con organismos y empresas sólo por canales oficiales.
    Chequea dominios de correos y verificación de las cuentas en redes
    sociales; si vas a compartir información personal o bancaria asegúrate que
    <strong> la página esté protegida con el protocolo HTTPS.</strong>
  </p>


  <h6 className="recommendations-title">
    Para generar contraseñas seguras:
  </h6>


  <ul className="recommendations-list">

    <li>
      <i className="bx bx-check"></i>
      {" "}
      Combina letras mayúsculas y minúsculas, números y caracteres especiales
    </li>

    <li>
      <i className="bx bx-check"></i>
      {" "}
      Dale una longitud de <strong>ocho o más caracteres</strong>
    </li>

    <li>
      <i className="bx bx-check"></i>
      {" "}
      Utiliza una frase de origen desconocida por otros
    </li>

    <li>
      <i className="bx bx-check"></i>
      {" "}
      Reemplaza letras por números o signos
    </li>

    <li>
      <i className="bx bx-check"></i>
      {" "}
      Usa una contraseña que te recuerde algún hecho relevante
    </li>

    <li>
      <i className="bx bx-check"></i>
      {" "}
      Evita palabras comunes o nombres fáciles de deducir
    </li>

    <li>
      <i className="bx bx-check"></i>
      {" "}
      No uses datos personales (DNI, fecha de nacimiento, etc.)
    </li>

    <li>
      <i className="bx bx-check"></i>
      {" "}
      No utilices la misma contraseña en diferentes sistemas
    </li>

  </ul>

</div>



          {/* Card 5: Audiencia */}
<div className="info-card card-dark">

  <div className="card-icon">
    <i className="bx bx-group"></i>
  </div>

  <h3 className="card-header-title">
    ¿A quiénes va dedicada esta página?
  </h3>

  <h5 className="card-subtitle">
    ¿Por qué?
  </h5>

  <p className="card-text">
   Nuestra página va dedicada a los adultos mayores que quizás, al no haber crecido tanto con la tecnología como la generación de ahora, sean más vulnerables a la hora de caer en este tipo de trampas. Para poder brindarles y facilitarles algo más de información y así puedan mantenerse seguros en el mundo virtual. <strong>¡Siempre pueden contactarnos!</strong> Dejamos nuestra información más abajo.
  </p>

</div>



        </div>

      </main>



      {/* FOOTER */}
<footer className="main-footer">
  <div className="container">
    
    {/* Newsletter Section */}
    <div className="row newsletter-section">
      
      <div className="col-lg-7">
        <h2 className="footer-title">
          Conozca los avances en Ciberseguridad
        </h2>

        <p className="footer-text">
          ¿Le gustaría saber sobre los últimos avances de seguridad informática?
          Suscríbase a nuestro blog y sepa cómo proteger su computadora
          de posibles amenazas.
        </p>
      </div>

      <div className="col-lg-5">
        <div className="newsletter-form">

          <input
            type="email"
            placeholder="Ingrese su email"
            className="form-control"
            value={email}                          // ← conecta al estado
            onChange={(e) => setEmail(e.target.value)} // ← actualiza el estado
          />
          <button className="btn btn-subscribe" onClick={handleSubscribe}>
            Suscribirse
          </button>

        </div>
      </div>

    </div>

    <hr className="footer-divider" />


    {/* Footer Links */}
    <div className="row footer-links">

      <div className="col-md-4">

        <h3 className="footer-subtitle">
          Empresas
        </h3>

        <ul>

          <li>
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#dialogo1"
            >
              <i className="bx bx-info-circle"></i>
              {" "}¿Quiénes somos?
            </a>
          </li>

          <li>
            <a
              href="https://www.infobae.com/tag/phishing/"
              target="_blank"
            >
              <i className="bx bx-news"></i>
              {" "}Más noticias
            </a>
          </li>

        </ul>

      </div>



      <div className="col-md-4">

        <h3 className="footer-subtitle">
          Contactos
        </h3>

        <ul className="contact-list">

          <li>
            <i className="bx bxl-facebook"></i>
            {" "}mundociberseguridad
          </li>

          <li>
            <i className="bx bxl-twitter"></i>
            {" "}@mundo_ciberseguridad
          </li>

          <li>
            <i className="bx bxl-whatsapp"></i>
            {" "}11-4008-5861
          </li>

          <li>
            <i className="bx bx-envelope"></i>
            {" "}ciberseguridad.2023@yahoo.com
          </li>

          <li>
            <i className="bx bxl-discord-alt"></i>
            {" "}Discord
          </li>

        </ul>

      </div>



      <div className="col-md-4">

        <h3 className="footer-subtitle">
          Más información
        </h3>

        <ul>

          <li>
            <a
              href="https://www.argentina.gob.ar/justicia/convosenlaweb/situaciones/phishing"
              target="_blank"
            >
              <i className="bx bx-support"></i>
              {" "}Soporte
            </a>
          </li>

          <li>
            <a
              href="https://aprendeprogramando.bue.edu.ar/"
              target="_blank"
            >
              <i className="bx bx-conversation"></i>
              {" "}Foros
            </a>
          </li>

        </ul>

      </div>

    </div>



    {/* Copyright */}
    <div className="footer-bottom">
      <p>
        &copy; 2026 Phishing Information. Todos los derechos reservados.
      </p>
    </div>

  </div>
</footer>

    </>
  )
}

export default App
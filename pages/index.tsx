import React from "react"
import Head from "../components/head"

export default function Home() {
  const [section, setSection] = React.useState("home")

  return (
    <div className="main">
      <Head>
        <title>Kondo Soft</title>
      </Head>
      <div className="content">
        <div className={`jc ${section !== "home" && "hide"}`}>
          <h1>Tu imaginación es el límite!</h1>

          <h4>Desarrollo a medida...</h4>
          <p>
            Con más de 4 años de experiencia y clientes internacionales, nos
            hemos especializado en desarrollo móvil y web.{" "}
            <a href="#">leer más...</a>
          </p>
          <div className="button-wrapper">
            <a
              className="button button-KS"
              onClick={() => setSection("hire")}
              href="#"
            >
              Contrata hoy
            </a>
            <a
              className="button button-KS"
              onClick={() => setSection("login")}
              href="#"
            >
              Ya soy cliente...
            </a>
            <a
              className="button button-KS"
              href="https://drive.google.com/file/d/1opYqNnTlHE41vsTTPAId2RoLmUPrEWlb/view?usp=sharing"
              target="_new"
            >
              Portafolio...
            </a>
            <a
              className="button button-KS"
              href="https://blog.kondosoft.com"
              target="_new"
            >
              El Blog
            </a>
          </div>
        </div>
        <div className={`jc ${section !== "hire" && "hide"}`}>
          <h1>Contrata alguien!</h1>
          <p>
            En Kondo Soft hemos entrenado a los desarrolladores mas talentosos y
            comprometidos de México, con nuestra metodologia de trabajo haremos
            que tu desarrollo sea exitoso y de excelente calidad.{" "}
            <a href="mailto:hire@kondosoft.com">Contrata hoy!...</a>
          </p>
          <a
            className="button button-KS"
            onClick={() => setSection("home")}
            href="#"
          >
            Regresar
          </a>
        </div>
        <div className={`jc ${section !== "login" && "hide"}`}>
          <h1>Bienvenido de vuelta!</h1>

          <form>
            <div className="row">
              <div className="twelve columns">
                <input
                  className="u-full-width"
                  type="text"
                  placeholder="usuario"
                  id="user"
                />
              </div>
            </div>
            <div className="row">
              <div className="twelve columns">
                <input
                  className="u-full-width"
                  type="password"
                  placeholder="contraseña"
                  id="password"
                />
              </div>
            </div>
            <input className="button-primary" type="submit" value="Ingresar" />
          </form>

          <div className="button-wrapper">
            <a
              className="button button-KS"
              onClick={() => setSection("hire")}
              href="#"
            >
              Contrata hoy
            </a>
            <a
              className="button button-KS"
              onClick={() => setSection("login")}
              href="#"
            >
              Ya soy cliente...
            </a>
            <a
              className="button button-KS"
              href="https://drive.google.com/file/d/1opYqNnTlHE41vsTTPAId2RoLmUPrEWlb/view?usp=sharing"
              target="_new"
            >
              Portafolio...
            </a>
          </div>
        </div>
      </div>

      <div className="logo">
        <div className="logo-image"></div>
      </div>
    </div>
  )
}

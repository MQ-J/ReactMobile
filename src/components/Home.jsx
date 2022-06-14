// para redirecionar
import { useLocation, Link } from "react-router-dom";

// -------------------------------------

// definindo classe Filho como um Componente (isso é um componente de classe)
export default function Home() {

  return (
    <div>

      {/*  Modal de usuário  */}
      <div
        className="modal fade"
        id="modal"
        tabIndex="-1"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">
                Você mesmo
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <p>Seus dados de usuário</p>
              <p>Demais informações</p>
              <p>insira EasterEgg aqui</p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Deslogar
              </button>
              <button type="button" className="btn btn-primary">
                ok
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de navegação */}
      <nav className="navbar navbar-light bg-light justify-content-around mb-2">
        {/* icone de usuário */}
        <button
          className="btn p-2"
          data-bs-toggle="modal"
          data-bs-target="#modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </button>
        <Link className="nav-link link-dark p-2" to="/Home" >
          Home
        </Link>
        <Link className="nav-link link-dark p-2" to="/Respect" >
          Respeito aos pais
        </Link>
        <Link className="nav-link link-dark p-2" to="/StarWars" >
          StarWars
        </Link>
      </nav>

      {/* conteúdo */}
      <div className="d-flex flex-column aligns-items-center justify-content-center w-50 mx-auto">
        <h2 className="text-center pt-3">Página Principal</h2>
        <p className="text-justify">
          Veja bem, este site foi feito em React para servir como exemplo para
          mim em outros projetos. Alguns dos conceitos aplicados foram:
        </p>
        <ul>
          <li>Componentização</li>
          <li>Router, Navigate e Link</li>
          <li>Props e State</li>
          <li>
            Login usando JSON.
            <br />
            (Até fiz web service, mas ele não fica online sempre)
          </li>
        </ul>
      </div>
    </div>
  );
}
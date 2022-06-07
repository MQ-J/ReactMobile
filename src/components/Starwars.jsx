// importando o elemento filho
import Child from "./Child";

// importando aquela coisa de estado
import { useState } from "react";

// para redirecionar
import { Navigate, Link } from "react-router-dom";

// -------------------------------------

export default function StarWars() {
  // definindo data e a função que seta ela, sem valor inicial
  const [data, setData] = useState("");
  const [numb, setNumb] = useState(0);

  // função que define a variável data (set the data, setData, em inglês)
  const parentToChild = () => {
    setNumb(numb + 1);
    setData("Luke " + numb);
  };

  const login = this.props.login;
  if (!login) {
    alert("faça o login");
    return <Navigate to="/" />;
  }

  return (
    <div>
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
        <Link className="nav-link link-dark p-2" to="/Home">
          Home
        </Link>
        <Link className="nav-link link-dark p-2" to="/Respect">
          Respeito aos pais
        </Link>
        <Link className="nav-link link-dark p-2" to="/StarWars">
          StarWars
        </Link>
      </nav>
      <div className="d-flex flex-column aligns-items-center justify-content-center w-50 mx-auto">
        <h2 className="text-center pt-3">Star Wars</h2>
        <p className="text-center">
          Passsando props de um módulo <b>pai</b> para <b>filho</b>
        </p>
      </div>

      {/* área do elemento filho */}
      <div className="d-flex aligns-items-center justify-content-center pt-3">
        <div className="border border-secondary rounded p-2">
          <p>Pai: Dart Vader</p>

          {/* exportando elemento filho, com a variável data como parâmetro do props 'texto' */}
          <Child texto={data} />

          {/* botão que chama função que define a variável data */}
          <div>
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={() => parentToChild()}
            >
              Ver o filho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
// para redirecionar
import { useLocation, Navigate, Link } from "react-router-dom";

// -------------------------------------

// definindo classe Filho como um Componente (isso é um componente de classe)
export default function Home() {
  const location = useLocation();
  const login = location.login;
//   alert(login);
//   if (!login) {
//     alert("faça o login");
//     return <Navigate to="/" />;
//   }

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
        <Link className="nav-link link-dark p-2" to="/Home" login={login}>
          Home
        </Link>
        <Link className="nav-link link-dark p-2" to="/Respect" login={login}>
          Respeito aos pais
        </Link>
        <Link className="nav-link link-dark p-2" to="/StarWars" login={login}>
          StarWars
        </Link>
      </nav>
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
// para redirecionar
import { Link } from "react-router-dom";

export function Navbar() {

    return (
        <>
        {/* Barra de navegação */ }
        < nav className = "navbar justify-content-around mb-2 bg-cadet" >

            {/* icone de usuário */ }
            < button
            className = "btn p-2"
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
            </button >
      
            <Link className="nav-link link-dark p-2" to="/Home" >
            Home
            </Link>
            <Link className="nav-link link-dark p-2" to="/Respect" >
                Respeito aos pais
            </Link>
            <Link className="nav-link link-dark p-2" to="/StarWars" >
                StarWars
            </Link>
        </nav >
        </>
    );
}
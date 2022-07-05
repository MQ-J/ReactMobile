// para redirecionar
import { Link } from "react-router-dom";

// -------------------------------------

export function Navbar(props) {

    // controla o logout
    const url = process.env.NODE_ENV == "development" ? "/" : "/ReactMobile/dist"
    const removeLogin = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("menu")
        location = url
    }

    // apaga a conta atual
    const deleteUser = () => {

        const host = process.env.NODE_ENV == "development" ? "http://127.0.0.1:8000" : "https://polar-shelf-77439.herokuapp.com"

        var formData = new FormData();
        formData.append('name', props.user);

      fetch(
        `${host}/api/ReactMobile/deleteUser`,
        {
          body: new URLSearchParams(formData),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          method: "post",
        }
      ).then((res) => res.json()).then((res) => {

        if (res['status'] == 'ok') {
            alert("tchau")
            removeLogin()

        } else {
          alert(res['message']) // aqui se trata todas as respostas Nok da API
        }
      }
      );
    }

    return (
        <>
            {/*  Modal de usuário  */}
            <div
                className="modal fade"
                id="modal"
                tabIndex="-1"
                aria-labelledby="modalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content bg-gunmetal">

                        <div className="modal-header bg-cadet border-3 border-dark">
                            <h5 className="modal-title" id="modalLabel">
                                {props.user}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div className="modal-body">
                            <ul>
                                <li>Seus dados de usuário</li>
                                <li>Demais informações</li>
                                <li>insirir EasterEgg aqui</li>
                                <li>aqui vai ter muitas informações</li>
                                <li>existem mais avisões no mar do que submarinos no céu</li>
                            </ul>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={deleteUser}
                            >
                                Apagar minha conta
                            </button>
                        </div>

                        <div className="modal-footer border-3 border-dark">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                onClick={removeLogin}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Barra de navegação */}
            < nav className="navbar justify-content-around mb-2 bg-cadet" >

                {/* icone de usuário */}
                < button
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
                </button >

                {/* páginas */}
                <Link className="nav-link link-dark p-2" to={`/${props.user}`}>
                    Home
                </Link>
                <Link className="nav-link link-dark p-2" to={`/${props.user}/Respect`}>
                    Respeito aos pais
                </Link>
                <Link className="nav-link link-dark p-2" to={`/${props.user}/StarWars`}>
                    StarWars
                </Link>
                {localStorage.getItem("menu") ? (
                    <Link className="nav-link link-dark p-2" to={`/${props.user}/${localStorage.getItem("menu")}`}>
                        {localStorage.getItem("menu")}
                    </Link>
                ) : (
                    <span className="d-none">a</span>
                )}
                
            </nav >
        </>
    );
}
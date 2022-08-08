// para redirecionar
import { Link } from "react-router-dom";

// importando aquela coisa de estado
import { useState } from "react";

//carregando
import ClipLoader from "react-spinners/ClipLoader";

// -------------------------------------

export function Navbar(props) {

    //email
    const email = localStorage.getItem("email")

    //versão do site
    const { version: appVersion } = require('/package.json');

    //gif de carregando
    let [loading, setLoading] = useState(false);

    // controla o logout
    const url = process.env.NODE_ENV == "development" ? "/" : "/ReactMobile/dist"
    const removeLogin = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("menu")
        localStorage.removeItem("email")
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

    //cria menu
    const addMenu = (event) => {

        setLoading(true)
    
        const url = process.env.NODE_ENV == "development" ? "http://127.0.0.1:8000" : "https://polar-shelf-77439.herokuapp.com"
    
        fetch(
        `${url}/api/ReactMobile/newMenu`,
        {
            body: new URLSearchParams(new FormData(event.target)),
            headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            },
            method: "post",
        }
        ).then((res) => res.json()).then((res) => {

            if (res['status'] == 'ok') {
                setLoading(false)
                removeLogin()
            } else {
                setLoading(false)
                alert("não consegui criar, desculpa")
            }
        }
        );
    
        event.preventDefault();
      };

    return (
        <>
            {/*  Modal de usuário  */}
            <div
                className="modal fade"
                id="modalUser"
                tabIndex="-1"
                aria-labelledby="modalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content bg-gunmetal">

                        <div className="modal-header bg-cadet border-3 border-dark">
                            <h5 className="modal-title" id="modalLabel">
                                Configurações
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <div className="modal-body">
                            <h5>Informações pessoais</h5>
                            <ul>
                                <li><b>Usuário: </b>{props.user}</li>
                                <li><b>Email: </b>{email}</li>
                            </ul>
                            <hr />
                            <h5>Sobre este site</h5>
                            <ul>
                                <li>Código fonte: <a className="btn btn-outline-success p-0" role="button" href="https://github.com/MQ-J/ReactMobile">ReactMobile</a> </li>
                                <li>Versão: {appVersion}</li>
                                <li>Desenvolvedor: <a className="btn btn-outline-success p-0" role="button" href="https://github.com/MQ-J">MQJ</a> </li>
                            </ul>
                            <hr />
                            <h5>Apagar minha conta</h5>
                            <p>Tenha em mente que isso apagará <b>todas as suas anotações</b>, junto com seu email, senha e usuário.</p>
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

            {/*  Modal de menu  */}
            <div
                className="modal fade"
                id="modalMenu"
                tabIndex="-1"
                aria-labelledby="modalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content bg-gunmetal">

                        <div className="modal-header bg-cadet border-3 border-dark">
                            <h5 className="modal-title">
                                Criar tópico
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        <form onSubmit={addMenu}>

                            <div className="modal-body">
                                <div className="input-group d-flex justify-content-around align-items-center w-75">
                                    <label htmlFor="nome">Nome:</label>
                                    <input
                                        type="text"
                                        name="nome"
                                        className="form-control m-1 w-50"
                                        required
                                    />
                                </div>
                                <input
                                    type="text"
                                    name="user"
                                    value={props.user}
                                    readOnly
                                    hidden
                                />
                                <input
                                    type="text"
                                    name="code"
                                    value={Math.random().toString(32).substr(2, 9)}
                                    readOnly
                                    hidden
                                />
                                
                                <div className="pt-2">Será necessário logar novamente após criar um novo tópico</div>
                            </div>

                            <div className="modal-footer border-3 border-dark gap-2">

                                <button type="submit" className="btn text-white bg-orange">
                                    {loading ? (
                                        <ClipLoader color={"#ffffff"} loading={loading} cssOverride={{display: "block", margin: "0 auto"}} size={20} />
                                    ) : (
                                        "Criar"
                                    )}
                                </button>

                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Voltar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Barra de navegação */}
            < nav className="navbar justify-content-around mb-2 bg-cadet" >

                {/* icone de usuário */}
                < button
                    className="btn p-2"
                    data-bs-toggle="modal"
                    data-bs-target="#modalUser"
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
                {/* <Link className="nav-link link-dark p-2" to={`/${props.user}/Respect`}>
                    Respeito aos pais
                </Link> */}
                <Link className="nav-link link-dark p-2" to={`/${props.user}/StarWars`}>
                    StarWars
                </Link>
                {localStorage.getItem("menu").split(" ").map(menu => {
                    if (menu != "")
                        return (<Link className="nav-link link-dark p-2" to={`/${props.user}/${menu}`}>
                            {menu}
                        </Link>)
                })}
                <button
                    className="btn btn-outline-success btn-sm rounded-circle"
                    data-bs-toggle="modal"
                    data-bs-target="#modalMenu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                </button>

            </nav >
        </>
    );
}
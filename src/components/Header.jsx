// para o sistema de rotas
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Respect from "./Respect";
import StarWars from "./Starwars";

export function Header() {
    return (
        <>
            {/* Controlador de rotas em formato de navbar */}
            <Router>
                {/*  Modal  */}
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

                {/* Páginas que as rotas trazem */}
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Respect" element={<Respect />} />
                    <Route path="/StarWars" element={<StarWars />} />
                </Routes>
            </Router>
        </>
    )
}

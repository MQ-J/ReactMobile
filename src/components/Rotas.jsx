// para o sistema de rotas
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// módulos
import Home from "./Home";
import Login from "./Login";
import Respect from "./Respect";
import StarWars from "./Starwars";

// -------------------------------------

export function Rotas() {
    
    let basename = process.env.NODE_ENV == "development" ? "" : "/ReactMobile/dist"

    return (
        <>
            {/* Controlador de rotas */}
            <Router basename={basename}>

                {/* Páginas que as rotas trazem */}
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/:user" element={<Home />} />
                    <Route path="/:user/Respect" element={<Respect />} />
                    <Route path="/:user/StarWars" element={<StarWars />} />
                </Routes>
            </Router>
        </>
    )
}

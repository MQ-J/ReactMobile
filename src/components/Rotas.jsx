// para o sistema de rotas
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Respect from "./Respect";
import StarWars from "./Starwars";

export function Rotas() {
    
    let basename = process.env.NODE_ENV == "development" ? "" : "/ReactMobile/dist"

    return (
        <>
            {/* Controlador de rotas */}
            <Router basename={basename}>

                {/* Páginas que as rotas trazem */}
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Respect" element={<Respect />} />
                    <Route path="/StarWars" element={<StarWars />} />
                    <Route path="/:user" element={<Home />} />
                </Routes>
            </Router>
        </>
    )
}

// para o sistema de rotas
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// módulos
import Home from "./components/Home";
import Login from "./components/Login";
import Respect from "./components/Respect";
import StarWars from "./components/Starwars";
import Menu from "./components/Menu";
import { Footer } from "./components/Footer";


export function App() {

  const basename = process.env.NODE_ENV == "development" ? "" : "/ReactMobile/dist"

  return(
    <div>

      {/* Controlador de rotas */}
      <Router basename={basename}>

        {/* Páginas que as rotas trazem */}
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/:user" element={<Home />} />
            <Route path="/:user/Respect" element={<Respect />} />
            <Route path="/:user/StarWars" element={<StarWars />} />
            <Route path="/:user/:menu" element={<Menu />} />
        </Routes>
      </Router>

      {/* <Footer /> */}
    </div>
  )
}

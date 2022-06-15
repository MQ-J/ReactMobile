// modulo filho
import RespectChild from "./RespectChild";

// importando aquela coisa de estado
import { useState } from "react";

// para redirecionar
import { Navigate, Link } from "react-router-dom";
import { Navbar } from "./Navbar";

// -------------------------------------

// definindo classe Filho como um Componente (isso é um componente de classe)
export default function Respect() {
  // um estado do elemento pai
  const [state, setState] = useState("");

  //  função que muda o estado do pai
  const acessaEstadoPai = (valorDoFilho) => {
    setState("Deus te abençõe meu filho.");
  };

  // const login = this.props.login;
  const login = true;
  if (!login) {
    alert("faça o login");
    return <Navigate to="/" />;
  }

  return (
    <div>
      
      <Navbar />

      <div className="d-flex flex-column aligns-items-center justify-content-center w-50 mx-auto">
        <h2 className="text-center pt-3">Benção</h2>
        <p className="text-center">
          Passsando props de um módulo <b>filho</b> para o <b>pai</b>
        </p>
      </div>

      <div className="d-flex aligns-items-center justify-content-center pt-3">
        <div className="border border-secondary rounded p-2">
          <p className="mb-1 text-center">Pai: {state} </p>

          {/* exportando elemento filho, com função do pai data como parâmetro */}
          <RespectChild funcaoDoPai={acessaEstadoPai} />
        </div>
      </div>
    </div>
  );
}
import { Navbar } from "./Navbar";

// -------------------------------------

// definindo classe Filho como um Componente (isso é um componente de classe)
export default function Home() {

  return (
    <div>

      <Navbar />

      {/* conteúdo */}
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
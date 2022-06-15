import { Navbar } from "./Navbar";

// -------------------------------------

// definindo classe Filho como um Componente (isso é um componente de classe)
export default function Home() {

  return (
    <div>

      {/*  Modal de usuário  */}
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
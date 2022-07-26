// importando aquela coisa de estado
import { useState, useEffect } from "react";

// para redirecionar
import { useNavigate } from "react-router-dom";

// -------------------------------------

export default function Login() {

  // para acessar módulo Home
  const navigate = useNavigate();

  // caso já tenha login, vai pro home
  localStorage.getItem("user") ?
    useEffect(() => {
      navigate(localStorage.getItem("user"))
    }, [])
    : console.log("faça o login")

  // className da msg de login incorreto
  const [loginError, setLoginError] = useState("d-none");

  // FUNÇÃO PARA FAZER LOGIN
  const auth = (event) => {

    const url = process.env.NODE_ENV == "development" ? "http://127.0.0.1:8000" : "https://polar-shelf-77439.herokuapp.com"

    fetch(
      `${url}/api/ReactMobile/login`,
      {
        body: new URLSearchParams(new FormData(event.target)),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "post",
      }
    ).then((res) => res.json()).then((res) => {

      if (res['status'] == 'ok') {
        localStorage.setItem("user", event.target.name.value)
        localStorage.setItem("email", res['email'])
        localStorage.setItem("menu", res['menu'])
        navigate(event.target.name.value)
      } else {
        setLoginError("alert alert-danger")
      }
    }
    );

    event.preventDefault();
  };

  return (
    <div>

      <NewUserModal />

      <div className="d-flex flex-column aligns-items-center justify-content-center w-50 mx-auto">
        <h2 className="text-center pt-3">Entre na sua conta</h2>
        <div className="d-flex flex-column aligns-items-center justify-content-center pt-3 gap-3">

          {/* caixa do login */}
          <div className="border border-secondary rounded p-2 bg-cadet">

            <div className={loginError} role="alert">Login Incorreto</div>

            <Form auth={auth} />
          </div>

          {/* Novo usuário */}
          <div className="d-flex justify-content-between border border-secondary rounded p-2 bg-cadet">
            <div className="w-50">Primeira vez aqui?</div>
            <button type="button" className="btn text-white bg-orange" data-bs-toggle="modal" data-bs-target="#newUserModal">
              Criar conta
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

function NewUserModal() {

  // className da msg de login incorreto
  const [newUserError, setNewUserError] = useState(["d-none", "a"]);

  // FUNÇÃO PARA CRIAR USUÁRIO
  const newUser = (event) => {

    if (event.target.pwd.value === event.target.pwd2.value) {

      const url = process.env.NODE_ENV == "development" ? "http://127.0.0.1:8000" : "https://polar-shelf-77439.herokuapp.com"

      fetch(
        `${url}/api/ReactMobile/newUser`,
        {
          body: new URLSearchParams(new FormData(event.target)),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          method: "post",
        }
      ).then((res) => res.json()).then((res) => {

        if (res['status'] == 'ok') {
          localStorage.setItem("user", event.target.name.value)
          localStorage.setItem("menu", 'tarefas')
          location.reload()
        } else {
          setNewUserError(["d-inline-block alert alert-danger w-75", res['message']]) // aqui se trata todas as respostas Nok da API
        }
      }
      );

    } else {
      setNewUserError(["d-inline-block alert alert-danger w-75", "dados inválidos"])
    }

    event.preventDefault();
  };

  return (
    <div className="modal fade" id="newUserModal" tabIndex="-1" aria-labelledby="modal de novo usuário" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content bg-gunmetal">
          <div className="modal-header bg-cadet border-3 border-dark">
            <h5 className="modal-title">Novo Usuário</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body m-3">
            <Form newUser={newUser} />
          </div>
          <div className="d-flex justify-content-between modal-footer border-3 border-dark">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <div className={newUserError[0]} role="alert">{newUserError[1]}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Form(props) {
  return (
    <form onSubmit={props.auth ? props.auth : props.newUser}>

      <div className="input-group d-flex justify-content-around align-items-center">
        <label htmlFor="name">Usuário:</label>
        <input
          type="text"
          name="name"
          className="form-control m-1 w-50"
          required
        />
      </div>

      <div className="input-group d-flex justify-content-around align-items-center">
        <label htmlFor="pwd">Senha:</label>
        <input
          type="password"
          name="pwd"
          className="form-control m-1 w-50"
          required
        />
      </div>

      {props.auth ? "" :
        <>
        <div className="input-group d-flex justify-content-around align-items-center">
          <label htmlFor="pwd2">Confirmar senha</label>
          <input
            type="password"
            name="pwd2"
            className="form-control m-1 w-50"
            required
          />
        </div>
        <div className="input-group d-flex justify-content-around align-items-center">
          <label htmlFor="pwd2">Email</label>
          <input
            type="email"
            name="email"
            className="form-control m-1 w-50"
            required
          />
      </div>
      </>
      }

      <div className="d-flex flex-column justify-content-center mx-auto w-50 mt-2">
        <button type="submit" className="btn text-white bg-orange">
          {props.auth ? "login" : "Criar usuário"}
        </button>
      </div>
    </form>
  )
}

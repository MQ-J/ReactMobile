// importando aquela coisa de estado
import { useState } from "react";

// para redirecionar
import { useNavigate } from "react-router-dom";

// -------------------------------------

export default function Login() {
  
  // usuário que irá logar
  const [users, setUsers] = useState("");

  // className da msg de login incorreto
  const [loginError, setLoginError] = useState("d-none");

  // para acessar módulo Home
  const navigate = useNavigate();


  // BUSCA USUÁRIOS VÁLIDOS EM JSON
  if (users == "") {
    fetch(
      "https://raw.githubusercontent.com/MQ-J/ReactMobile/main/dist/user.json",
      {
        headers: {
          Accept: "application/json"
        }
    }).then((res) => res.json()).then((res) => setUsers(res.users));
  }

  // FUNÇÃO PARA FAZER LOGIN
  const auth = (event) => {

    let user = event.target.user.value;
    let pwd = event.target.password.value;

    users.map((u) => {
      if (user === u.name && pwd === u.pwd)
        navigate("home")
    })
    setLoginError("alert alert-danger")

    event.preventDefault();
  };

  return (
    <div>
      <div className="d-flex flex-column aligns-items-center justify-content-center w-50 mx-auto">
        <h2 className="text-center pt-3">Entre na sua conta</h2>
        <div className="d-flex aligns-items-center justify-content-center pt-3">

          {/* caixa do login */}
          <div className="border border-secondary rounded p-2">

            <div className={loginError} role="alert">Login Incorreto</div>

            <form onSubmit={auth}>

              <div className="input-group d-flex justify-content-around align-items-center">
                <label htmlFor="user">Usuário:</label>
                <input
                  type="text"
                  name="user"
                  id="user"
                  placeholder="Querino"
                  className="form-control m-1 w-50"
                />
              </div>
              
              <div className="input-group d-flex justify-content-around align-items-center">
                <label htmlFor="password">Senha:</label>
                <input
                  type="password"
                  name="password"
                  placeholder="123"
                  className="form-control m-1 w-50"
                />
              </div>

              <div className="d-flex flex-column justify-content-center mx-auto w-50 mt-2">
                <button type="submit" className="btn btn-outline-dark">
                  Login
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

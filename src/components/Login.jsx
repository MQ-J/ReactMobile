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
    },[])
  : console.log("faça o login")

  // usuário que irá logar
  let users = ""

  // className da msg de login incorreto
  const [loginError, setLoginError] = useState("d-none");

  // FUNÇÃO PARA FAZER LOGIN
  const auth = (event) => {

    fetch(
      "https://polar-shelf-77439.herokuapp.com/api/ReactMobile/login",
      {
        body: new URLSearchParams(new FormData(event.target)),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "post",
      }
    ).then((res) => res.json()).then((res) => {
        
        if(res['status'] == 'ok') {
          localStorage.setItem("user", event.target.name.value)
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
      <div className="d-flex flex-column aligns-items-center justify-content-center w-50 mx-auto">
        <h2 className="text-center pt-3">Entre na sua conta</h2>
        <div className="d-flex aligns-items-center justify-content-center pt-3">

          {/* caixa do login */}
          <div className="border border-secondary rounded p-2 bg-cadet">

            <div className={loginError} role="alert">Login Incorreto</div>

            <form id="loginForm" onSubmit={auth}>

              <div className="input-group d-flex justify-content-around align-items-center">
                <label htmlFor="user">Usuário:</label>
                <input
                  type="text"
                  name="name"
                  id="user"
                  placeholder="Querino"
                  className="form-control m-1 w-50"
                />
              </div>
              
              <div className="input-group d-flex justify-content-around align-items-center">
                <label htmlFor="password">Senha:</label>
                <input
                  type="password"
                  name="pwd"
                  placeholder="123"
                  className="form-control m-1 w-50"
                />
              </div>

              <div className="d-flex flex-column justify-content-center mx-auto w-50 mt-2">
                <button type="submit" className="btn text-white bg-orange">
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

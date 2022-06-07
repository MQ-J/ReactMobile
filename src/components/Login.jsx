// importando aquela coisa de estado
import { useState } from "react";

// para redirecionar
import { useNavigate } from "react-router-dom";

// -------------------------------------

export default function Login() {
  const [users, setUsers] = useState("");
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  // fetch("https://UnusualDizzyCron.mqj.repl.co", {
  fetch(
    "https://raw.githubusercontent.com/MQ-J/ReactMobile/main/dist/user.json",
    {
      headers: {
        Accept: "application/json"
      }
    })
    .then((res) => res.json())
    .then((res) => setUsers(res));

  const auth = (event) => {
    let user = event.target.user.value;
    let pwd = event.target.password.value;

    if (user === users.name && pwd === users.pwd) {
      setLogin(true);
      if (login) {
        navigate("/home", { login: "a" });
      }
      event.preventDefault();
    }
  };

  return (
    <div>
      <div className="d-flex flex-column aligns-items-center justify-content-center w-50 mx-auto">
        <h2 className="text-center pt-3">Entre na sua conta</h2>
        <div className="d-flex aligns-items-center justify-content-center pt-3">
          <div className="border border-secondary rounded p-2">
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
                {/* <a className="btn btn-primary" href="/home">Login</a> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

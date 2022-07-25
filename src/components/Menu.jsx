// para redirecionar
import { Navbar } from "./Navbar";
import { useParams } from 'react-router-dom';
import { useState } from "react";
import "regenerator-runtime" //para async e wait funcionarem

//icone bootstrap
import "bootstrap-icons/font/bootstrap-icons.css";

// -------------------------------------

// definindo classe Filho como um Componente (isso é um componente de classe)
export default function Menu() {

  // parâmetro da URL
  const {user} = useParams();

  // bloco em estado inicial
  const [numBlocos, setNumblocos] = useState([])

  async function getBlocos(user) {

    const host = process.env.NODE_ENV == "development" ? "http://127.0.0.1:8000" : "https://polar-shelf-77439.herokuapp.com"
  
    var formData = new FormData()
    formData.append('name', user)
  
    const response = await fetch(
      `${host}/api/ReactMobile/getBlocos`,
      {
        body: new URLSearchParams(formData),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "post",
      }
    );
    
    const data = await response.json();
    setNumblocos(data.blocos)
  }

  if(!numBlocos.length){ 
    getBlocos(user)
  }

  // adiciona blocos
  const addBloco = () => {
    let bloco = {code: Math.random().toString(32).substr(2,9), title: "titulo", "text": "texto"}
    setNumblocos(prevbloco => [bloco, ...prevbloco])
  }

  // atualiza blocos existentes
  function attBloco(event) {

    // verifica se vai mudar o título ou texto
    let type = event.target.outerHTML.substring(1, 6) == "input" ? "title" : "text"

    // cópia do state dos blocos
    let bloco = numBlocos

    // procura o bloco referente na cópia e edita
    for(var i = 0; i < bloco.length; i++)
    {
      if(bloco[i].code == event.target.name)
      {
        if(type == "title") {
          bloco[i].title = event.target.value
        }
        if(type == "text") {
          bloco[i].text = event.target.value
        }

        // altera o state dos blocos
        setNumblocos(() => bloco)
      }
    }
  }

  //sincroniza com o banco
  const DB = (event) => {

    event.preventDefault();

    const host = process.env.NODE_ENV == "development" ? "http://127.0.0.1:8000" : "https://polar-shelf-77439.herokuapp.com"
  
    var formData = new FormData()
    formData.append('name', user)
    formData.append('menu', localStorage.getItem("menu"))
    formData.append('code', event.target.code.value)
    formData.append('title', event.target.title.value)
    formData.append('text', event.target.texto.value)

    fetch(
      `${host}/api/ReactMobile/updateBlocos`,
      {
        body: new URLSearchParams(formData),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "post",
      }
      ).then((res) => res.json()).then((res) => {

        if (res['status'] == 'ok') {
          console.log(res['blocos'])
          alert("O bloco " + event.target.title.value + " foi salvo")
        } else {
          console.log("erro")
          alert("erro ao salvar, contate o desenvolvedor")
        }
      }
    )
  }

  const deleteBloco = (code) => {
    
    const host = process.env.NODE_ENV == "development" ? "http://127.0.0.1:8000" : "https://polar-shelf-77439.herokuapp.com"
  
    var formData = new FormData()
    formData.append('name', user)
    formData.append('code', code)

    fetch(
      `${host}/api/ReactMobile/deleteBloco`,
      {
        body: new URLSearchParams(formData),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "post",
      }
      ).then((res) => res.json()).then((res) => {

        if (res['status'] == 'ok') {
          alert("Bloco apagado")
          setNumblocos([]) // zera os blocos para que o código busque de novo no banco
        } else {
          console.log("deleteBloco nao foi ok")
          alert("erro ao apagar o bloco, contate o desenvolvedor")
        }
      }
    )
  }

  return (
    <div>

      <Navbar user={user}/>

      {/* conteúdo */}
      <div className="d-flex flex-column aligns-items-center justify-content-center w-50 mx-auto">
        <h2 className="text-center pt-3">{localStorage.getItem("menu")}</h2>
        <div>
          <button type="button" className="btn btn-sm bg-cadet" onClick={addBloco}>Adicionar bloco</button>
        </div>
        {numBlocos.map((bloco) => 
          <div key={bloco.code} id={bloco.code} className="bg-dark w-100 mx-auto rounded my-3">
            <form onSubmit={DB}>
              <input 
                className="form-control bg-dark fw-bold text-white border-0" 
                name="title"
                defaultValue={bloco.title} 
                onChange={event => attBloco(event)} 
              />
              <textarea 
                className="form-control bg-dark fw-light text-white border-0" 
                rows="3" 
                name="texto"
                defaultValue={bloco.text} 
                onChange={event => attBloco(event)}>
              </textarea>
              <input value={bloco.code} name="code" readOnly hidden/>

              <div className="d-flex justify-content-end gap-3 p-2">
                <button className="btn-success btn-sm rounded-circle" type="submit" style={{backgroundColor: '#212529'}}><i className="bi bi-check-circle text-success"></i></button>
                <button className="btn-danger btn-sm rounded-circle" type="button" onClick={() => deleteBloco(bloco.code)} style={{backgroundColor: '#212529'}}><i className="bi bi-dash-circle text-danger"></i></button>              
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
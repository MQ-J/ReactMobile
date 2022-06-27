// para redirecionar
import { Navbar } from "./Navbar";
import { useParams } from 'react-router-dom';
import { useState } from "react";

// -------------------------------------

// definindo classe Filho como um Componente (isso é um componente de classe)
export default function Menu() {

  // parâmetro da URL
  const {user} = useParams();

  // blocos em estado inicial
  const [numBlocos, setNumblocos] = useState([
    {id: Math.random().toString(32).substr(2,9), title: "titulo", text: "texto"}
  ]) 

  // adiciona blocos
  const addBloco = () => {
    let bloco = {id: Math.random().toString(32).substr(2,9), title: "titulo", "text": "texto"}
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
      if(bloco[i].id == event.target.name)
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
          <div key={bloco.id} id={bloco.id} className="bg-dark w-100 mx-auto rounded my-3">
            <input 
              className="form-control bg-dark fw-bold text-white border-0" 
              name={bloco.id} 
              placeholder={bloco.title} 
              onChange={event => attBloco(event)} 
            />
            <textarea 
              className="form-control bg-dark fw-light text-white border-0" 
              rows="3" 
              name={bloco.id} 
              placeholder={bloco.text} 
              onChange={event => attBloco(event)}>
            </textarea>
          </div>
        )}
      </div>
    </div>
  );
}
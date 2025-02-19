import {useForm} from "react-hook-form";
import ClassCard from "./components/classCard";
import IClass from "./interfaces/IClass";


function App() {
  const {register, handleSubmit, formState: {errors}} = useForm<IClass>

function onSubmit(dados: IClass) {
  console.log(dados);
}


  return (
    <>
    <header>
      <h1>ola mundo</h1>
      <a href="/">Turmas</a>
      <a href="/">Criar turma</a>
    </header>
    <main>
      {/* {
       Salas.map(sala => (
          <ClassCard Sala=
          {sala}/>
        ))
      } */}

      <form onSubmit={handleSubmit (onSubmit)}>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" {...register( required: "Nome obrigatorio")}/>
        {errors.name && <p>{errors.name.menssage}</p>}
        <br />

        <label htmlFor="class">sala</label>
        <select id="class">
          <option selected disabled></option>
          <option value="1">lab. 1</option>
          <option value="2">lab. 2</option>
          <option value="3">lab. 3</option>
          <option value="4">lab. 4</option>
        </select>
        <br />

        <label htmlFor="date">Data:</label>
        
        <select id="date">
          <option selected disabled></option>
          <option value="Seg">Segunda-feira</option>
          <option value="Qua">Quarta-feira</option>
          <option value="Qui">Quinta-feira</option>
          <option value="sex">Sexta-feira</option>
        </select>
        <br />

        <label htmlFor="hour">Hora:</label>
        <input type="time" id="hour"/>

        <button>Enviar</button>
      </form>
    </main>
    </>
  )
}

export default App


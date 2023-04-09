import { useForm } from "../Hooks/useForm"

export const TodoAdd = ({onNewTodo}) => {
  const { description, onInputChange, onResetForm} = useForm({description:'' });
  
  const onSubmit = (event) => {
    event.preventDefault();
    if( description.length<=1) return;
    const newTodo = {
      id:new Date().getTime(),
      done:false,
      description:description,
    }
    onNewTodo(newTodo);
    onResetForm()
  }


  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        placeholder="¿Agregar tarea?"
        className="form-control"
        name="description"
        value={description}
        onChange={ onInputChange }
      />
      <button type="submit" className="btn btn-primary mt-2">
        Agregar
      </button>
    </form>
  )
}

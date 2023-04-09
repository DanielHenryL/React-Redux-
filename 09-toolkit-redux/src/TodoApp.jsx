import { useState } from "react"
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis"

export const TodoApp = () => {
  // const {isLoading, data=[]} = useGetTodosQuery()
  const [todoId, setTodoId] = useState(1)
  const {isLoading, data=[]} = useGetTodoQuery(todoId)
  return (
    <>
        <h1>Todos - RTK Query</h1>
        <hr />
        <h4>isLoading: { isLoading ? 'True': 'False'}</h4>

        <pre>{ JSON.stringify(data)}</pre>
        <button onClick={()=>setTodoId(todoId+1)}>
            Next todo
        </button>
        <button onClick={()=>setTodoId(todoId-1)}>
            Prev todo
        </button>
        {/* <ul>
          {
            data.map( todo => (
              <li key={todo.id}>
                <strong>{todo.completed ? 'Done':'Pending'}:</strong>
                { todo.title }
              </li>
            ))
          }
        </ul> */}
        
    </>
  )
}

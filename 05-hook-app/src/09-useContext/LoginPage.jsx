import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {
  const {user, setUser} = useContext(UserContext)
    return (
      <>
          <h1>LoginPage</h1>
          <hr />
          {
            <pre>
              {JSON.stringify(user,null, 3)}
            </pre>
          }
          <button onClick={()=>setUser({ id:123, name:'Daniel', email:'daniel@gmail.com'})} className="btn btn-primary">
            Estableser usuario
          </button>
      
      </>
    )
}
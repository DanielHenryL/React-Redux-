import { UserProvider } from "./context/UserProvider"
import {Outlet} from "react-router-dom"
import { Navbar } from "./Navbar"

export const MainApp = () => {
  return (
    <UserProvider>
        <Navbar/>
        <h1>MainApp</h1>
        <hr />
        <div>
          <Outlet/>
        </div>
    </UserProvider>
  )
}

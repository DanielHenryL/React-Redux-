import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
  } from "react-router-dom";
import { AuthRoutes, children } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui";
import { useCheckAuth } from "../hooks";

  const router = createBrowserRouter([
    {
      path: "/auth/*",
      element: <AuthRoutes/>,
      children: children
    },
    {
      path: "/",
      element: <JournalRoutes/>,
    },
    {
      path: "/*",
      element: <Navigate to={'/auth/login'}/>,
    },
    
  ]);


export const AppRouter = () => {
  const { status }=useCheckAuth()
  

  if(status==='checking'){
    return <CheckingAuth/>
  } 

  return (
    
    <RouterProvider router={router} />
    
  )
}

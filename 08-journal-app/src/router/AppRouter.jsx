import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
  } from "react-router-dom";
import { AuthRoutes, children } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";


  const router = createBrowserRouter([
    {
      path: "/auth/*",
      element: <AuthRoutes/>,
      children: children
    },
    {
      path: "/",
      element: <JournalRoutes/>,
      children:[
        {
          path: "/*",
          element: <Navigate to={'/'}/>,
        },
      ]
    },
    
    

  ]);



export const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}

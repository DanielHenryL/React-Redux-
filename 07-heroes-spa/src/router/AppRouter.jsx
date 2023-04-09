import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
  } from "react-router-dom";
import { DCPage,MarvelPage, HeroPage, HeroesRouter,SearchPage } from "../heroes";
import { LoginPage } from "../Auth/pages/LoginPage";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRouter } from "./PublicRouter";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoute><HeroesRouter/></PrivateRoute>,
      children:[
        {
          path: "dc",
          element: <DCPage/>,
        },
        {
          path: "marvel",
          element: <MarvelPage/>,
        },
        {
          path: "search",
          element: <SearchPage/>,
        },
        {
          path: "hero/:id",
          element: <HeroPage/>,
        },
        {
          path: "/*",
          element: <Navigate to={'/marvel'}/>,
        },
        
      ]
    },
    {
      path: "login",
      element: <PublicRouter><LoginPage/></PublicRouter>,
    },
  ]);
  

export const AppRouter = () => {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

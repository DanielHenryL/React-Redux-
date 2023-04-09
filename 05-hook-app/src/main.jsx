import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
// import { TodoApp } from './08-useReducer/TodoApp'
// import { Padre } from './07-tarea-memo/Padre'
// import { CallBackHook } from './06-memos/CallBackHook'
// import { MemoHook } from './06-memos/MemoHook'
// import { Memorize } from './06-memos/Memorize'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { CounterApp } from './01-useState/CounterApp'
// import { HookApp } from './HookApp'
// import './08-useReducer/intro-reduder'
import { MainApp } from './09-useContext/MainApp'
import './styles.css'
import { HomePage } from './09-useContext/HomePage';
import { AboutPage } from './09-useContext/AboutPage';
import { LoginPage } from './09-useContext/LoginPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp/>,
    children:[
      {
        path:'/',
        element:<HomePage/>,
      },
      {
        path:'/about',
        element:<AboutPage/>,
      },
      {
        path:'/login',
        element:<LoginPage/>,
      },
      {
        path:'/*',
        element:<Navigate to='/login'/>,
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
)

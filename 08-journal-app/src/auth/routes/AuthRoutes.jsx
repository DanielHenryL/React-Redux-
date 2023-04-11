import { Navigate, Outlet } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../pages'
import { useSelector } from 'react-redux';


export const children = [
    {
        path: "login",
        element: <LoginPage/>,
    },
    {
        path: "register",
        element: <RegisterPage/>,
    },
    {
        path: "*",
        element: <Navigate to={'/auth/login'}/>,
    },
]


export const AuthRoutes = () => {
    const { status } = useSelector(state => state.auth);
  return (
    <>
        {
            (status ==='not-authenticated') ? <Outlet /> : <Navigate to={'/'}/>
        }
        
    </>
  )
}

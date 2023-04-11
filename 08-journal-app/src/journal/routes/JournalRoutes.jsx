import { useSelector } from "react-redux";
import { JournalPage } from "../pages/JournalPage"
import { Navigate } from "react-router-dom";

export const JournalRoutes = () => {
  const { status } = useSelector(state => state.auth);

  return (
    <>
      {
        (status==='authenticated') ? <JournalPage />: <Navigate to={'/auth/login'}/>
      }
    </>
  )
}

import { Outlet } from "react-router-dom"
import { JournalPage } from "../pages/JournalPage"

export const JournalRoutes = () => {
  return (
    <>
      <JournalPage />
      <Outlet/>
    </>
  )
}

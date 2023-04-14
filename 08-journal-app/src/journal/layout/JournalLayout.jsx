import { Box, Toolbar } from "@mui/material"
import { Navbar, SiderBar } from "../components/";
import { useEffect } from "react";
import Swal from "sweetalert2"
import { useSelector } from "react-redux";

const drawedWidth = 240;


export const JournalLayout = ({ children }) => {

    const { messageSaved } = useSelector( state => state.journal)
    const  icon = messageSaved.includes('actualizada') ? 'success':'error'
    useEffect(() => {
        if( messageSaved.length>0)
        Swal.fire({
          title:messageSaved,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
          icon
      })
        
      }, [messageSaved])
  return (
    <Box sx={{ display:'flex'}} className='animate__animated animate__fadeIn animate__faster'>
        <Navbar drawedWidth={drawedWidth}/>
        <SiderBar drawedWidth={drawedWidth}/>
        
        <Box 
            component={'main'}
            sx={{ flexGrow: 1, p:3}}
        >
            <Toolbar/>
            {children}
        </Box>
    </Box>
    )
}

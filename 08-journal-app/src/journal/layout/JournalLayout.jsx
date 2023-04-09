import { Box, Toolbar } from "@mui/material"
import { Navbar, SiderBar } from "../components/";


const drawedWidth = 240;


export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display:'flex'}}>
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

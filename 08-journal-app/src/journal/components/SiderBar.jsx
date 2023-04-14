import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { SiderBarItem } from "./"

export const SiderBar = ({drawedWidth = 204}) => {
  
  const {displayName} = useSelector(state=>state.auth)
  const { notes } = useSelector(state=>state.journal)
  

  return (
    <Box
        component={'nav'}
        sx={{width:{ sm: drawedWidth}, flexShrink:{sm:0}}}
    >
        <Drawer
            variant="permanent" // temporary
            open
            sx={{
                display:{ xs:'block' },
                '& .MuiDrawer-paper':{ boxSizing:'border-box', width:drawedWidth}
            }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component={'div'}>
                    {displayName}
                </Typography>
            </Toolbar>
            <Divider/>

            <List>
                {
                    notes.map( note => (
                        <SiderBarItem key={note.id} {...note}/>
                    ))
                }
            </List>

        </Drawer>


    </Box>
  )
}

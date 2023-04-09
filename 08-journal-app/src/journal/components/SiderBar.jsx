import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const SiderBar = ({drawedWidth = 204}) => {
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
                    Henry Daniel
                </Typography>
            </Toolbar>
            <Divider/>

            <List>
                {
                    ['Enero','Febrero','Marzo','Abril'].map( text => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary = {text}/>
                                    <ListItemText secondary={'loren ayuda a muchos de nosotros  '}/>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>


    </Box>
  )
}

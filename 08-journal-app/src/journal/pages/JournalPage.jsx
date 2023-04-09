import { AddOutlined } from "@mui/icons-material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views"
import { NothingSelectedView } from "../views/NothingSelectedView"
import {IconButton} from '@mui/material'


export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias soluta cupiditate minus atque dolorem quia, pariatur nobis quis officiis necessitatibus autem libero consequuntur molestias repellat illo quasi itaque impedit! Alias?</Typography> */}
      
      <NothingSelectedView/>
      {/* <NoteView/> */}
      <IconButton 
        size="large"
        sx={{
          color:'white',
          backgroundColor:'error.main',
          ':hover':{ backgroundColor: 'error.main', opacity:0.9},
          position:'fixed',
          right:50,
          bottom:50,
        }}
      >
        <AddOutlined sx={{fontSize:30}}/>
      </IconButton>
    </JournalLayout>
  )
}

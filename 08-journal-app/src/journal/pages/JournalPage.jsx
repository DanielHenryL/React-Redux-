import { AddOutlined } from "@mui/icons-material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views/NothingSelectedView"
import {IconButton} from '@mui/material'
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../store/journal"
import { NoteView } from "../views/NoteView"


export const JournalPage = () => {
  const {isSaving, active} = useSelector( state => state.journal )
  const dispatch = useDispatch()
  const onsubmit = () =>{ 
    dispatch(startNewNote())
  }
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias soluta cupiditate minus atque dolorem quia, pariatur nobis quis officiis necessitatibus autem libero consequuntur molestias repellat illo quasi itaque impedit! Alias?</Typography> */}
      
      {
        active==null ? <NothingSelectedView/>:<NoteView/>
      }
      
      <IconButton 
        onClick={onsubmit}
        size="large"
        sx={{
          color:'white',
          backgroundColor:'error.main',
          ':hover':{ backgroundColor: 'error.main', opacity:0.9},
          position:'fixed',
          right:50,
          bottom:50, 
        }}
        disabled ={isSaving}
      >
        <AddOutlined sx={{fontSize:30}}/>
      </IconButton>
    </JournalLayout>
  )
}

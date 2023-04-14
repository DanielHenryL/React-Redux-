import { useEffect, useMemo, useRef } from "react"
import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, Typography, TextField, IconButton } from "@mui/material"
import { ImageGallary } from "../components"
import { useForm } from "../../hooks/"
import { useDispatch, useSelector } from "react-redux"
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal"


export const NoteView = () => {
  const dispatch = useDispatch()
  const { active:note, isSaving} = useSelector( state => state.journal)

  const {body, title, date, onInputChange, formState} = useForm(note)

  const dateString = useMemo( () =>{
    const newDate = new Date(date)
    return newDate.toLocaleString('es-PE',
    {
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit',
      year:'numeric',
      weekday:'short',
      month:'long',
      day:'numeric',
    });
  } ,[date])


  const fileInputRef = useRef();

  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [formState])

  const onSaveNote = () => {
    dispatch(startSaveNote())
  }

  const onFileInputChange = ({target}) => {
    if (target.files.length === 0) return;
    
    dispatch( startUploadingFiles( target.files ) )
  }

  const onDelete = () => {
    dispatch( startDeletingNote() )
  }

  return (
    <Grid container direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ mb:1}}>
        <Grid item>
            <Typography fontSize={ 15 } fontWeight={'light'}> <b>{dateString}</b></Typography>
        </Grid>
        <Grid item>

            <Button sx={{marginRight:1}} onClick={ onDelete } color='error'>
                <DeleteOutline /> <small>Borrar</small>
            </Button>


            <input 
              type="file" 
              multiple 
              ref={ fileInputRef }
              onChange={ onFileInputChange }
              style={{ display:'none' }}
            />

            <IconButton
              color="secondary"  
              disabled={isSaving}
              onClick={() => fileInputRef.current.click() }
            >
              <UploadOutlined sx={{fontSize:25}}/> <small style={{fontSize:12}}>CARGAR ARCHIVO</small> 
            </IconButton>

            <Button 
              disabled={isSaving}
              onClick={ onSaveNote} 
              color="primary" 
              sx={{ padding:2}}
            >
                <SaveOutlined sx={{fontSize:30, mr:1}}/>
                Guardar
            </Button>
        </Grid>
        <Grid container sx={{mt:2}}>
            <TextField
              type="text"
              variant="filled"
              fullWidth
              placeholder="Ingrese un titulo"
              label="Titulo"
              sx={{ border:'none', mb:1}}  
              name={'title' }
              value={ title } 
              onChange={ onInputChange }          
            />
            <TextField
              type="text"
              variant="filled"
              fullWidth
              multiline
              placeholder="¿Que sucedio el dia de hoy?"
              minRows={5}
              name={'body'}
              value={ body } 
              onChange={ onInputChange }
            />
        </Grid>

        {/* Image gallary */}
        <ImageGallary images={ note.imageUrls }/>
    </Grid>
  )
}

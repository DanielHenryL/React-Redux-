import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, Typography, TextField } from "@mui/material"
import { ImageGallary } from "../components"

export const NoteView = () => {
  return (
    <Grid container direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ mb:1}}>
        <Grid item>
            <Typography fontSize={39} fontWeight={'light'}> 06 de abril, 2023</Typography>

        </Grid>
        <Grid item>
            <Button color="primary" sx={{ padding:2}}>
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
            />
            <TextField
              type="text"
              variant="filled"
              fullWidth
              multiline
              placeholder="¿Que sucedio el dia de hoy?"
              minRows={5}
            />
        </Grid>

        {/* Image gallary */}
        <ImageGallary />
    </Grid>
  )
}
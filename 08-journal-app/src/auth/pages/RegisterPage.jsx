import { Link as RouterLink} from 'react-router-dom'

import {TextField, Grid, Typography, Button, Link}  from '@mui/material'
import { Facebook, Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
      <AuthLayout title='Registrar'>
        <form>
            <Grid container>
              <Grid item xs={12} sx={{mt:2}}>
                <TextField 
                  label='Nombre'
                  type='text'
                  placeholder='Nombre'
                  fullWidth
                
                />
              </Grid>
              <Grid item xs={12} sx={{mt:2}}>
                <TextField 
                  label='Correo'
                  type='email'
                  placeholder='@unfv.edu.pe'
                  fullWidth
                
                />
              </Grid>
              <Grid item xs={12} sx={{mt:2}}>
                <TextField 
                  label='Contraseña'
                  type='password'
                  placeholder='Contraseña'
                  fullWidth
                
                />
              </Grid>
              <Grid container spacing={2} sx={{mb:2,mt:1}}>
                <Grid item xs={12} sx={{mb:1}}>
                  <Button
                    variant='contained'
                    fullWidth
                  >
                    Crear Cuenta
                  </Button>
                </Grid>
              </Grid>

              <Grid container direction='row' justifyContent='end'>
                <Typography sx={{mr:1}}>¿Ya tienes una cuenta?</Typography>
                <Link component={RouterLink} color='inherit' to='/auth/login'>
                  Ingresar
                </Link>
              </Grid>
            </Grid>

          </form>

      </AuthLayout>

  )
}

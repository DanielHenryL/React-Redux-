import { Link as RouterLink} from 'react-router-dom'

import {TextField, Grid, Typography, Button, Link}  from '@mui/material'
import { Facebook, Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  return (
      <AuthLayout title='Login'>
        <form>
            <Grid container>
              <Grid item xs={12} sx={{mt:2}}>
                <TextField 
                  label='Correo'
                  type='email'
                  placeholder='2023015771@unfv.edu.pe'
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
                <Grid item xs={12} sx={{mb:3}}>
                  <Button
                    variant='contained'
                    fullWidth
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant='contained'
                    fullWidth
                    color='error'
                  >
                    <Google/><Typography sx={{ml:1}}>Google</Typography>
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant='contained'
                    fullWidth
                    color='info'
                  >
                    <Facebook/><Typography sx={{ml:1}}>Facebook</Typography>
                  </Button>
                </Grid>

              </Grid>
              <Grid container direction='row' justifyContent='end'>
                <Link component={RouterLink} color='inherit' to='/auth/register'>
                  Crear una cuenta  
                </Link>
              </Grid>
            </Grid>

          </form>

      </AuthLayout>

  )
}

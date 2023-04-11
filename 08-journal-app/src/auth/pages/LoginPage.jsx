import { useMemo } from 'react'
import { Link as RouterLink} from 'react-router-dom'

import {TextField, Grid, Typography, Button, Link, Alert}  from '@mui/material'
import { Facebook, Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { startFacebookSignIn, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth'

export const LoginPage = () => {
  
  const { status, errorMessage } = useSelector( state => state.auth )
  const dispatch = useDispatch()

  const {formState ,email, password, onInputChange } = useForm({
    email:'',
    password:'',
  })

  const isAunthenticating = useMemo( ()=> status==='checking', [status])

  const onSubmit = (event)  => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword(formState))
  }
  
  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
  }
  const onFacebookSignIn = () => {
    dispatch(startFacebookSignIn())
  }

  return (
      <AuthLayout title='INGRESAR'>
        <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
            <Grid container>
              <Grid item xs={12} sx={{mt:2}}>
                <TextField 
                  label='Correo'
                  // size='small'
                  color="info"
                  type='email'
                  placeholder='2023015771@unfv.edu.pe'
                  fullWidth
                  name='email'
                  value={ email}
                  onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={12} sx={{mt:2}}>
                <TextField 
                  label='Contraseña'
                  color="info"
                  // size='small'
                  type='password'
                  placeholder='Contraseña'
                  fullWidth
                  name='password'
                  value={ password}
                  onChange={onInputChange}
                />
              </Grid>
              <Grid 
                container
                display={!!errorMessage ? '':'none'}
              >
                <Grid 
                    item 
                    xs={12} 
                    sx={{mt:1}}
                      
                  >

                    <Alert severity='error'>
                        {errorMessage}
                    </Alert>
                </Grid>
              </Grid>
              
              <Grid container spacing={1} sx={{mb:1,mt:1}}>
                <Grid item xs={12} sx={{mb:3}}>
                  <Button
                    disabled={isAunthenticating}
                    type='submit'
                    variant='contained'
                    fullWidth
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    disabled={isAunthenticating}
                    variant='contained'
                    fullWidth
                    color='error'
                    onClick={onGoogleSignIn}

                  >
                    <Google/><Typography sx={{ml:1}}>Google</Typography>
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    disabled={isAunthenticating}
                    variant='contained'
                    fullWidth
                    color='info'
                    onClick={onFacebookSignIn}
                  >
                    <Facebook/><Typography sx={{ml:1}}>Facebook</Typography>
                  </Button>
                </Grid>

              </Grid>
              <Grid container direction='row' justifyContent='end' sx={{mt:1}}>
                <Link component={RouterLink} color='inherit' to='/auth/register'>
                  Crear una cuenta  
                </Link>
              </Grid>
            </Grid>

          </form>

      </AuthLayout>

  )
}

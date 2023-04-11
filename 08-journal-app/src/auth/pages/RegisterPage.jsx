import { Link as RouterLink} from 'react-router-dom'
import {TextField, Grid, Typography, Button, Link, Alert}  from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmailPassword } from '../../store/auth'

const formData = {
  email:'',
  password:'',
  displayName:''
} 

const formValidations = {
  email: [(value)=> value.includes('@'), 'El correo debe de tener una @'],
  password: [(value)=> value.length >= 8, 'El password debe contener mas de 6 caracteres'],
  displayName: [(value)=> value.length > 0, 'El nombre es obligatorio'],
}


export const RegisterPage = () => {

  const dispatch = useDispatch()
  
  const [forSubmitted, setForSubmitted] = useState(false)

  const {status, errorMessage} = useSelector(state=> state.auth)

  const isChekingAuthentication = useMemo(() => status === 'checking', [status])

  const { 
    formState, displayName, email, password, onInputChange,  
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidations)


  const onSubmit = (event) => {
    event.preventDefault();
    setForSubmitted(true);

    if(!isFormValid) return ;

    dispatch(startCreatingUserWithEmailPassword(formState))
  }
  

  return (
      <AuthLayout title='REGISTRARSE'>
        <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
            <Grid container>
              <Grid item xs={12} sx={{mt:2}}>
                <TextField 
                  label='Nombre'
                  color="info"
                  type='text'
                  placeholder='Nombre'
                  fullWidth
                  value={displayName}
                  name='displayName'
                  onChange={onInputChange}
                  error={!!displayNameValid && forSubmitted}
                  helperText={displayNameValid}
                />
              </Grid>
              <Grid item xs={12} sx={{mt:2}}>
                <TextField 
                  label='Correo'
                  color="info"
                  type='email'
                  name='email'
                  value={email}
                  onChange={onInputChange}
                  placeholder='@unfv.edu.pe'
                  fullWidth
                  error={!!emailValid && forSubmitted}
                  helperText={emailValid}
                />
              </Grid>
              <Grid item xs={12} sx={{mt:2}}>
                <TextField 
                  label='Contraseña'
                  color="info"
                  type='password'
                  name='password'
                  value={password}
                  onChange={onInputChange}
                  placeholder='Contraseña'
                  fullWidth
                  error={!!passwordValid && forSubmitted}
                  helperText={passwordValid}
                
                />
              </Grid>
              <Grid container spacing={2} sx={{mb:2,mt:1}}>
                <Grid 
                  item 
                  xs={12} 
                  sx={{mb:1}}
                  display={!!errorMessage ? '':'none'}  
                >

                  <Alert severity='error'>
                      {errorMessage}
                  </Alert>
                </Grid>
                <Grid item xs={12} sx={{mb:1}}>
                  <Button
                    disabled ={isChekingAuthentication}
                    type='submit'
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

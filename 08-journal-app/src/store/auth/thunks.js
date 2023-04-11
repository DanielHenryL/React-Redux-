import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithFacebook, signInWithGoogle } from "../../firebase/providers"
import { chekingCredentials, login, logout } from "./"

export const chekingAuthentication = () => {
  return async(dispatch)=>{
    dispatch(chekingCredentials())
  }
}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {
        dispatch(chekingCredentials())
        const result = await signInWithGoogle();
        console.log(result)
        if (!result.ok) return dispatch(logout( result.errorMessage ))   
        
        dispatch( login(result) )
    }
}

export const startFacebookSignIn = () => {
    return async( dispatch ) => {
        dispatch(chekingCredentials())
        const result = await signInWithFacebook();
        if (!result.ok) return dispatch(logout( result.errorMessage ))   
        
        dispatch( login(result) )
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
  return async(dispatch)=>{
    dispatch(chekingCredentials());

    const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName});

    if(!ok) return dispatch( logout({errorMessage}) )

    dispatch( login({uid, email,  photoURL, displayName}) )
  }
}


export const startLoginWithEmailPassword = ({email, password}) => {
  return async(dispatch)=>{
    dispatch(chekingCredentials());
    const {ok, uid, displayName, photoURL, errorMessage} = await loginWithEmailPassword({email, password})
    if(!ok) return dispatch( logout({errorMessage}) )
    dispatch( login({email, uid, displayName, photoURL }) )
  }
}


export const startLogout = () => {
  return async(dispatch)=>{
    await logoutFirebase()
    dispatch( logout() )
  }
}
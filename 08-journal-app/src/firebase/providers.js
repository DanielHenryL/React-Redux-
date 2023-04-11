import { createUserWithEmailAndPassword ,signInWithEmailAndPassword ,GoogleAuthProvider, FacebookAuthProvider , signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const signInWithGoogle = async() => {

    try{
        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        // const credentials = GoogleAuthProvider.credentialFromResult(resul)
        const { displayName, email, photoURL, uid } = result.user;
        
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }

    }catch (error){

        const errorCode = error.code;
        const errorMessage = error.message;
        
        return {
            ok: false,
            errorMessage,
            errorCode,
        }
    }
}
export const signInWithFacebook = async() => {

    try{
        const result = await signInWithPopup(FirebaseAuth, facebookProvider)
        // const credentials = GoogleAuthProvider.credentialFromResult(resul)
        
        const { displayName, email, photoURL, uid } = result.user;
        
        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }

    }catch (error){
        console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;
        
        return {
            ok: false,
            errorMessage,
            errorCode,
        }
    }
}


export const registerUserWithEmailPassword = async({ email, password, displayName}) => {
    try{
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const {uid, photoURL} = resp.user
        await updateProfile(FirebaseAuth.currentUser, {displayName})
        return{
            ok:true,
            uid,
            photoURL,
            email,
            displayName,
        }
        
    }catch (error){
        const errorCode = error.code;
        const errorMessage = error.message;
        return{
            ok:false,
            errorMessage,
            errorCode,
        }
    }
}

export const loginWithEmailPassword = async({email, password}) => {
    try{
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)
        
        const {uid, photoURL, displayName} = resp.user
        
        return{
            ok:true,
            uid,
            photoURL,
            displayName,
            email,
        }

    }catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        return{
            ok:false,
            errorMessage,
            errorCode
        }
    }
} 

export const logoutFirebase = async() => {
    return await FirebaseAuth.signOut();
}
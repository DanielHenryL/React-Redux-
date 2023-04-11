import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/auth";
import { FirebaseAuth } from "../firebase/config";
import { useEffect } from "react";

export const useCheckAuth = () => {
  const { status, errorMessage } = useSelector(state => state.auth);
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged( FirebaseAuth, async(user) => {
      if(!user) return dispatch(logout(errorMessage))
      const {uid, displayName, email, photoURL} = user
      dispatch(login({uid, displayName, email, photoURL}))
    } )
  }, [])

    return {
      status,
      
    }
}

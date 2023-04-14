import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseBD } from "../../firebase/config";
import { addNewEmptyNote, deleteNotById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./";
import { fileUpload, loadNotes } from "../../helpers";


export const startNewNote = () => {
  return async(dispatch, getState) => {
    dispatch( savingNewNote() )

    const {uid} = getState().auth
    //uid
    const newNote = {
    title:'',
    body:'',
    imageUrls: [],
    date:new Date().getTime(),
    } 

    //Dirigirnos a la ruta referencia de nuestra bd donde vamos a grabar
    const newDoc = doc(collection(FirebaseBD, `${uid}/journal/notes`))

    //grabar nuestro datos, enviaremos la referencia al lugar y el objeto a grabar 
    await setDoc(newDoc, newNote);

    //Guardamos el id generado por firebase en el campo o collection 'notes'
    newNote.id = newDoc.id;


    dispatch( addNewEmptyNote(newNote) )
    dispatch( setActiveNote(newNote) )

  }
}


export const startLoadingNotes = () => {
  return async(dispatch, getState) => {
    const {uid} = getState().auth
    if (!uid) throw new Error('El uid del usuario no existe')
    
    const resp= await loadNotes(uid)
    dispatch(setNotes(resp))
  }
}


export const startSaveNote = () => {
  return async(dispatch, getState) =>{

    dispatch(setSaving());

    const {uid} = getState().auth;
    const { active:note } = getState().journal; 


    const noteToFireStore = {...note};
    delete noteToFireStore.id;

    const docRef = doc(FirebaseBD, `${uid}/journal/notes/${note.id}`);
    await setDoc( docRef, noteToFireStore, { merge:true} );


    dispatch(updateNote(note));
  }
}

export const startUploadingFiles = ( files = [] ) => {
  return async( dispatch ) => {
    dispatch( setSaving() )
    const fileUploadPromises = []
    for (const file of files) {
      fileUploadPromises.push( fileUpload( file ) )
    }

    const photosUrls = await Promise.all( fileUploadPromises );
    dispatch(setPhotosToActiveNote(photosUrls))
    

  }
}


export const startDeletingNote = () => {
  return async(dispatch, getState) =>{
    const { uid } = getState().auth;
    const { active:note } = getState().journal;

    const docRef = doc( FirebaseBD, `${uid}/journal/notes/${note.id}`);
    await deleteDoc(docRef)
    dispatch(deleteNotById(note.id))
    console.log(note.id)
    // dispatch( savingNewNote() )
  }
}



import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onSetDesactiveEvent, onUpdateEvent } from "../store"

export const useCalendarStore = () => {

  const dispatch = useDispatch()

  const { events, activeEvent } = useSelector( state => state.calendar )
  
  const setActiveEvent = ( calendarEvent ) => {
    dispatch( onSetActiveEvent( calendarEvent ) )
  }

  const setDesactiveEvent = () => {
    dispatch( onSetDesactiveEvent())
  }

  const startSavingEvent = async( calendarEvent ) => {
      // Llegar al backend
    if(calendarEvent._id){
      // Actualizando
      dispatch( onUpdateEvent( {...calendarEvent} ) )
    }else{
      // Creando
      dispatch( onAddNewEvent({...calendarEvent, _id:new Date().getTime()}) )
    }          
  }
  
  const startDeletingEvent = async( ) => {
    dispatch( onDeleteEvent() ) 
  }

  
  return {
    // Propiedades
    activeEvent,
    events,
    hasEventSelector:!!activeEvent,
    // Metodos
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
    setDesactiveEvent,
  }
}

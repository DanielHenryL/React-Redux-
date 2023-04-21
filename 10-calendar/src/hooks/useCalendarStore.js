import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onSetDesactiveEvent, onUpdateEvent } from "../store"
import { calendarApi } from "../api"
import { convertEventsToDateEvents } from "../helpers"
import Swal from "sweetalert2"

export const useCalendarStore = () => {
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const { events, activeEvent } = useSelector( state => state.calendar )
  
  const setActiveEvent = ( calendarEvent ) => {
    dispatch( onSetActiveEvent( calendarEvent ) )
  }

  const setDesactiveEvent = () => {
    dispatch( onSetDesactiveEvent())
  }

  const startSavingEvent = async( calendarEvent ) => {
    try {
      if(calendarEvent.id){
        //Actualiazndo
        await calendarApi.put(`/events/${ calendarEvent.id }`, calendarEvent)
        dispatch( onUpdateEvent( {...calendarEvent, user} ) )
      }
      else{
        // Creando
        const {data }= await calendarApi.post('/events', calendarEvent ); 
        dispatch( onAddNewEvent({ ...calendarEvent, id:data.evento.id, user}) )
      }   
    } catch (error) {
      console.log(error);
      Swal.fire('Error al guardar',error.response.data.msg,'error')
    }
           
  }
  
  const startDeletingEvent = async() => {
    try {
      //eliminando
      await calendarApi.delete(`/events/${ activeEvent.id }`)
      dispatch( onDeleteEvent() ) 
      
    } catch (error) {
      console.log(error);
      Swal.fire('Error al eliminar',error.response.data.msg,'error')
    }
  }

  const startLoadingEvents = async() => {
    try {
      const { data } = await calendarApi.get('/events');
      const events = convertEventsToDateEvents(data.eventos)
      dispatch( onLoadEvents( events) )
    } catch (error) { 
      console.log('Error cargando eventos');
    }
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
    startLoadingEvents,
  }
}

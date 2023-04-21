import { createSlice } from '@reduxjs/toolkit';

// const tempEvent = {
//     _id: new Date().getTime(),
//     title:'Cumpleaños del jefe',
//     notes:'Hay que comprar el pastel',
//     start:new Date(),
//     end:addHours( new Date(),2),
//     bgColor:'#fafafa',
//     user:{
//       _id:'123',
//       name:'Daniel Lagunas',
//     }
// }


export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        isLoadingEvents:true,
        events:[],
        activeEvent:null
    },
    reducers: {
        onSetActiveEvent: ( state, action ) => {
            state.activeEvent = action.payload;
        },
        onSetDesactiveEvent: ( state ) => {
            state.activeEvent = null;
        },

        onAddNewEvent: ( state, action )=>{
            state.events.push( action.payload );
            state.activeEvent = null;
        },
        onUpdateEvent: ( state, action )=> {
            state.events= state.events.map( event => {
                if(event.id === action.payload.id){
                    return action.payload
                }
                return event
            } )  
            state.activeEvent = null;
        },
        onDeleteEvent: ( state ) => {
            if(state.activeEvent){
                state.events = state.events.filter( event => event.id!==state.activeEvent.id);
                state.activeEvent = null;
            }
        },
        onLoadEvents:( state, {payload = []} )=> {
            payload.forEach( event => {
                const exists = state.events.some( dbEvent => dbEvent.id === event.id)
                if( !exists ){
                    state.events.push(event)
                }
            })
            state.isLoadingEvents=false
        },
        onLogoutCalendar: ( state )=>{
            state.events = []
            state.isLoadingEvents = true
            state.activeEvent=null
        }
    },
});
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent,onSetDesactiveEvent, onLoadEvents, onLogoutCalendar } = calendarSlice.actions;
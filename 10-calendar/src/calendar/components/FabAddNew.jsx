import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks"

export const FabAddNew = () => {

  const { openDateModal } = useUiStore();
  const { setActiveEvent } = useCalendarStore();

  
  const handleClickNew = () => {
    openDateModal();
    setActiveEvent({
      title:'',
      notes:'',
      start:new Date(),
      end:addHours( new Date(), 2),
      bgColor:'#ffffff',
      user:{
        _id:'123',
        name:'Daniel Lagunas',
      }
    });
    
  }

  return (
    <button
        className="btn btn-primary fab"
        onClick={ handleClickNew }
    >
        <i className="fas fa-plus"></i>

    </button>

    )
}

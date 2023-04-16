import { useSelector } from "react-redux";
import { useCalendarStore } from "../../hooks"

export const FabDelete = () => {

  const { isDateModalOpen } = useSelector( state => state.ui)
  const { startDeletingEvent, hasEventSelector } = useCalendarStore();
  
  const handleDelete = () => {
    startDeletingEvent()
  }

  return (
    <button
        className="btn btn-danger fab-danger"
        style={{
          display: (hasEventSelector && !isDateModalOpen) ? '':'none'
        }}
        onClick={ handleDelete }
    >
        <i className="fas fa-trash-alt"></i>

    </button>

    )
}

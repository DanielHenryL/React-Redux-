
export const GifItem = ({id, title, url,setImages}) => {
  const Eliminar = (id) =>{
    setImages((images)=> images.filter(img=> img.id != id) )
  }

  return (
    <div className="card d-grid ">
        <button className="btn btn-danger" onClick={()=>Eliminar(id)}>Eliminar</button>
        <img src={url} alt={title} />
        <p> {title} </p>
    </div>
  )
}

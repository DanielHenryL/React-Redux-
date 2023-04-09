import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category, Elimnar}) => {

  const { images, isLoading, setImages} = useFetchGifs(category);

  return (
      <>
        {
        isLoading
        ? (<h3>Cargando ... </h3>)
        : null
        } 
        <hr />
        <div className="btn-toolbar justify-content-between" role="toolbar" >
          <h3>{category}</h3>
          <div className="d-md-flex ">
            <button className='btn btn-danger' onClick={()=>Elimnar(category)}>Eliminar categoria</button>
          </div>

        </div>
        <br />
        <div className="card-grid">
          {
            images.map((image)=>(
              <GifItem 
                key={image.id}
                {...image}
                setImages={setImages}
              />
            ))
          }
        </div>
      </>
  )
}

import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById"
import { useMemo } from "react"

export const HeroPage = () => {
  const {id}=useParams()
  const hero = useMemo(() => getHeroById(id), [id])

  const navigate = useNavigate();
  if(!hero){
    return <Navigate to={'/marvel'}/>
  }

  const onNavigateBack = () => {
    navigate(-1)
  }
  

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={`/heroes/${hero.id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeftBig" 
        />
      </div>
      <div className="col-8 ">
        <h3 className="animate__animated animate__bounceInDown">{hero.superhero}</h3>
        <ul className="list-group list-group-flush animate__animated animate__fadeInRight">
          <li className="list-group-item "> <b>Alter-ago: </b> { hero.alter_ego}</li>
          <li className="list-group-item"> <b>Publisher: </b> { hero.publisher}</li>
          <li className="list-group-item"> <b>First-appearance: </b> { hero.first_appearance}</li>
        </ul>
        <h5 className="mt-3 animate__animated animate__bounceInDown">Characters</h5>
        <p className="p-3 animate__animated animate__fadeInRight">
          {hero.characters}
        </p>
        <button className="btn btn-outline-primary animate__animated animate__fadeInUpBig" onClick={ onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  )
}

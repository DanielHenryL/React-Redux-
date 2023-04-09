import { Link } from "react-router-dom"

export const HeroCard = ({heroe}) => {
  const heroImageUrl = `/heroes/${heroe.id}.jpg`
  return (
    <div className="col animate__animated animate__fadeIn">
        <div className="card">
            <div className="row no-gutters">
                <div className="col col-4 ">
                    <img src={heroImageUrl} className="card-img" alt={heroe.superhero} />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h5 className="crad-title">{heroe.superhero}</h5>
                    <p className="card-text">{heroe.alter_ego}</p>
                    {
                      heroe.characters!==heroe.alter_ego && <p>{heroe.characters}</p>
                    }
                    <p className="card-text">
                      <small className="text-muted">{ heroe.first_appearance}</small>
                    </p>
                      <Link
                        to={`/hero/${heroe.id}`}

                      >
                      mas...
                      </Link>

                  </div>
                </div>

            </div>
        </div>
    </div>
  )
}

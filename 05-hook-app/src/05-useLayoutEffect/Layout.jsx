import { useCounter, useFecth } from "../Hooks/";
import { LoadingQuote,Quote } from "../03-examples";

export const Layout = () => {

    const {counter, increment, decrement} =useCounter()

    const { data, isLoading, hasError} = useFecth(`https://pokeapi.co/api/v2/pokemon/${counter}`)
    const {id, name, base_experience} = !!data && data;

  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />

        
        {
            isLoading 
            ? <LoadingQuote /> 
            : <Quote name={name} id={id} base_experience={base_experience}/>
        }


        <button className="btn btn-primary" disabled={isLoading} onClick={()=>increment(1)} > 
            Next quote
        </button>
        <button className="btn btn-primary" onClick={()=>decrement(1)}> 
            Previous quote
        </button>

        
    </>
  )
}

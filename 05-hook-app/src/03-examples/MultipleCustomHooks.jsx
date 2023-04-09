import { useCounter, useFecth } from "../Hooks/";
import { LoadingQuote,Quote } from "./";

export const MultipleCustomHooks = () => {

    const {counter, increment, decrement} =useCounter()

    const { data, isLoading, hasError} = useFecth(`https://pokeapi.co/api/v2/pokemon/${counter}`)
    const {id, name } = !!data && data;

  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />

        
        {
            isLoading 
            ? <LoadingQuote /> 
            : <Quote name={name}/>
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

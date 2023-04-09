import { useMemo, useState } from "react"
import { useCounter } from "../Hooks"


const heavyStuff = (iterationNumber = 100) =>{
    for (let i = 0; i < iterationNumber; i++) {
      console.log(`Ahi vamos...`);
    }
    return `${ iterationNumber } iteraciones realizadas`
  }

export const MemoHook = () => {
    const { counter, increment}=useCounter(10)
    const [show, setShow] = useState(true)
    const memorizedValue = useMemo(() => {heavyStuff(counter)}, [counter])
  return (
    <>
        <h1>Counter: <small>{counter}</small></h1>
        <hr />
        <h4>{ memorizedValue }</h4>
        <button onClick={()=>increment()} className="btn btn-primary">
            +1
        </button>
        <button onClick={()=>setShow(!show)} className="btn btn-outline-primary">
            Show/Hide 
        </button>
        <span>{ JSON.stringify(show)}</span>
    </>
  )
}

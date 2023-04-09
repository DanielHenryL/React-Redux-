import { useCounter } from "../Hooks/useCounter"

export const CounterWithCustomHook = ({initialValue}) => {
    const {counter, increment, decrement, reset} = useCounter(initialValue)
  return (
    <>
        <h3>Custom with hook: { counter }</h3>

        <hr />
        <button className="btn btn-primary" onClick={()=>increment(3)}>+1</button>
        <button className="btn btn-primary" onClick={reset}>Reset</button>
        <button className="btn btn-primary" onClick={()=>decrement(5)}>-1</button>
    
    </>
  )
}

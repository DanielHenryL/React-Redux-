import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10)
    
    const increment = useCallback(
      (value) => {
        setCounter( (c) => c + value )
      },
      [],
    )
    console.log(increment)
    
    // const increment = () => {
    //     setCounter( counter + 2 )
    // }

  return (
    <>
        <h1>useCallback: {counter}</h1>
        <hr />

        < ShowIncrement increment={increment}/>

    </>
  )
}

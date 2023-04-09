import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({name, id, base_experience}) => {

  const pRef = useRef()
  const [boxSize, setBoxSize] = useState({width:0, height:0})


  useLayoutEffect(() => {
    const {width, height}=pRef.current.getBoundingClientRect()
    setBoxSize({width,height})
  }, [base_experience])
  return (
    <>
        <blockquote style={{display:'flex'}} className="blockquote text-end"> 
            <p className="mb-1">{ name }</p>
            <footer className="blockquote-footer"> {id}</footer>
            <span ref={pRef} className="mb-1">Experiencia: { base_experience }</span>
        </blockquote>
        <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}

import { useEffect, useState } from "react"

export const useFecth = (url) => {
    const [state, setState] = useState({
        data:null,
        isLoading:true,
        hasError:null,
    })

    const getFeth = async() => {

        setState({
            ...state,
            isLoading:true,
        })

        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data)
        const importante = {
            id:data.id,
            name:data.name,
            base_experience:data.base_experience
        }
        setState({
            data:importante,
            isLoading:false,
            hasError:null,
        })
    }

    useEffect(() => {
        getFeth()
      
    }, [url])
    
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}

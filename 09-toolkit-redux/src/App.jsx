import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from './store/slices/counter'

function App() {

  const {counter} = useSelector( state => state.counter)
  const dispatch =useDispatch()

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>counter is {counter}</h1>
      <div className="card">
        <button onClick={()=> dispatch( increment() )}>
          Incrementar
        </button>
        <button onClick={()=> dispatch( decrement() )}>
          Decrement
        </button>
        <button onClick={()=> dispatch( incrementByAmount(5) )}>
        increment by 5
        </button>
        
        
      </div>
      
    </div>
  )
}

export default App

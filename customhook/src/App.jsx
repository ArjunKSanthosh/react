import './App.scss'
import useCustomHook from './useCustonHook'

function App() {
const{val,increment,decrement}=useCustomHook(0)

  return (
    <>
    <div className="container">
      <button onClick={decrement}>-</button>
      <span>{val}</span>
      <button onClick={increment}>+</button>
    </div>
    </>
  )
}

export default App

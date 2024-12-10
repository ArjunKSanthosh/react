import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Login from './Components/Login'
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/login' Component={Login}/>

          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

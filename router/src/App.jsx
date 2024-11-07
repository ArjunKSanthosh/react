import{ BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './Component/Nav'
import Home from './Component/Home'
import About from './Component/About'
import './App.css'

function App() {


  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/about' Component={About}/>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App

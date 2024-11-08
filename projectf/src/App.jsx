import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './assets/Components/Home'
import Details from './assets/Components/Details'
import './App.css'
function App(){
  
    return(  <>
     
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/details/:id' Component={Details}/>

      </Routes>
    </BrowserRouter>
    </>
    )

}

export default App
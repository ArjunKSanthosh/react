import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { lazy,Suspense } from 'react'
import './App.css'

function App() {
  console.log("APP");
  
  let Ch1=lazy(()=>setdata(import('./Child1')))
  let Ch2=lazy(()=>setdata(import('./Child2')))


  return (
    <>
      <BrowserRouter>
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path='/' element={<Ch1/>}/>
          <Route path='/child2' element={<Ch2/>}/>
        </Routes>

      </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App

async function setdata(comp){
  await new Promise((res)=>setTimeout(res,3000));
  return comp;
}

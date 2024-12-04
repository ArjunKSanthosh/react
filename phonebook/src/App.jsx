import {BrowserRouter,Routes,Route, Router} from 'react-router-dom'
import { useState } from 'react'
import Home from './Components/Home'
import './App.css'

function App() {


  return (
  <BrowserRouter>
    <Routes>
     <Route path='/' Component={Home}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App

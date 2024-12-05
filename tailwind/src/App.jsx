import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="flex  space-x-14 ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
<button class="bg-sky-500/100 ...">add</button>
<button class="bg-sky-500/75 ...">add</button>
<button class="bg-sky-500/50 ...">add</button>
    </>
  )
}

export default App

import { useCallback,useState } from 'react'
import Child from './Child'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [number,setNumber]=useState([1,2,3,4,5])

  const handleAddNumber=useCallback(()=>{
    setNumber((pre)=>([...pre,pre.length+1]))
  },[])
  console.log("Parent");
  
  return (
    <div style={{margin:"50px",textAlign:"center"}}>
        <h1>UseCallBack</h1>
        <p>Count : {count}</p>
        <button onClick={()=>setCount((pre)=>pre+1)}>Increment Count</button>
        <Child addNumber={handleAddNumber}/>
        <div style={{marginTop:"50px"}}>
          <ul>
            {
              number.map((num,ind)=><li key={ind}>Number :{num}</li>)
            }
          </ul>
        </div>
    </div>
  )
}

export default App

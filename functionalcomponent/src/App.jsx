// import './App.css'
// import { useState } from 'react'
// function App() {
//   let [val,setVal]=useState({
//     name:"",
//     age:""
//   })
// const handleChange=(e)=>{
//   setVal((pre)=>{return{...pre,[e.target.name]:e.target.value}})
// }
// const onhandleSubmit=(e)=>{
//   e.preventDefault();
//   console.log(val);
  
// }
//   return (
//     <>
//         <form action="">
//           <input type="text" name="name" id="" onChange={handleChange}/>
//           <input type="text" name="age" id="" onChange={handleChange}/>
//           <button onClick={onhandleSubmit}>Submit</button>
//         </form>
//     </>
//   )
// }

// export default App



//todo



// import './App.css'
// import { useState } from 'react'
// function App(){
// const [task,setTask]=useState("")
// const [todo,setTodo]=useState([])

// const addTask=()=>{
//   console.log(task);
//   task?setTodo(pre=>([...pre,task])):alert("Add Task")
//   setTask("")
// }
// console.log(todo);

//   return(
//     <>
//     <div className="class">
//           <input type="text" name="name" id="" placeholder='task' onChange={(e)=>setTask(e.target.value)} value={task}/>
//              <button onClick={addTask}>Add Task</button>
//     </div>
//     </>
//   )
// }
// export default App


import Form2 from "./Form2"
import './App.css'

function App(){
    return(
        <>
        <Form2/>
        </>
    )
}

export default App
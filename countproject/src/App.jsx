
// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       count:0
//     }
//   }
//   render(){
//     const increment=()=>{
//       this.setState({count:this.state.count+=1})
//     }
//     const decrement=()=>{
//       if(this.state.count>0){
//         this.setState({count:this.state.count-=1})
//       }
//     }
//      return <div className="main">
//         <button onClick={decrement}>-</button>
//         <h3>Count {this.state.count}</h3>
//         <button onClick={increment}>+</button>
//       </div>
//   }
// }
// export default App
import React from "react";
import './App.css'

class App extends React.Component{
  constructor(props){
    super (props)
    this.state={
      inputVal:"",
      items:[]
    }
  }
  handleChange=(event)=>{
    this.setState({inputVal:event.target.value})
  }
  handleSubmit=()=>{
    console.log("hai");
    this.setState({items:[...this.state.items,this.state.inputVal],inputVal:""})
  }
render(){
  console.log(this.state.items);
  return <div className="main">
     <input type="text" name="" id="" value={this.state.inputVal} onChange={this.handleChange} />
     <button onClick={this.handleSubmit}>Add</button>
     <div>
     <ul>
      {
        this.state.items.map((item,ind)=>
          <li key={ind}>
            {item}
            <button>delete</button>
          </li>
        )

      }
     </ul>

     </div>
  </div>
}

}

export default App

// //console.log(this.state.count);
  
// console.log(this.state.items);

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

////////////////////////////////////////////////////////......................................................000000000000000000000000000000000000---------------------------------------*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************
// handleChange=(event)=>{
//   this.setState({inputVal:event.target.value})
// }
// handleSubmit=()=>{
//   console.log("hai");
//   this.setState({items:[...this.state.items,this.state.inputVal],inputVal:""})
// }
// deleteItem=(item)=>{
//   this.setState({items:this.state.items.filter((i)=>{
//     return i!=item
//   })})
// }
{/* <input type="text" name="" id="" value={this.state.inputVal} onChange={this.handleChange} />
<button onClick={this.handleSubmit}>Add</button>
<button onClick={()=>this.setState({count:10})}>Count{this.state.count}</button>
<div className="sub">
<ul>
 {
   this.state.items.map((item,ind)=>
     <li key={ind}>
       {item}
       <button onClick={()=>this.deleteItem(item)}>delete</button>
     </li>
   )

 }
</ul>

</div> */}



// import React,{PureComponent} from "react";
// import './App.css'

// class App extends PureComponent{
//   constructor(props){
//     super (props)
//     this.state={
//       inputVal:"",
//       items:[]
//     }
//   } 
//   async componentDidMount(){
//     const res=await fetch("https://dummyjson.com/products")
//     console.log(res);
//     const data=await res.json();
//     this.setState({items:[...data.products]})
//   }

// render(){
  
//   return  <div className="main">
//     <div className="nav">
//       <div className="nnn">
//        <h2>Flipkart</h2>
//       <input type="search" name="" id="input" placeholder="Search for Products,Brands and More..  " />
//       </div>
//     </div>
   
//     <div className="proucts"> 
//       {this.state.items.map((item)=>{

//       return  <div className="prod">
//                     <h2>{item.title.substring(0,16)}</h2>
//                     <img src={item.thumbnail} alt="" />
//               </div>
//     })} 
//     </div>
//   </div>
// }

// }

// export default App
import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section from './lists/Section'
import Tools from './lists/Tools'

const lst=[
  {
    title:"Annan",
    para:"Good hyooman",
    active:true
  },
  {
    title:"Felix",
    para:"Good hyooman",
    active:false
  },
  {
    title:"Aswin",
    para:"Good hyooman",
    active:true
  },
  {
    title:"Arjun",
    para:"Good hyooman",
    active:false
  }
]
class App extends React.Component{
  constructor(props){
    super(props);
    this.status={
      data:lst
    }
  }
  render(){
    const onListChange=(evnt)=>{
      console.log(evnt.target.value);
      const newList=lst.filter((item)=>{
        if(evnt.target.value=="all"){
          return true;
        }
        if(evnt.target.value=="active"){
          return item.active==true
        }
        if(evnt.target.value=="notactive"){
          return item.active=false
        }

      });
      this.setState({data:newList})
      
    }
  

  return (
    <>
    <nav style={{padding:"20px",backgroundColor:"black",color:"white"}}>
    <h1>Novavi</h1>
    </nav>
      <Tools onAction={onListChange}>
        <div>

        {
          lst.map((el,ind)=><Section title={el.title} para={el.para} active={el.active} key={ind}/>)
        }
    
      </div>
   </Tools>

    </>
  )
}
}

export default App


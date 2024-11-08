import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

function Home(){

    let [inputVal,setInputVal]=useState("")
    let [items,setItems]=useState([])
    let [filter,setFilter]=useState([])
    let [category,setCategory]=useState([])
    useEffect(()=>{
      fetchData();
    },[]);
const fetchData=async()=>{
  const res=await fetch('https://dummyjson.com/products');
  const data=await res.json();
  setItems([...data.products])
  const rescat=await fetch('https://dummyjson.com/products/categories');
  const datacat=await rescat.json()
  setCategory([...datacat])
  
}
if(items.length==0) return <h1>Loading...</h1>
  return(  <>
  <div>
    <section style={{margin:"0 10px 0 10px"}}onClick={()=>setFilter("")}>All</section>
    {
        category.map((cat,index)=><section style={{margin:"0 10px 0 10px"}}key={index} onclick={()=>setFilter(cat.name)}>{cat.name}</section>)
    }
  </div>
  <h2 align="center" style={{marginBottom:"1%"}}>ALL PRODUCTS</h2>
  <input className="input" name="text" placeholder="Search for products and more..." type="search"/>
      <div className="main">
   {items.filter((item)=>item.category.includes(filter.toLocaleLowercase())).map((item,ind)=>(
   
     <Link to={`/details/${item.id}`}>
          <div className="item" key={ind}>
            <img src={item.thumbnail} alt="" />
            <p>{item.title.substring(0,20)}</p>
            <p><b>${item.price}</b></p>
            </div>
      </Link>
            
        ))}
      </div>
  </>
  )

}

export default Home;
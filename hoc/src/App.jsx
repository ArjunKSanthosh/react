// import { useState,useEffect } from 'react'

// import './App.css'
// import withLoader from './HOC'
// import BaseComponent from './BaseComponent'

// const EnhancedDataDisplay=withLoader(BaseComponent);
// function App(){
//   const [data,setData]=useState([]);
//   const [isLoading,setIsLoading]=useState(true);
//   useEffect(()=>{
//     setTimeout(()=>{
//       setData(["item1","item2","item3"])
//       setIsLoading(false)
//     },2000)
//   },[])
//   return <EnhancedDataDisplay isLoading={isLoading} data={data}/>
// }



// export default App

import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(){
  const notify = () => toast.error('ERRORR', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    // transition: Flip,
    });

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}

export default App
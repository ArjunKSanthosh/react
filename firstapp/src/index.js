import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//method 1 of giving style to ane element
// const stl={
//   color:"red",backgroundColor:"yellow"
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>


  // method 1 of creating an element
  // <div>
  //   <h1>hai</h1>
  //   <h1>hello</h1>
  // </div>


  // method 2 of creating an element

  // React.createElement("h1",{id:"hh"},"heyy")

  //style method 1
  // <h1 style={stl}>hello</h1>

  //methid 2of creating style fo an element
/* <h1 style={{color:"red",backgroundColor:"yellow"}}>hello</h1> */

<>
<h1 className='new'>Hellooo</h1>
<label htmlFor='asd'>Input</label>
<input id='asd'/>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

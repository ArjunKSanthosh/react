import React, {useState,memo}from 'react'

const Child = () => {
    let [count, setCount] = useState(0)
    console.log("Child");
  return (
        <>
            <button onClick={()=>setCount(count+=1)}>Parent Count{count}</button>
        </>
  )
}

export default memo(Child)
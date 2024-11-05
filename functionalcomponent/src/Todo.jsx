import { useState } from "react";

function Todo(){

    let [val,setVal]=useState(0)
    function counter(){
        setVal(val+=1)
    }
    return(
        <>
        <button onClick={counter}>Count{val}</button>
        </>
    )
}
export default Todo
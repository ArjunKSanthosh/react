import React,{memo} from "react";

const Child=({addNumber})=>{
    console.log("Child Component re-rendered");
    return(
        <div>
            <button onClick={addNumber}>Add Number</button>
        </div>
    )
}
export default memo(Child)
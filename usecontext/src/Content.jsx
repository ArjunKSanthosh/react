import React,{useContext} from "react";
import { ThemeContext } from "./ThemeProvider";

const Content=()=>{
    const {theme,toggleTheme}=useContext(ThemeContext)
return(
    <div>
        <header style={{
            padding:"20px",
            backgroundColor:theme==="light"?"green":"yellow",
            color:theme==="light"?"white":"black",
        }}>
            <h3>Context provides a way to pass data or state through the component tree without having to pass props down manually through each nested component. It is designed to share data that can be considered as global data for a tree of React components, such as the current authenticated user or theme(e.g. color, paddings, margins, font-sizes).

Context API uses Context. Provider and Context. Consumer Components pass down the data but it is very cumbersome to write the long functional code to use this Context API. So useContext hook helps to make the code more readable, less verbose and removes the need to introduce Consumer Component. The useContext hook is the new addition in React 16.8. To master this powerful hook and learn its applications, the ReactJS Course provides detailed lessons and practical examples.

Syntax:

const authContext = useContext(initialValue);

The useContext accepts the value provided by React.createContext and then re-render the component whenever its value changes but you can still optimize its performance by using memoization.</h3>
            <button style={{
                padding:"20px",
                backgroundColor:theme==="light"?"grey":"white",
                color:theme==="light"?"white":"grey"
            }}onClick={toggleTheme}>Toggle Theme</button>
        </header>
    </div>
)
}
export default Content
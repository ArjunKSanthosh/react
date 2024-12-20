import React,{useContext} from "react";
import { ThemeContext } from "./ThemeProvider";

const Header=()=>{
    const {theme,toggleTheme}=useContext(ThemeContext)
return(
    <div>
        <header style={{
            padding:"20px",
            backgroundColor:theme==="light"?"white":"grey",
            color:theme==="light"?"grey":"white",
        }}>
            <h1>Theme</h1>
            <button style={{
                padding:"20px",
                backgroundColor:theme==="light"?"grey":"white",
                color:theme==="light"?"white":"grey"
            }}onClick={toggleTheme}>Toggle Theme</button>
        </header>
    </div>
)
}
export default Header
import React,{Component} from "react";
import class Form extends Component{
    state = { name:"" , age:"" }
    onhandleSubmit =(event)=>{
        event.preventDefault();
        console.log(this.state.name ,this.state.age);
    }
    onhandleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
        return (
            <div>
                <form action="">
                        <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.onhandleChange}/>
                        <input type="text" name="age" placeholder="age" value={this.state.age} onChange={this.onhandleChange}/>
                        <button onClick={this.onhandleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}
export default Form;
import React,{ Component } from "react";
class Form2 extends Component{
    state = { name:"" , age:"",dob:"",phone:"",place:"",details:[] }

    onhandleSubmit =(event)=>{
        event.preventDefault();
        console.log(this.state.name ,this.state.age,this.state.dob ,this.state.phone ,this.state.place);
    }
    onhandleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
render(){
    return(<>
        <div>
                        <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.onhandleChange}/>
                        <input type="text" name="age" placeholder="age" value={this.state.age} onChange={this.onhandleChange}/>
                        <input type="text" name="age" placeholder="dob" value={this.state.dob} onChange={this.onhandleChange}/>
                        <input type="text" name="age" placeholder="phone" value={this.state.phone} onChange={this.onhandleChange}/>
                        <input type="text" name="age" placeholder="place" value={this.state.place} onChange={this.onhandleChange}/>

                        <button onClick={this.onhandleSubmit}>Submit</button>

        </div>
        <div className="details">
                {
                    this.state.map
                }
        </div>
        </>
    )
}

}
export default Form2
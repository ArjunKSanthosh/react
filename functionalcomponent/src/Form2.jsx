import React,{ Component } from "react";
class Form2 extends Component{
    state = { name:"" , age:"",dob:"",phone:"",place:"",details:[] }

    onhandleSubmit =(event)=>{
        event.preventDefault();
        console.log(this.state.name ,this.state.age,this.state.dob ,this.state.phone ,this.state.place);
        this.setState({details:[...this.state.details,{name:this.state.name,age:this.state.age,dob:this.state.dob,phone:this.state.phone,place:this.state.place}],name:"",age:"",dob:"",phone:"",place:""})
    }
    onhandleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
        console.log(this.state.details);
        
    }
render(){
    
    return(<>
        <div>
                        <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.onhandleChange}/>
                        <input type="text" name="age" placeholder="age" value={this.state.age} onChange={this.onhandleChange}/>
                        <input type="text" name="dob" placeholder="dob" value={this.state.dob} onChange={this.onhandleChange}/>
                        <input type="text" name="phone" placeholder="phone" value={this.state.phone} onChange={this.onhandleChange}/>
                        <input type="text" name="place" placeholder="place" value={this.state.place} onChange={this.onhandleChange}/>

                        <button onClick={this.onhandleSubmit}>Submit</button>

        </div>
        <div className="details">
                {
                    this.state.details.map((item,ind)=>{
                        return (
                        <div className="card" key={ind}>
                                <p>Name:{item.name}</p>
                                <p>Age:{item.age}</p>
                                <p>DOB:{item.dob}</p>
                                <p>Phone:{item.phone}</p>
                                <p>Place:{item.place}</p>

                              </div>
                        )

                    })
                }
        </div>
        </>
    )
}

}
export default Form2
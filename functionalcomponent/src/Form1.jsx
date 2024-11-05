import React,{Component} from 'react';
export class Form1 extends Component{
    constructor(props){
        super(props)
        this.inputname=React.createRef();
        this.inputage=React.createRef();
    }
    onhandleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.inputname.value);
        console.log(this.inputage.value);
        
    }
    render(){
        return(
            <div>
                <form action="">
                <input type="text" name="name" placeholder='name' ref={input=>this.inputname=input}/>
                <input type="text" name="age" placeholder='age' ref={input=>this.inputage=input}/>
                <button onClick={this.onhandleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}
export default Form1
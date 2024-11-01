import React from "react"

class List extends React.Component{
    onListClick(active){
        alert(active)
    }
    render(){
        console.log(this.props.active);
        const style=this.props.active?{backgroundColor:"green"}:{backgroundColor:"orange"}
        return(
            <span style={style} onClick={this.props.onAction}>{this.props.active?"active":"not active"}</span>
         )
        
    }
}

export default List
import List from "./List";

function Section({title,para,active}){

    return(
        <div className="section1">
            <h2>{title}</h2>
            <p>{para}</p>
            <List onAction={()=>alert("hello")} active={active}/>
            <hr />
            <br />
            <hr />
        </div>
    )
}

export default Section
import { Component } from "react";

class HeaderChild extends Component{
    constructor(props){
        console.log(props)
        super()
    }
    render(){
        return <div style={{background:"grey",color:"whitesmoke"}}>
            {this.props.message}
        </div>
    }
}

export default HeaderChild;
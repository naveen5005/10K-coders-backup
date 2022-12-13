import { Component } from "react";

class HeaderChild extends Component{
    constructor(props){
        console.log(props)
        super()
    }
    render(){
        // desctructing Props
        const{handleChange,message} = this.props;
        return <div>
            <button onClick={handleChange}>Change Message</button>
            <p style={{background:"grey",color:"whitesmoke"}}>{message}</p>
        </div>
    }
}

export default HeaderChild;
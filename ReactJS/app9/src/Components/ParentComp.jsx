import { Component } from "react";
import HeaderChild from "./HeaderChild";

class ParentComp extends Component{
    constructor(){
        super()
        this.state ={
            welcomeMsg : "Welcome to React JS trainings..."
        }
    }
    changeMessage = ()=>{
        this.setState({welcomeMsg : "Hello parent msg, i am child accessing the msg..!!"})
    }
    render(){
        // Destructing state
        const{welcomeMsg} = this.state
        return <div>
            <h2>Welcome to Parent Component</h2>
            {/* <HeaderChild {...this.state}/> */}
            <HeaderChild message ={welcomeMsg} handleChange ={this.changeMessage}/>
        </div>
    }
}

export default ParentComp
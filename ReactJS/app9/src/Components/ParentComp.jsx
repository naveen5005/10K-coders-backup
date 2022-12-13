import { Component } from "react";
import HeaderChild from "./HeaderChild";

class ParentComp extends Component{
    constructor(){
        super()
        this.state ={
            welcomeMsg : "Welcome to React JS trainings..."
        }
    }
    render(){
        return <div>
            <h2>Welcome to Parent Component</h2>
            {/* <HeaderChild {...this.state}/> */}
            <HeaderChild message ={this.state.welcomeMsg} />
        </div>
    }
}

export default ParentComp
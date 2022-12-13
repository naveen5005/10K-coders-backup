import { Component } from "react";

export class FourthClassComp extends Component{
    constructor(){
        super();
        this.state ={
            Users : ["Naveen","Kiran"]
        }
    }
    render(){
        return <h2>Welcome to Forth Class Comp : {this.state.Users[1]}</h2>
    }
}
import { Component } from "react";

export class FourthClassComp extends Component{
    constructor(){
        super();
        this.state={
            contact : "10K Coders"
        }
    }
    render(){
        return <h2>Welcome to Fourth class comp : {this.state.contact}</h2>
    }
}
import { Component } from "react";

export class SecondClassComp extends Component{
    constructor(){
        super();
        this.state={
            fname : ["naveen","kiran","venky","suman"]
        }
    }
    render(){
        return <div>
            <h2>First name = {this.state.fname[0]}</h2>
            <h2>Second name = {this.state.fname[1]}</h2>
            <h2>Third name = {this.state.fname[2]}</h2>
            <h2>Forth name = {this.state.fname[3]}</h2>

        </div>
    }
}
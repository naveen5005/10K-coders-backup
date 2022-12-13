import { Component } from "react";

export class FirstClassComp extends Component{
    constructor(){
        super();
        this.state={
            fname : "Naveen",
            lname : "Kumar",
            email : "naveenkumar@gmail.com",
            phone : "9398345682",
            profession : "Application Development Analyst",
            company : "Accenture",
            experience : "2 years 3 months"
        }
    }
    render(){
        return <div>
            <h2>{this.state.fname+" "+this.state.lname} has {this.state.experience} of experience as an 
            <span> </span>{this.state.profession} in {this.state.company}.</h2>
        </div>
    }
}
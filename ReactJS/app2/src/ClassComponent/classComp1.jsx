import { Component } from "react";

export class FirstClassComp extends Component{
    render(){
        return <h2>Welcome to First class Component</h2>
    }
}

export default class FirstSubClassComp extends Component{
    constructor(){
        super();
        this.state={
            fullName : "Naveen Kumar",
            Person : {
                fname : "Kiran",
                lname : "Kumar",
                gender : "Male"
            },
            Users : ["Naveen","Kiran","Mahesh"]
        }
    }

    render(){
        return <h2>Welcome to the class Mr : {this.state.fullName}</h2>
    }
}
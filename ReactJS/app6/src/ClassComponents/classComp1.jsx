import { Component } from "react";

export class FirstClassComp extends Component{
    render(){
        return <h2>Welcome to First Class Comp</h2>
    }
}

export default class FirstClassSubComp extends Component{
    render(){
        return <h2>Welcome to First Class Sub Comp</h2>
    }
}
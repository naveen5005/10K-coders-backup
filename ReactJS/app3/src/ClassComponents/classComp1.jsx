import { Component } from "react";

export default class FirstClassComp extends Component{
    render(){
        return <h2>Welcome to First class comp</h2>
    }
}

export class FirstClassChildComp extends Component{
    render(){
        return <h2>Welcome to First class child comp</h2>
    }
}
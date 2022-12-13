import { Component } from "react";

class User extends Component{
    constructor(){
        super()
        this.state={
            fname : "",
            lname : ""
        }
    }
    handleChange(e){
        console.log(e)
    }
    addUser(){
        console.log(this.state)
    }
    render(){
        return <div>
            <form action="">
                <label htmlFor="">First Name : </label>
                <input type="text" name="fname" value={this.state.fname} onChange ={(e)=>{this.handleChange(e)}} /> <br />
                <label htmlFor="">Last Name : </label>
                <input type="text" name="lname" value={this.state.lname} onChange ={(e)=>{this.handleChange(e)}} /> <br />
                <button type="button" onClick={this.addUser}>Add User</button>
            </form>
        </div>
    }
}

export default User;
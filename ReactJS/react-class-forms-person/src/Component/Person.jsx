import React, { Component } from 'react'

export default class Person extends Component {
    constructor() {
        super();
        this.state = {
            person: {
                fname: "",
                lname: "",
            },
            allUsers: [
                {
                    fname: "naveen",
                    lname: "Kumar",
                },
                {
                    fname: "Kiran",
                    lname: "",
                },
                {
                    fname: "",
                    lname: "",
                }
            ],
            editIndex: null,
        };
    }
    addUser = () => {
        // console.log(this.state.person);
        var newAllUsers = [...this.state.allUsers];
        newAllUsers.push(this.state.person);
        this.setState({ allUsers: newAllUsers });
        this.clearForm();
    }
    handleChange = (e) => {
        var newPerson = { ...this.state.person };
        newPerson[e.target.name] = e.target.value;
        this.setState({ person: newPerson })
        // console.log(e.target.name)
    }
    clearForm = () => {
        var newForm = {
            fname: "",
            lname: ""
        }
        this.setState({ person: newForm })
    }
    deleteUser = (usr) => {
        var latestUsers = this.state.allUsers.filter((myUser) => myUser.fname != usr.fname)
        this.setState({ allUsers: latestUsers })
    }
    editUser = (usr, i) => {
        // console.log(usr);
        this.setState({ person: usr, editIndex: i })
    }
    updateUser = () => {
        var latestUsers = [...this.state.allUsers];
        latestUsers[this.state.editIndex] = this.state.person;
        this.setState({allUsers:latestUsers,editIndex:null});
        this.clearForm();
    }
    render() {
        return (
            <div>
                <form action="">
                    <label htmlFor="">First Name : </label>
                    <input type="text" name="fname" value={this.state.person.fname} onChange={(e) => { this.handleChange(e) }} /> <br /><br />
                    <label htmlFor="">Last Name : </label>
                    <input type="text" name="lname" value={this.state.person.lname} onChange={(e) => { this.handleChange(e) }} /> <br /><br />
                    {this.state.editIndex != null ? 
                    <button className='btn btn-primary' type="button" onClick={this.updateUser}>Update User</button> : 
                    <button className='btn btn-primary' type="button" onClick={this.addUser}>Add User</button>}

                    {/* <button className='btn btn-primary' type="button" onClick={this.updateUser}>Update User</button> 
                    <button className='btn btn-primary' type="button" onClick={this.addUser}>Add User</button> */}
                </form> <br /> <hr />

                <table className="table">
                    <thead>
                        <tr>
                            <th>First</th>
                            <th>Last</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.allUsers.map((usr, i) => <tr key={i}>
                            <td>{usr.fname}</td>
                            <td>{usr.lname}</td>
                            <td>
                                <button className='btn btn-warning' onClick={() => { this.editUser(usr,i) }}>EDIT</button>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={() => { this.deleteUser(usr) }}>DELETE</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

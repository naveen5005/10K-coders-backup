import React, { Component } from 'react'

export default class UserDetail extends Component {
    constructor(props) {
        super(props)

        this.state = {
            User: {
                fullname: "",
                uname: "",
                email: "",
                pwd: "",
                cfmpwd: "",
                msg: ""
            },
            allUsers: [
                {
                    fullname: "naveen",
                    uname: "naveenkumar",
                    email: "naveenkumar@gmailcom",
                    pwd: "",
                    cfmpwd: "",
                    msg: ""
                },
                {
                    fullname: "mahesh",
                    uname: "",
                    email: "",
                    pwd: "",
                    cfmpwd: "",
                    msg: ""
                },
                {
                    fullname: "kiran",
                    uname: "",
                    email: "kiram@gmail.com",
                    pwd: "",
                    cfmpwd: "",
                    msg: ""
                },
            ],
            editIndex: null
        };
    }

    handleChange = (e) => {
        var newUser = { ...this.state.User }
        newUser[e.target.name] = e.target.value
        this.setState({ User: newUser });
        // console.log(e.target.value);
    }
    addUser = () => {
        // console.log("AddUSer is triggered...");
        var newAllUsers = [...this.state.allUsers];
        newAllUsers.push(this.state.User);
        this.setState({ allUsers: newAllUsers });
        this.clearForm();
    }
    clearForm = () => {
        var newUser = {
            fullname: "",
            uname: "",
            email: "",
            pwd: "",
            cfmpwd: "",
            msg: ""
        }
        this.setState({ User: newUser })
    }
    deleteUser = (usr) => {
        console.log(usr);
        var latestUsers = this.state.allUsers.filter((myUser) => usr.email != myUser.email);
        this.setState({ allUsers: latestUsers })
    }
    editUser = (usr,i) => {
        this.setState({ User: usr,editIndex:i })
    }
    updateUser =()=>{
        var newLatestUser =[...this.state.allUsers];
        newLatestUser[this.state.editIndex] = this.state.User;
        this.setState({allUsers:newLatestUser, editIndex:null});
        this.clearForm();
    }
    render() {
        return (
            <div>
                <form action="">
                    <label htmlFor="">Full Name : </label>
                    <input type="text" name="fullname" value={this.state.User.fullname} onChange={(e) => { this.handleChange(e) }} /> <br /><br />
                    <label htmlFor="">UserName : </label>
                    <input type="text" name='uname' value={this.state.User.uname} onChange={(e) => { this.handleChange(e) }} /> <br /><br />
                    <label htmlFor="">Email : </label>
                    <input type="email" name="email" value={this.state.User.email} onChange={(e) => { this.handleChange(e) }} /> <br /><br />
                    <label htmlFor="">Password</label>
                    <input type="password" name="pwd" value={this.state.User.pwd} onChange={(e) => { this.handleChange(e) }} /> <br /><br />
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="cfmpwd" value={this.state.User.cfmpwd} onChange={(e) => { this.handleChange(e) }} /> <br /><br />
                    <label htmlFor="">Message</label>
                    <textarea name="msg" value={this.state.User.msg} onChange={(e) => { this.handleChange(e) }} cols="30" rows="10"></textarea> <br /><br />
                    {this.state.editIndex != null ?
                        <button type='button' className='btn btn-primary' onClick={this.updateUser}>update User</button> :
                        <button type='button' className='btn btn-primary' onClick={this.addUser}>Add User</button>
                    }
                    <hr />
                    {/* <button type='button' className='btn btn-primary' onClick={this.addUser}>Add User</button>
                    <button type='button' className='btn btn-primary' onClick={this.updateUser}>update User</button> <br /> <br /><hr /> */}

                    <table className="table">
                        <thead className='table-dark'>
                            <tr>
                                <th>Full Name</th>
                                <th>UserName</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Confirm Password</th>
                                <th>Message</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.allUsers.map((usr, i) =>
                                <tr key={i}>
                                    <td>{usr.fullname}</td>
                                    <td>{usr.uname}</td>
                                    <td>{usr.email}</td>
                                    <td>{usr.pwd}</td>
                                    <td>{usr.cfmpwd}</td>
                                    <td>{usr.msg}</td>
                                    <td>
                                        <button type='button' className='btn btn-warning' onClick={() => { this.editUser(usr,i) }}>EDIT</button>
                                    </td>
                                    <td>
                                        <button type='button' className='btn btn-danger' onClick={() => { this.deleteUser(usr) }}>DELETE</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}

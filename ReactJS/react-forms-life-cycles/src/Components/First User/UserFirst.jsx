import axios from 'axios'
import React, { Component } from 'react'

export default class UserFirst extends Component {
    constructor(props) {
        super(props)

        this.state = {
            User: {
                id: '',
                username: "",
                email: "",
                password: ""
            },
            allUsers: [],
            editIndex: null
        }
    }
    handleChange = (e) => {
        // console.log(e)
        // console.log(e.target.value);
        var newUser = { ...this.state.User }
        newUser[e.target.name] = e.target.value;
        this.setState({ User: newUser })
    }
    addUser = () => {
        axios({
            method: 'post',
            url: 'http://localhost:3002/users/',
            data: this.state.User,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        var newLatestUser = [...this.state.allUsers];
        newLatestUser.push(this.state.User);
        this.setState({ allUsers: newLatestUser });
        this.clearForm();
    }
    clearForm() {
        var newUserClear = {
            id: "",
            username: "",
            email: "",
            password: ""
        }
        this.setState({ User: newUserClear });
    }

    deleteUser = (user, id) => {
        var number = id + 1
        console.log(number)
        console.log(user)
        axios.delete("http://localhost:3002/users/" + number).then((res) => {
            this.componentDidMount();
        })
    }

    editUser = (user,i) => {
        console.log(user);
        this.setState({ User: user,editIndex : i })
    }
    updateUser = () => {
        var number = this.state.editIndex+1;
        axios({
            method :'put',
            url: 'http://localhost:3002/users/'+number,
            data: this.state.User
        })

        var newLatestUser = [...this.state.allUsers];
        newLatestUser[this.state.editIndex] = this.state.User;
        this.setState({allUsers:newLatestUser,editIndex:null});
        this.clearForm();
    }
    render() {
        return (
            <div>
                <h1>First User Details</h1>
                <form action="">
                    <label htmlFor="">ID : </label>
                    <input type="number" name="id" value={this.state.User.id} onChange={(e) => { this.handleChange(e) }} disabled /> <br />
                    <label htmlFor="">User Name</label>
                    <input type="text" name="username" value={this.state.User.username} onChange={(e) => { this.handleChange(e) }} /><br />
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" value={this.state.User.email} onChange={(e) => { this.handleChange(e) }} /> <br />
                    <label htmlFor="">Password : </label>
                    <input type="password" name="password" value={this.state.User.password} onChange={(e) => { this.handleChange(e) }} /><br /><br />
                    {this.state.editIndex != null ?
                        <button type='button' className='btn btn-primary' onClick={this.updateUser}>Update User</button> :
                        <button type='button' className='btn btn-primary' onClick={this.addUser}>Add User</button>
                    }

                </form><br /><hr />
                <table className='table'>
                    <thead className='table-dark'>
                        <tr>
                            <th>Id</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.allUsers.map((user, i) => <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>
                                <button type='button' className='btn btn-warning' onClick={() => { this.editUser(user, i) }}>EDIT</button>
                            </td>
                            <td>
                                <button type='button' className='btn btn-danger' onClick={() => { this.deleteUser(user, i) }}>DELETE</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }

    async componentDidMount() {
        let response = await axios.get("http://localhost:3002/users")
        // console.log(response)
        this.setState({ allUsers: response.data })
    }

}

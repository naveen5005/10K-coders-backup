import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUserAction, deleteUserAction, updateUserAction } from '../Stores/Actions/userActions'
import UserTableDetails from './UserTableDetails';

class UsersClassComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user : {
                fname: "",
                lname: "",
                email: ""
            },
            isEdit : false
        }
    }
    handleChange = (e) => {
        var newUser = { ...this.state.user };
        newUser[e.target.name] = e.target.value;
        this.setState({user : newUser});
    }
    addPerson = () => {
        console.log(this.state);
        this.props.addUser(this.state.user);
        this.clearForm();
    }
    updatePerson = () =>{
        this.props.updateUserDetails(this.state.user);
        this.clearForm();
        this.setState({isEdit : false})
    }
    clearForm = () => {
        this.setState({user :{
            fname: "",
            lname: "",
            email: ""
        }})
    }
    userToBeDeleted = (user) => {
        // console.log(user)
        // console.log("delete action triggered...")
        this.props.deleteUser(user)
    }
    editUser = (user) =>{
        this.setState({user : user, isEdit : true});

    }
    render() {
        console.log(this.props.allUsers)
        const { users } = this.props.allUsers
        console.log(users)
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-4">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">First Name</label>
                                <input type="text" value={this.state.user.fname} name='fname' className="form-control" onChange={(e) => { this.handleChange(e) }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">last Name</label>
                                <input type="text" value={this.state.user.lname} name='lname' className="form-control" onChange={(e) => { this.handleChange(e) }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Email Address</label>
                                <input type="email" value={this.state.user.email} name='email' className="form-control" onChange={(e) => { this.handleChange(e) }} />
                            </div>
                            {this.state.isEdit ? <button type="button" onClick={() => { this.updatePerson() }} className="btn btn-primary">Update Person</button>
                            : <button type="button" onClick={() => { this.addPerson() }} className="btn btn-primary">Add Person</button> }
                        </form>
                    </div>
                    <div className="col-8">
                        <table className='table'>
                            <thead className='table-dark'>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <UserTableDetails users={users} editUser = {this.editUser}/>

                                {/* {users.map((user, i) =>
                                    <tr key={i}>
                                        <td>{user.fname}</td>
                                        <td>{user.lname}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button type='button' className='btn btn-warning' onClick={() => this.editUser(user)}>Edit</button>
                                        </td>
                                        <td>
                                            <button type='button' className='btn btn-danger' onClick={() => this.userToBeDeleted(user)}>Delete</button>
                                        </td>
                                    </tr>)
                                } */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state)
    return {
        allUsers: state.users
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addUser: (user) => {dispatch(addUserAction(user))},
        deleteUser: (user) => { dispatch(deleteUserAction(user)) },
        updateUserDetails : (user) =>{dispatch(updateUserAction(user))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersClassComp)
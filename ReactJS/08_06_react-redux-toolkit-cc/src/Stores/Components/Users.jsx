import React, { Component } from 'react'
import { connect } from "react-redux";
import { addUserAction, deleteUserAction, updateUserAction } from '../Slices/userSlice';
class Users extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         users :{
            fname:"",
            lname :"",
            email:""
         },
         isEdit : false,
      }
    }
    handleChange = (e) =>{
        let newUser ={...this.state.users};
        newUser[e.target.name] = e.target.value;
        this.setState({users:newUser})
    }
    addUser =() =>{
        this.props.addUserDetails(this.state.users)
        this.clearForm();
    }
    userToBeDeleted = (user) => {
        console.log(user)
        this.props.deleteUser(user)
    }
    editUser =(user) =>{
        this.setState({users : user,isEdit : true});

    }
    userToBeUpdated =() =>{
        this.props.updateUser(this.state.users);
        this.setState({isEdit:false});
        this.clearForm()
    }
    clearForm =()=>{
        this.setState({users : {
            fname:"",
            lname :"",
            email:""
        }})
    }
    render() {
        console.log(this.props.allUsers)
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-4">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="fname" className="form-label">First Name</label>
                                <input type="text" className="form-control" name='fname' onChange={(e) => { this.handleChange(e) }} value={this.state.users.fname}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lname" className="form-label">Last name</label>
                                <input type="text" className="form-control" name='lname' onChange={(e) => { this.handleChange(e) }} value={this.state.users.lname} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" name='email' onChange={(e) => { this.handleChange(e) }}
                                disabled = {this.state.isEdit} value={this.state.users.email} />
                            </div>
                            {this.state.isEdit ?
                            <button type="button" className="btn btn-primary" onClick={() => { this.userToBeUpdated() }}>Update User</button> 
                            :<button type="button" className="btn btn-primary" onClick={() => { this.addUser() }}>Add User</button>}
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
                                {this.props.allUsers.users.map((user, i) =>
                                    <tr key={i}>
                                        <td>{user.fname}</td>
                                        <td>{user.lname}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button type='button' className='btn btn-warning' onClick={()=>{this.editUser(user)}}>Edit</button>
                                        </td>
                                        <td>
                                            <button type='button' className='btn btn-danger' onClick={() => this.userToBeDeleted(user)}>Delete</button>
                                        </td>
                                    </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        allUsers: state.users
    }
}
function mapDispatchToProps(dispatch) {
    return {
        deleteUser: (user) => { dispatch(deleteUserAction(user)) },
        addUserDetails:(user)=>{dispatch(addUserAction(user))},
        updateUser :(user)=>{dispatch(updateUserAction(user))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)
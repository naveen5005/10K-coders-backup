import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteUserAction } from '../Stores/Actions/userActions'

 class UsersTable extends Component {

  userToBeDeleted =(user)=>{
    this.props.deleteUser(user)
  }
  render() {
    return (
        <>
            {/* {console.log(this.props.users.users[1])} */}
            {this.props.users.users.map((user,i)=>
            <tr key={i}>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.email}</td>
                <td>
                    <button type='button' className='btn btn-warning' onClick={() => {this.props.editUser(user)}}>Edit</button>
                </td>
                <td>
                    <button type='button' className='btn btn-danger' onClick={()=>{this.userToBeDeleted(user)}}>Delete</button>
                </td>
            </tr>)}
        </>
    )
  }
}

function mapStateToProps(state){
    return{
        users : state.users
    }
}
function mapDispatchToProps(dispatch){
    return{
        deleteUser : (user)=>{dispatch(deleteUserAction(user))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UsersTable);
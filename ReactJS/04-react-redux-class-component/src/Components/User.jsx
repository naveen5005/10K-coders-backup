import React, { Component } from 'react'
import { connect } from "react-redux";
import { addUserAction, deleteUserAction } from '..';
class User extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={this.props.addUser}>Add User</button>
        <button>Delete User</button>
        <ul>
            {this.props.allUsers.map((user,i)=> <li key={i}
            onClick ={()=>{this.props.deleteUser(user)}}>{user}</li>)}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
    return{
        allUsers : state.users
    }
}
function mapDispatchToProps(dispatch){
    return{
        addUser :() => dispatch(addUserAction()),
        deleteUser : (user) =>dispatch(deleteUserAction(user))
    }
}
console.log(connect)
export default connect(mapStateToProps,mapDispatchToProps)(User);
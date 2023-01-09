import React, { Component } from 'react'
import { connect } from "react-redux";
import { addUserAction, getDataFromActions, updateUserAction } from '../Stores/Actions/userActions';
import UsersTable from './UsersTable';
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {
        fname: "",
        lname: "",
        email: ""
      },
      isEdit: false
    }
  }
  handleChange = (e) => {
    // console.log(e);
    let newUser = { ...this.state.users };
    newUser[e.target.name] = e.target.value;
    this.setState({ users: newUser })
  }
  addUser = () => {
    this.props.addUser(this.state.users);
    this.clearForm();
  }
  clearForm = () => {
    const { users } = this.state.users
    this.setState({
      users: {
        fname: "",
        lname: "",
        email: ""
      }
    })
  }
  editUser = (user) => {
    console.log(user);
    this.setState({ users: user, isEdit :true })
  }
  UpdateUser = () =>{
    this.props.updateUser(this.state.users);
    this.setState({isEdit : false})
    this.clearForm();
  }
  render() {
    // console.log(this.props.allUsers)
    const { users } = this.props.allUsers
    console.log(users)
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <form action="">
                <label htmlFor="">First Name</label>
                <input type="text" name="fname" value={this.state.users.fname} onChange={(e) => { this.handleChange(e) }} />
                <label htmlFor="">Last Name</label>
                <input type="text" name="lname" value={this.state.users.lname} onChange={(e) => { this.handleChange(e) }} />
                <label htmlFor="">Email</label>
                <input type="email" name="email" value={this.state.users.email} onChange={(e) => { this.handleChange(e) }} /> <br /><br />
                {this.state.isEdit ? <button className='btn btn-primary' type='button' onClick={() => this.UpdateUser()}>Update User</button>
                  : <button className='btn btn-primary' type='button' onClick={() => this.addUser()}>Add User</button>
                }
              </form>
            </div>
            <div className="col-1">

            </div>
            <div className="col-7">
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
                  <UsersTable users={users} editUser={this.editUser} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
  componentDidMount() {
    this.props.getUsers();
  }
}

function mapStateToProps(state) {
  return {
    allUsers: state.users
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getUsers: () => { dispatch(getDataFromActions()) },
    addUser: (user) => { dispatch(addUserAction(user)) },
    updateUser : (user) =>{ dispatch(updateUserAction(user))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);
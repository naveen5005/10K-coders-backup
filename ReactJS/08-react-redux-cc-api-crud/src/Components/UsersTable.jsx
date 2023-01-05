import React, { Component } from 'react'
import { connect } from "react-redux";
import { deleteUserAction, getUsersFromServerAction } from '../Stores/Actions/userActions';

class UsersTable extends Component {
    constructor() {
        super();

        this.state = {
            person: {
                fname: "",
                lname: "",
                email: ""
            },
            editIndex : null
        }
    }
    editUser = (data,i) => {
        console.log(data);
        this.setState({person : data, editUser : i})
    }
    render() {
        // console.log(this.props.userDetails.users.users)
        return (
            <div>
                <table className='table'>
                    <thead className='table-dark'>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>EDIT</th>
                            <th>DELTE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.userDetails.users.users.map((data, i) =>
                            <tr key={i}>
                                <td>{data.fname}</td>
                                <td>{data.lname}</td>
                                <td>{data.email}</td>
                                <td>
                                    <button type='button' className='btn btn-warning' onClick={() => { this.editUser(data,i) }}>Edit</button>
                                </td>
                                <td>
                                    <button type='button' className='btn btn-danger' onClick={() => { this.props.deleteUser(data.id) }} >Delete</button>
                                </td>
                            </tr>)}
                    </tbody>
                </table>

            </div>
        )
    }
    componentDidMount() {
        this.props.getUsers();
    }
}

function mapStateToProps(state) {
    return {
        userDetails: state
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getUsers: () => dispatch(getUsersFromServerAction()),
        deleteUser: (id) => dispatch(deleteUserAction(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersTable)
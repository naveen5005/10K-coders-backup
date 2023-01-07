import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteUserAction } from '../Stores/Actions/userActions';

class UserTableDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            email: ""
        }
    }
    userToBeDeleted = (user) => {
        console.log(user)
        console.log("delete action triggered...")
        this.props.deleteUser(user)
    }

    render() {
        console.log(this.props)
        const { users } = this.props;
        return (
            <>
                {users.map((user, i) =>
                    <tr key={i}>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                        <td>{user.email}</td>
                        <td>
                            <button type='button' className='btn btn-warning' onClick={() => this.props.editUser(user)}>Edit</button>
                        </td>
                        <td>
                            <button type='button' className='btn btn-danger' onClick={() => this.userToBeDeleted(user)}>Delete</button>
                        </td>
                    </tr>)
                }
            </>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.users)
    return {
        allUsers: state.users
    }
}
function mapDispatchToProps(dispatch) {
    return {
        deleteUser: (user) => { dispatch(deleteUserAction(user)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserTableDetails)
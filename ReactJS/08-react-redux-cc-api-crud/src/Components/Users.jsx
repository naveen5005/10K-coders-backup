import axios from 'axios';
import React, { Component } from 'react'
import { connect } from "react-redux";
import { getUsersFromServerAction } from '../Stores/Actions/userActions';
import UsersTable from './UsersTable';
class Users extends Component {
    constructor() {
        super();
        this.state = {
            person: {
                fname: "",
                lname: "",
                email: ""
            },
            editIndex: null
        }
    }
    handleChange = (e) => {
        var newUser = { ...this.state };
        newUser[e.target.name] = e.target.value;
        this.setState(newUser);
    }
    addPerson = async () => {
        await axios.post("http://localhost:3001/users1/", this.state).then((res) => {
            this.clearForm();
            this.componentDidMount();
        })
    }
    clearForm = () => {
        this.setState({
            fname: "",
            lname: "",
            email: ""
        })
    }
    render() {
        console.log(this.props)
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-4">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">First Name</label>
                                <input type="text" name='fname' value={this.state.fname} className="form-control" onChange={(e) => { this.handleChange(e) }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">last Name</label>
                                <input type="text" name='lname' value={this.state.lname} className="form-control" onChange={(e) => { this.handleChange(e) }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Email Address</label>
                                <input type="email" name='email' value={this.state.email} className="form-control" onChange={(e) => { this.handleChange(e) }} />
                            </div>
                            {/* {this.editIndex != null ? <button type="button" onClick={() => { this.updatePerson() }} className="btn btn-primary">Update Person</button>:
                            <button type="button" onClick={() => { this.addPerson() }} className="btn btn-primary">Add Person</button>} */}
                            <button type="button" onClick={() => { this.addPerson() }} className="btn btn-primary">Add Person</button>
                        </form>
                    </div>
                    <div className="col-8">
                        <UsersTable persons={this.props.userDetails} />
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getUsers();
        console.log(this.props.getUsers)
    }
}

function mapStateToProps(state) {
    return {
        userDetails: state.users
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getUsers: () => dispatch(getUsersFromServerAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
import React, { Component } from 'react'
import { connect } from "react-redux";
import { addPersonAction } from '../Stores/actions';
import PersonsTable from './PersonsTable';

class Persons extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fname: "",
            lname: "",
            email: ""
        }
        console.log(this.props);

    }

    handleChange = (e) => {
        const newUser = { ...this.state };
        newUser[e.target.name] = e.target.value;
        this.setState(newUser);
    }
    addPerson = () => {
        this.props.addPerson(this.state);
        this.clearPersonForm();
        // console.log(this.state)
    }
    clearPersonForm=()=>{
        this.setState({
            fname: "",
            lname: "",
            email: "",
          })
      }
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-4">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">First Name</label>
                                <input type="text" name='fname' className="form-control" onChange={(e) => { this.handleChange(e) }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">last Name</label>
                                <input type="text" name='lname' className="form-control" onChange={(e) => { this.handleChange(e) }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Email Address</label>
                                <input type="email" name='email' className="form-control" onChange={(e) => { this.handleChange(e) }} />
                            </div>
                            <button type="button" onClick={() => { this.addPerson() }} className="btn btn-primary">Add Person</button>
                        </form>
                    </div>
                    <div className="col-8">
                        <PersonsTable />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        allPersons: state
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addPerson: (person) => dispatch(addPersonAction(person))
    }
}
// console.log(connect)
export default connect(mapStateToProps, mapDispatchToProps)(Persons);
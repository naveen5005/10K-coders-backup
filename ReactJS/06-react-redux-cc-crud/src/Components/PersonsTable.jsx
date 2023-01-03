import React, { Component } from 'react'
import { connect } from "react-redux";
import { deletePersonAction } from '../Stores/actions';
class PersonsTable extends Component {
  render() {
    console.log(this.props);
    return (
      <div >
        <table className='table'>
            <thead className='table-dark'>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                </tr>
            </thead>
            <tbody>
                {this.props.allPersons.map((person,i)=>
                <tr key={i}>
                    <td>{person.fname}</td>
                    <td>{person.lname}</td>
                    <td>{person.email}</td>
                    <td>
                        <button className='btn btn-warning'>EDIT PERSON</button>
                    </td>
                    <td>
                        <button className='btn btn-danger' onClick={()=>{this.props.deletePerson(person)}}>DELETE PERSON</button>
                    </td>
                </tr>)}
            </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state){
    console.log(state)
    return{
        allPersons : state
    }
}
function mapDispatchToProps(dispatch){
    return{
        deletePerson : (person)=>{dispatch(deletePersonAction(person))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PersonsTable);
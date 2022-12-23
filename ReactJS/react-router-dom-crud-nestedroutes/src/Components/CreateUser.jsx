import React from 'react'
import { useState } from 'react'
function CreateUser() {
    const[user1,setUser1] = useState({
        fname : "",
        lname :"",
        dob : "",
        email :"",
        phnum : ""
    })
    const handleChange =(e)=>{
        var newUser ={...user1};
        newUser[e.target.name] = e.target.value;
        setUser1(newUser)
    }
    const addUser =()=>{
        console.log(user1);
        
        clearForm();
    }
    const clearForm =()=>{
        var userToBeCleared = {
            fname : "",
            lname :"",
            dob : "",
            email :"",
            phnum : ""
        }
        setUser1(userToBeCleared);
    }
    return (
        <div>
            <h2>Welcome to create User Page</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputFname" className="form-label">First Name</label>
                    <input type="text" name='fname' value={user1.fname} onChange={(e)=>{handleChange(e)}} className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputLname" className="form-label">Last Name</label>
                    <input type="text" name='lname' value={user1.lname} onChange={(e)=>{handleChange(e)}} className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputDOB" className="form-label">DOB</label>
                    <input type="date" name='dob' value={user1.dob} onChange={(e)=>{handleChange(e)}} className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                    <input type="email" name='email' value={user1.email} onChange={(e)=>{handleChange(e)}} className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPhnumber" className="form-label">Phone Number</label>
                    <input type="number" name='phnum' value={user1.phnum} onChange={(e)=>{handleChange(e)}} className="form-control"/>
                </div>
                <button type="button" onClick={addUser} className="btn btn-primary">Add User</button>
            </form>
        </div>
    )
}

export default CreateUser

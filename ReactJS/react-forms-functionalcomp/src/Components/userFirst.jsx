import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react' 
import axios from 'axios'

function UserFirst() {
    const [user1,setUser1] =useState({
        fname : "",
        lname : "",
        dob : "",
        email : "",
        phnum : ""
    })
    const [users, setUsers] = useState([]);
    const [isedit,setIsEdit] = useState(false);

    const handleChange =(e)=>{
        var newUser ={...user1};
        newUser[e.target.name] = e.target.value;
        setUser1(newUser);
    }
    const addUser =()=>{
        axios.post("http://localhost:3001/users1",user1).then(()=>{
            getAllUsers();
            clearForm();
        })
    }
    const getAllUsers =()=>{
        axios.get("http://localhost:3001/users1").then((response)=>{
            // console.log(response.data)
            setUsers(response.data)
        })
    }
    useEffect(()=>{
        getAllUsers();
    },[])
    const deleteUser =(user)=>{
        axios.delete("http://localhost:3001/users1/"+user.id).then(()=>{
            getAllUsers();
        })
    }
    const editUser =(user)=>{
        setUser1(user);
        setIsEdit(true);
    }
    const updateUser =()=>{
        axios.put("http://localhost:3001/users1/"+user1.id, user1).then(()=>{
            getAllUsers();
            clearForm();
            setIsEdit(false)
        })
    }
    const clearForm = () =>{
        setUser1({
            fname : "",
            lname : "",
            dob : "",
            email : "",
            phnum : ""
        });

    }
    return (
        <div>
            <h2><u>First Form</u></h2>
            <form action="">
                <div className="mb-3">
                    <label htmlFor="exampleInputfname" className="form-label">First Name</label>
                    <input type="text" className="form-control" name='fname' value={user1.fname} onChange={(e)=>{handleChange(e)}} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputlname" className="form-label">Last Name</label>
                    <input type="text" className="form-control" name='lname'value={user1.lname} onChange={(e)=>{handleChange(e)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputDOB" className="form-label">DOB</label>
                    <input type="date" className="form-control" name='dob'value={user1.dob} onChange={(e)=>{handleChange(e)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' value={user1.email} onChange={(e)=>{handleChange(e)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPhoneNumber" className="form-label">phone Number</label>
                    <input type="tel" className="form-control" name='phnum'value={user1.phnum} onChange={(e)=>{handleChange(e)}}/>
                </div>
                {isedit ? <button type="button" onClick={updateUser} className="btn btn-primary">Update User</button> :
                 <button type="button" onClick={addUser} className="btn btn-primary">Add User</button>}
                
            </form> <hr />
            <table className='table'>
                <thead className='table-dark'>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>DOB</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,i)=> <tr key={i}>
                        <td>{user.id}</td>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                        <td>{user.dob}</td>
                        <td>{user.email}</td>
                        <td>{user.phnum}</td>
                        <td>
                            <button type='button' onClick={()=>{editUser(user)}} className='btn btn-warning'>Edit</button>
                        </td>
                        <td>
                            <button type='button' onClick={()=>(deleteUser(user))} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default UserFirst

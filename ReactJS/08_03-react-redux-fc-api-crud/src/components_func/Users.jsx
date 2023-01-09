import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDataFromServer, getUserFromServerAction, updateDateFromServer } from '../Stores/Actions/userAction'
import UserTable from './UserTable'

const Users = () => {

    const dispatch = useDispatch()
    const userDetails = useSelector((state) => state.users.users)
    // console.log(userDetails)
    const [users, setUsers] = useState({
        fname: "",
        lname: "",
        email: ""
    })
    const [isEdit,setEdit] = useState(false)
    // console.log(users)
    useEffect(() => {
        dispatch(getUserFromServerAction())
    }, [])

    const handleChange = (e) => {
        // console.log(e)
        var newUser = { ...users };
        newUser[e.target.name] = e.target.value;
        setUsers(newUser);
    }
    const editUser = (user) => {
        setUsers(user)
        setEdit(true)
    }
    const addUser = () => {
        setUsers(users)
        // console.log(users)
        dispatch(addDataFromServer(users));
        clearForm();
    }
    const updateUser = () =>{
        setUsers(users);
        dispatch(updateDateFromServer(users));
        setEdit(false);
        clearForm();
    }
    const clearForm = () => {
        setUsers({
            fname: "",
            lname: "",
            email: ""
        })
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-4">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="fname" className="form-label">First Name</label>
                            <input type="text" className="form-control" name='fname' onChange={(e) => { handleChange(e) }} value={users.fname} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lname" className="form-label">Last name</label>
                            <input type="text" className="form-control" name='lname' onChange={(e) => { handleChange(e) }} value={users.lname} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp" name='email' onChange={(e) => { handleChange(e) }} value={users.email} />
                        </div>
                        {isEdit ? <button type="button" className="btn btn-primary" onClick={() => { updateUser()}}>Update User</button> :
                        <button type="button" className="btn btn-primary" onClick={() => { addUser() }}>Add User</button>}
                        
                    </form>
                </div>
                <div className="col-8">
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
                            <UserTable userDetails={userDetails} editUser={editUser} />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Users

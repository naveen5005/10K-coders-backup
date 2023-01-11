import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addUserAction, addUserAsyncAction, deleteUserAction, deleteUserAsyncAction, getAllUsersAsyncAction, updateUserAction, updateUserAsyncAction } from '../Stores/Slices/userSlice';

const UsersFuncComp = () => {

    const [users, setUsers] = useState({
        fname: "",
        lname: "",
        email: ""
    })
    const[isEdit,setIsEdit] = useState(false);
    const handleChange =(e)=>{
        let newUser ={...users}
        newUser[e.target.name] = e.target.value;
        setUsers(newUser)
    }
    // similar to mapStateToProps
    const allUsers = useSelector((state) => state.users);
    console.log(allUsers.users);

    // similar to mapDispatchToProps
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllUsersAsyncAction())
    },[])
    const deleteUser =(user) =>{
        // dispatch(deleteUserAction(user))
        dispatch(deleteUserAsyncAction(user))
    }
    const addUser = () =>{
        // dispatch(addUserAction(users))
        dispatch(addUserAsyncAction(users))
        clearForm();
    }
    const editUser = (user) =>{
        setUsers(user)
        setIsEdit(true)
    }
    const updateUser = () =>{
        // dispatch(updateUserAction(users));
        dispatch(updateUserAsyncAction(users))
        setIsEdit(false)
        clearForm();
    }
    const clearForm = () =>{
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
                        {isEdit ? <button type="button" className="btn btn-primary" onClick={() => { updateUser() }}>Update User</button> :
                            <button type="button" className="btn btn-primary" onClick={() => { addUser() }}>Add User</button>}

                    </form>
                </div>
                <div className="col-8">
                    <table className='table'>
                        <thead className='table-dark'>
                            <tr>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Email</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUsers.users.map((user, i) =>
                                <tr key={i}>
                                    <td>{user.fname}</td>
                                    <td>{user.lname}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button type='button' className='btn btn-warning' onClick={() => editUser(user)}>Edit</button>
                                    </td>
                                    <td>
                                        <button type='button' className='btn btn-danger' onClick={()=>deleteUser(user)}>Delete</button>
                                    </td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UsersFuncComp

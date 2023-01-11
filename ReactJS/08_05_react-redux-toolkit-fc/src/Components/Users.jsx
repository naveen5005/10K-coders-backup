import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addDataFromServerAsync, addUserAction, deleteDataFromServerAsync, deleteUserAction, getDataFromServerAsync, updateDataFromServerAsync, updateUserAction } from '../Stores/Slices/userSlice';

const Users = () => {

    const allUsers = useSelector((state) => state.users);
    // console.log(allUsers);
    const dispatch = useDispatch()
    const [users,setUsers] = useState({
        proName:"",
        price:"",
        category:""
    })
    const [isEdit,setIsEdit] = useState(false)
    const handleChange = (e) =>{
        let newUser = {...users};
        newUser[e.target.name] = e.target.value;
        setUsers(newUser);
    }
    const addUser = () =>{
        console.log(users)
        // dispatch(addUserAction(users));
        dispatch(addDataFromServerAsync(users))
        clearForm();
    }
    const deleteUser =(user) =>{
        console.log(user);
        // dispatch(deleteUserAction(user))
        dispatch(deleteDataFromServerAsync(user))
    }
    const editUser =(user)=>{
        setUsers(user);
        setIsEdit(true)
    }
    const updateUser = () =>{
        // dispatch(updateUserAction(users))
        dispatch(updateDataFromServerAsync(users))
        setIsEdit(false);
        clearForm();
    }
    const clearForm =() =>{
        setUsers({
            proName:"",
            price:"",
            category:""
        })
    }

    useEffect(()=>{
        dispatch(getDataFromServerAsync());
    },[])
    return (
        <div className='container'>
            <div className="row">
                <div className="col-4">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="fname" className="form-label">Product Name</label>
                            <input type="text" className="form-control" name='proName' onChange={(e) => { handleChange(e) }} value={users.proName} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lname" className="form-label">Price</label>
                            <input type="text" className="form-control" name='price' onChange={(e) => { handleChange(e) }} value={users.price} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lname" className="form-label">Category</label>
                            <input type="text" className="form-control" name='category' onChange={(e) => { handleChange(e) }} value={users.category} />
                        </div>
                        {isEdit ? <button type="button" className="btn btn-primary" onClick={() => { updateUser() }}>Update User</button> :
                            <button type="button" className="btn btn-primary" onClick={() => { addUser() }}>Add User</button>}

                    </form>
                </div>
                <div className="col-8">
                    <table className='table'>
                        <thead className='table-dark'>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUsers.users.map((user, i) =>
                                <tr key={i}>
                                    <td>{user.proName}</td>
                                    <td>{user.price}</td>
                                    <td>{user.category}</td>
                                    <td>
                                        <button type='button' className='btn btn-warning' onClick={()=>editUser(user)}>Edit</button>
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

export default Users

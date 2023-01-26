import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addDataFromServer, deleteDataFromServer, getDataFromServer, updateDataFromServer } from '../Actions/userActions';
import UserDetails from './UserDetails'

const Users = () => {
    const dispatch = useDispatch();
    const data = useSelector((state)=> state.users.users);
    console.log(data);
    useEffect(()=>{
        dispatch(getDataFromServer())
    },[])

    const[user,setUser] = useState({
        fname :"",
        lname :"",
        email :""
    })
    const [isEdit,setIsEdit] = useState(false);
    const handleChange =(e)=>{
        let newUser ={...user};
        newUser[e.target.name] = e.target.value;
        setUser(newUser)
    }
    const addUser =()=>{
        setUser(user);
        dispatch(addDataFromServer(user))
        clearForm();
        console.log(user)
    }
    const deleteUser =(user) =>{
        dispatch(deleteDataFromServer(user))
    }
    const editUser = (user) =>{
        setUser(user)
        setIsEdit(true)
    }
    const clearForm = () =>{
        setUser({
            fname : "",
            lname :"",
            email:""
        })
    }
    const updateUser =()=>{
        setUser(user);
        dispatch(updateDataFromServer(user));
        setIsEdit(false);
        clearForm()
    }
  return (
    <div className='container'>
        <div className="row">
            <div className="col-4">
                <form action="">
                    <label htmlFor="">First Name</label>
                    <input type="text" name="fname" onChange={(e)=>{handleChange(e)}} value={user.fname} /> <br />
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="lname" onChange={(e)=>{handleChange(e)}} value={user.lname}/> <br />
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" onChange={(e)=>{handleChange(e)}} value = {user.email}/> <br />
                    {isEdit ? <button type='button' className='btn btn-primary' onClick={()=>{updateUser()}}>Update User</button>
                    :<button type='button' className='btn btn-primary' onClick={()=>{addUser()}}>Add User</button> }
                    
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
                        <UserDetails userData = {data} deleteUser ={deleteUser} editUser = {editUser}/>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Users

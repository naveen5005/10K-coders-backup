import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const User = (myUser) => {
    const navigate = useNavigate();
    const deleteUser = (usr)=>{
        // console.log(usr);
        navigate("/delete/"+usr.id);
    }
    const editUser =(usr)=>{
        navigate("/edit/"+usr.id);
    }
    return (
        <tr>
            <td>{myUser.myUser.uname}</td>
            <td>{myUser.myUser.pwd}</td>
            <td>{myUser.myUser.email}</td>
            <td>{myUser.myUser.presentGender}</td>
            <td>{myUser.myUser.interestedGender}</td>
            <td>{myUser.myUser.year}</td>
            <td>{myUser.myUser.month}</td>
            <td>{myUser.myUser.date}</td>
            <td>
                <button type='button' className='btn btn-warning' onClick={()=>{editUser(myUser.myUser)}}>Edit</button>
            </td>
            <td>
                <button type='button' className='btn btn-danger' onClick={()=>{deleteUser(myUser.myUser)}}>Delete</button>
            </td>
        </tr>
    )
}

export default User

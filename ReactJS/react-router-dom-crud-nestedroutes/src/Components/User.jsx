import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function User({ myUser }) {
    // console.log(myUser);
    const navigate = useNavigate();
    const handleDelete = (usr) => {
        console.log(usr);
        navigate('/delete/' + usr.id);
    }
    const handleEdit =(usr)=>{
        navigate('/edit/' + usr.id);
    }
    return (
        <tr>
            <td>{myUser.fname}</td>
            <td>{myUser.lname}</td>
            <td>{myUser.dob}</td>
            <td>{myUser.email}</td>
            <td>{myUser.phnum}</td>
            <td>
                <button className='btn btn-warning' onClick={() => { handleEdit(myUser) }}>Edit</button>
            </td>
            <td>
                <button className='btn btn-danger' onClick={() => { handleDelete(myUser) }}>Delete</button>
            </td>
        </tr>
    )
}

export default User

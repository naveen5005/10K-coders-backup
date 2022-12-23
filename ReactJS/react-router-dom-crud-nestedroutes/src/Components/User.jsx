import React from 'react'
import DeleteUser from './DeleteUser'
import { Link } from 'react-router-dom';

function User({ myUser }) {
    // console.log(myUser);
    const handleDelete = (usr) => {
        console.log(usr);
        <DeleteUser delUser={usr} />
    }
    return (
        <tr>
            <td>{myUser.fname}</td>
            <td>{myUser.lname}</td>
            <td>{myUser.dob}</td>
            <td>{myUser.email}</td>
            <td>{myUser.phnum}</td>
            <td>
                <Link to={"/edit"}><button className='btn btn-warning'>Edit</button></Link>
            </td>
            <td>
                <Link to={"/delete"}>
                    <button className='btn btn-danger' onClick={() => { handleDelete(myUser) }}>Delete</button>
                </Link>

            </td>
        </tr>
    )
}

export default User

import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteDataFromServer } from '../Stores/Actions/userAction';

const UserTable = ({userDetails,editUser}) => {
    // console.log(userDetails)
 const dispatch = useDispatch();
//   const deleteUser =(user) =>{
//     dispatch(deleteDataFromServer(user.id))
//   }
  return (
    <>
        {userDetails.map((user,i)=>
        <tr key={i}>
            <td>{user.fname}</td>
            <td>{user.lname}</td>
            <td>{user.email}</td>
            <td>
                <button type='button' className='btn btn-warning' onClick={() => {editUser(user)}}>Edit</button>
            </td>
            <td>
                <button type='button' className='btn btn-danger' onClick={()=>{dispatch(deleteDataFromServer(user))}}>Delete</button>
            </td>
        </tr>)}
    </>
  )
}

export default UserTable

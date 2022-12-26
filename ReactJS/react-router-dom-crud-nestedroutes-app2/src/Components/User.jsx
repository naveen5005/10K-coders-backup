import React from 'react'
import { useNavigate } from "react-router-dom";
const User = ({myUser}) => {
    // console.log(myUser)
 const navigate =useNavigate();
 const deleteUser =(usr)=>{
    // console.log(usr);
    navigate("/delete/"+usr.id)
 }
 const editUser =(usr)=>{
    // console.log(usr);
    navigate("/edit/"+usr.id)
 }
  return (
    <tr>
        <td>{myUser.university}</td>
        <td>{myUser.institute}</td>
        <td>{myUser.branch}</td>
        <td>{myUser.degree}</td>
        <td>{myUser.status}</td>
        <td>{myUser.areasofInterest}</td>
        <td>{myUser.avgCPI}</td>
        <td>{myUser.experience}</td>
        <td>{myUser.website}</td>
        <td>
            <button type='button' className='btn btn-warning' onClick={()=>{editUser(myUser)}}>EDIT</button>
        </td>
        <td>
            <button type='button' className='btn btn-danger' onClick={()=>{deleteUser(myUser)}}>DELETE</button>
        </td>
    </tr>
  )
}

export default User

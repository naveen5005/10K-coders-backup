import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import User from './User'

const Users = () => {
  const[user3,setUser3] = useState([])
  useEffect(()=>{
    getAllUsers();
  },[])
  const getAllUsers =async ()=>{
    let response = await (await fetch("http://localhost:3001/users3")).json();
    // console.log(response);
    setUser3(response);
  }
  return (
    <div>
      <table className='table'>
        <thead className='table-secondary'>
            <tr>
                <th>UserName</th>
                <th>Password</th>
                <th>Email</th>
                <th>Present Gender</th>
                <th>Interested Gender</th>
                <th>Year</th>
                <th>Month</th>
                <th>Date</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {user3.map((element,i)=><User myUser ={element} key={i}/>)}
        </tbody>
      </table>
    </div>
  )
}

export default Users

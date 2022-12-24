import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import User from './User';

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, [])

  const getAllUsers = async () => {
    const response = await (await fetch("http://localhost:3001/users1")).json();
    // console.log(response);
    setUsers(response);
  }
  return (
    <div>
      <table className='table'>
        <thead className='table-dark'>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date Of Birth</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((data, i) => <User myUser={data} key={i} />)}
        </tbody>
      </table>
    </div>
  )
}

export default Users

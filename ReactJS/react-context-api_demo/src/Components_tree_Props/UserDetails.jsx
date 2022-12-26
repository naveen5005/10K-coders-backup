import React from 'react'

const UserDetails = ({allUsers}) => {
    console.log(allUsers)
  return (
    <div>
      <h2>Welcome to User Details component</h2>
      <hr />
      <ul>
        {allUsers.map((user,i)=> <li key={i}>{user}</li>)}
      </ul>
    </div>
  )
}

export default UserDetails

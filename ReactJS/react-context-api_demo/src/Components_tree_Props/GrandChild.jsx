import React from 'react'
import UserDetails from './UserDetails'

const GrandChild = ({allUsers}) => {
  return (
    <div>
      <h2>Welcome to Grand Child component</h2>
      <UserDetails allUsers = {allUsers}/>
    </div>
  )
}

export default GrandChild

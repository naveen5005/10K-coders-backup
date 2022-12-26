import React from 'react'
import GrandChild from './GrandChild'

const Child = ({allUsers}) => {
  return (
    <div>
      <h2>Welcome to Child component</h2>
      <GrandChild allUsers = {allUsers}/>
    </div>
  )
}

export default Child

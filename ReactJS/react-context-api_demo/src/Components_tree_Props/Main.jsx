import React from 'react'
import Parent from './Parent'

const Main = ({allUsers}) => {
  return (
    <div>
      <h2>Welcome to Main component</h2>
      <Parent allUsers = {allUsers}/>
    </div>
  )
}

export default Main

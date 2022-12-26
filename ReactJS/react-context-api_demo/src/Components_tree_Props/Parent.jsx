import React from 'react'
import Child from './Child'

const Parent = ({allUsers}) => {
  return (
    <div>
      <h2>Welcome to Parent component</h2>
      <Child allUsers={allUsers}/>
    </div>
  )
}

export default Parent

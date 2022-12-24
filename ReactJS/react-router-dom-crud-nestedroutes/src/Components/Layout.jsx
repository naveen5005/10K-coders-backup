import React from 'react'
import { Outlet } from 'react-router-dom'
import Users from './Users'

function Layout() {
  return (
    <div>
      <br />
      <h2>Welcome to CRUD Applications</h2> <br /><br />
      {/* <Users/> */}
      <Outlet/>
    </div>
  )
}

export default Layout

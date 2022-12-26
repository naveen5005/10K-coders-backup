import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <br />
      <h1>Welcome to CRUD Application App3</h1> <br />
      <Outlet/>
    </div>
  )
}

export default Layout

import React from 'react'
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <h1>Welcome to CRUD Application App2</h1> <br /><br />
      <Outlet/>
    </div>
  )
}

export default Layout

import React from 'react'
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <h2>Welcome to CRUD Application using context API</h2> <br />
      <Outlet/>
    </div>
  )
}

export default Layout

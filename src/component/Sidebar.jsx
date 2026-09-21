import React from 'react'
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
     <aside>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/tasks">Tasks</NavLink>
      <NavLink to="/settings">Settings</NavLink>
    </aside>
  )
}

export default Sidebar
// import { useState } from 'react'
import { dashboard } from '../constants'
import { logo, dashboardimg, logout } from '../assets/'

const LeftSide = () => {
  return (
    <div>
      <img src={logo} alt="logo" />
      <div>
        <img src={dashboardimg} alt="dashboard logo"/> 
        <p>Dashboard</p>
      </div>

      <div>
        {dashboard.map((nav) => ( 
          <li key={nav.id}>
            <img src={nav.img} alt="image"/>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </div>
      <div>
        <img src={logout} alt="logout logo"/>
        <p>Log Out</p>
      </div>
    </div>
  )
}

export default LeftSide
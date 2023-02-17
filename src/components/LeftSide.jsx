import React from 'react';
import { dashboard } from '../constants';
import { logo, dashboardimg, logout } from '../assets/';

const LeftSide = () => {
  return (
    <div className='left-section'>
      <div className='logo'> <img src={logo} alt="logo" /> </div>
      <section className='dashboard'>
        <img src={dashboardimg} alt="dashboard logo"/> 
        <p>Dashboard</p>
      </section>

      <section className='navlinks'>
        {dashboard.map((nav) => ( 
          <li key={nav.id}>
            <img src={nav.img} alt="image"/>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </section>
      
      <section className='logout'>
        <img src={logout} alt="logout logo"/>
        <p>Log Out</p>
      </section>
    </div>
  )
}

export default LeftSide
import React from 'react';
import { notification, profile } from '../assets';
import { RecentTransactions, Assets }  from "./";
const RightSide = () => {
  return (
    <div className='right-section'>
      <div className='navbar'>
        <div className='notification'>
          <img src={notification} alt="notification logo"/>
        </div>
        <img src={profile} alt="profile logo"/>
      </div>
      
      <RecentTransactions />
      <Assets />
    </div>
  )
}

export default RightSide
import React from 'react'
import { notification, profile } from '../assets'
import { transactions } from '../constants'
import { assets } from '../constants'
const RightSide = () => {
  return (
    <div>
      <img src={notification} alt="notification logo"/>
      <img src={profile} alt="profile logo"/>

      <h2>Recent Transactions</h2>
      
      <section>
        {transactions.map((transaction) => ( 
          <div key={transaction.id}>
            <img src={transaction.icon} alt="icon"/>
            <div>
              <p>{transaction.title}</p>
              <p>{transaction.content}</p> 
            </div> 
            <div>
              <p>{transaction.stat}</p>
              <p>{transaction.date}</p>
            </div>
          </div>
        ))}
      </section>

      <section>
          {assets.map((asset) => (
            <div key={asset.id}>
              <img src={asset.icon} alt="assets icon"/>
              <p>{asset.title}</p>
              <p>{asset.wallet}</p>
              <p>{asset.content}</p>
            </div>
          ))}
      </section>
    </div>
  )
}

export default RightSide
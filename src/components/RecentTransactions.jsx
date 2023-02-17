import React from 'react';
import { transactions } from '../constants';
const RecentTransactions = () => {
  return (
    <div>
      <section className='recent'>
        <h2>Recent Transactions</h2>
        {transactions.map((transaction) => {
          if (transaction.id === transactions[2].id) {
            return (
            <div key={transaction.id}>
            <div className='recentTransaction'>
              <section>
                <img src={transaction.icon} alt="icon"/>
              </section>
              <div className='name'>
                <p>{transaction.title}</p>
                <p className='opacity'>{transaction.content}</p> 
              </div> 
              <div>
                <p className='statRed'>{transaction.stat}</p>
                <p className='opacity'>{transaction.date}</p>
              </div>
            </div>
          </div>
          )} else { 
            return (
            <div key={transaction.id}>
            <div className='recentTransaction'>
              <section>
                <img src={transaction.icon} alt="icon"/>
              </section>
              <div className='name'>
                <p>{transaction.title}</p>
                <p className='opacity'>{transaction.content}</p> 
              </div> 
              <div>
                <p className='stat'>{transaction.stat}</p>
                <p className='opacity'>{transaction.date}</p>
              </div>
            </div>
          </div>
        )}
        })}
      </section>
    </div>
  )
}

export default RecentTransactions
import React from 'react'
import { search } from '../assets'
import { stats, balances } from '../constants'
const Main = () => {
  return (
    <div className='main-section'>
      <section className='header'>
        <h1>Hi, Rogers</h1>
        <div className='search'>
          <img src={search} alt="search logo" />
          <input type="text" placeholder='Search' />
        </div>
      </section>

      <section className='navbar'>
        <div className='balance'>
          <h2>Total Balance</h2>
          <div className='price'>
            <p>0.97894652</p>
            <div>
              <p>BTC</p>
            </div>
          </div>
          <p className='total'>$40,123.56</p>
        </div>
        <div className='link'>
            {balances.map((balance) => (
              <div key={balance.id}>
                <li>{balance.title}</li>
              </div>
            ))}
        </div>
      </section>

      <section className='recentTransactions'>
        <div className='recent'>
          <h2>Recent Transactions</h2>
          <p>See all coins</p>
        </div>
        <div>
          {stats.map((stat) => (
            <div key={stat.id}>
              <div className='box'>
                <img src={stat.icon} alt="icon" />
                <div className='name'>
                  <p> {stat.title} </p>
                  <p> {stat.content} </p>
                </div>
                <div className='content'>
                  <p>{stat.name}</p>
                  <p>{stat.wallet}</p>
                </div>
                <div>
                  <p>{stat.timer}</p>
                  <p>{stat.coefficient}</p>
                </div>
                <div className='curve'>
                  <img src={stat.img} alt="curve" />
                </div>
      
                <div>
                  <p> {stat.trade} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Main
import React from 'react'
import { search } from '../assets'
import { stats, balances } from '../constants'
const Main = () => {
  return (
    <div>
      <section>
        <h1>Hi, Rogers</h1>
        <div>
          <img src={search} alt="search logo" />
          <input type="text" placeholder='Search'/>
        </div>
      </section>

      <section>
        <div>
          <h2>Total Balance</h2>
          <div>
            <p>0.97894652 </p>
            <div>
              <p>BTC</p>
            </div>
          </div>
          <p>$40,123.56</p>
        </div>
        <div>
          {balances.map((balance) => (
            <div key={balance.id}>
              <li>{balance.title}</li>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div>
          <h2>Recent Transactions</h2>
          <p>See all coins</p>
        </div>
        <div>
          {stats.map((stat) => (
            <div key={stat.id}>
              <img src={stat.icon} alt="icon" />
              <div>
                <p> {stat.title} </p>
                <p> {stat.content} </p>
              </div>
              <div>
                <p>{stat.name}</p>
                <p>{stat.wallet}</p>
              </div>
              <div>
                <p>{stat.timer}</p>
                <p>{stat.coefficient}</p>
              </div>
              <img src={stat.img} alt="curve" />
              <div>
                <p> {stat.trade} </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Main
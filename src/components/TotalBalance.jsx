import React from 'react';
import { balances } from '../constants';
const TotalBalance = () => {
  return (
    <div>
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
                {balances.map((balance) => {
                    if(balance.id === balances[0].id) {
                    return (
                        <div key={balance.id}>
                        <div className='box'>
                            <li>{balance.title}</li>
                        </div>
                        </div>
                    )
                } else { 
                    return (
                    <div key={balance.id}>
                        <li>{balance.title}</li>
                    </div>
                    )
                }
                })}
            </div>
        </section>
    </div>
  )
}

export default TotalBalance
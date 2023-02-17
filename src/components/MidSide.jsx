import React from 'react';
import { search } from '../assets';
import { TotalBalance, Graph, CoinTransaction} from './';
const MidSide = () => {
  return (
    <div className='main-section'>
      <section className='header'>
        <h1>Hi, Rogers</h1>
        <div className='search'>
          <img src={search} alt="search logo" />
          <input type="text" placeholder='Search' />
        </div>
      </section>
      
      <TotalBalance />
      <Graph />
      <CoinTransaction />
    </div>
  )
}

export default MidSide
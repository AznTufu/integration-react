import React from 'react';
import { assets } from '../constants';
const Assets = () => {
  return (
    <div>
      <section className='Assets'>
        <h2>Assets</h2>
          {assets.map((asset) => {
            if(asset.id === assets[0].id) {
              return (
                <div key={asset.id}>
                  <div className='box'>
                    <div className='asset-card'>
                      <img src={asset.icon} alt="assets icon"/>
                      <p>{asset.title}</p>
                      <div className='flex'>
                        <p>{asset.wallet}</p>
                        <p>{asset.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
            )} else {
              return (
                <div key={asset.id}>
                  <div className='box2'>
                    <div className='asset-card'>
                      <img src={asset.icon} alt="assets icon"/>
                      <p>{asset.title}</p>
                      <div className='flex'>
                        <p>{asset.wallet}</p>
                        <p>{asset.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            })}
      </section>
    </div>
  )
}

export default Assets
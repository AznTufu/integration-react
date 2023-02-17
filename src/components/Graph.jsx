import React from 'react';
import { rightarrow, leftarrow } from '../assets';
import  { dates, menus, gains, days } from '../constants';
const Graph = () => {
  return (
    <div>
      <section className='navlink'>
        <div>
          {dates.map((date) => {
            if(date.id === dates[1].id) {
              return (
                <div key={date.id}>
                  <div className='boxWhite'>
                    <p>{date.title}</p>
                  </div>
                </div>
            )} else if (date.id === dates[5].id) {
              return (
                <div key={date.id}>
                  <div className='box'>
                    <img src={date.title} alt="calendar icon" />
                  </div>
                </div>
            )}else {
              return (
                <div key={date.id}>
                  <div className='box'>  
                    <p>{date.title}</p>
                  </div>
                </div>
              )}
            })}
        </div>
        <div>
          {menus.map((menu) => {
            if (menu.id === menus[0].id) {
              return(
                <div key={menu.id}>
                <div className='box'>
                  <img src={menu.img} alt="bitcoin icon" />
                  <p>{menu.title}</p>
                  <img src={menu.icon} alt="down arrow logo" />
                </div>
                <img src="arrow" alt="arrow image" />
              </div>
              )} else {
                return (
                <div key={menu.id}>
                  <div className='box'>
                    <img src={menu.img} alt="bitcoin icon" />
                    <p>{menu.title}</p>
                    <img src={menu.icon} alt="down arrow logo" />
                  </div>
                </div>
              )}
            })}
        </div>
      </section>

      <section>
        <div>
          {gains.map((gain) => (
            <div key={gain.id}>
              <div className='box'>
                <p>{gain.title}</p>
              </div>
            </div>
            )
          )}
        </div>
      </section>

      <section>
        <div>
          {days.map((day) => (
            <div key={day.id}>
              <div className='box'>
                <p>{day.title}</p>
              </div>
            </div>
            )
          )}
        </div>
      </section>
  </div>
  )
}

export default Graph
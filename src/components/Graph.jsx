import React from "react";
import { arrow, graph } from "../assets";
import { dates, menus, gains, days } from "../constants";
const Graph = () => {
  return (
    <div className="container">
      <div className="graph">
        <section className="navlink">
          <div className="date">
            {dates.map((date) => {
              if (date.id === dates[1].id) {
                return (
                  <div key={date.id}>
                    <div className="boxWhite">
                      <p>{date.title}</p>
                    </div>
                  </div>
                );
              } else if (date.id === dates[5].id) {
                return (
                  <div key={date.id}>
                    <div className="box">
                      <img src={date.title} alt="calendar icon" />
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={date.id}>
                    <div className="box">
                      <p>{date.title}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="menu">
            {menus.map((menu) => {
              if (menu.id === menus[0].id) {
                return (
                  <div key={menu.id}>
                    <div className="box">
                      <div className="content">
                        <img src={menu.img} alt="bitcoin icon" />
                        <p>{menu.title}</p>
                        <img src={menu.icon} alt="down arrow logo" />
                      </div>
                      <img src={arrow} alt="arrow image" className="arrow"/>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={menu.id}>
                    <div className="box">
                      <div className="content">
                          <img src={menu.img} alt="bitcoin icon" />
                          <p>{menu.title}</p>
                          <img src={menu.icon} alt="down arrow logo" />
                        </div>
                      </div>
                  </div>
                );
              }
            })}
          </div>
        </section>

        <section>
          <div className="courbe">
            <div className="gain">
              {gains.map((gain) => (
                <div key={gain.id}>
                  <div className="box">
                    <p>{gain.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="graph">
              <img src={graph} alt="arrow image"/>
            </div>
          </div>
         
        </section>
       
        <section>
          <div className="day">
            {days.map((day) => (
              <div key={day.id}>
                <div className="box">
                  <p>{day.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Graph;

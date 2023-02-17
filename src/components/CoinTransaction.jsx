import React from "react";
import { stats } from "../constants";
const CoinTransaction = () => {
  return (
    <div>
      <section className="recentTransactions">
        <div className="recent">
          <h2>Recent Transactions</h2>
          <p>See all coins</p>
        </div>
        <div>
          {stats.map((stat) => {
            if (stat.id === stats[0].id) {
              return (
                <div key={stat.id}>
                  <div className="box">
                    <img src={stat.icon} alt="icon" />
                    <div className="name">
                      <p className="title"> {stat.title} </p>
                      <p className="statContent"> {stat.content} </p>
                    </div>
                    <div className="content">
                      <p>{stat.name}</p>
                      <p className="wallet">{stat.wallet}</p>
                    </div>
                    <div>
                      <p>{stat.timer}</p>
                      <p className="coefficient">{stat.coefficient}</p>
                    </div>
                    <div className="curve">
                      <img src={stat.img} alt="curve" />
                    </div>
                    <div className="trade">
                      <p> {stat.trade} </p>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={stat.id}>
                  <div className="box">
                    <img src={stat.icon} alt="icon" />
                    <div className="name">
                      <p className="title"> {stat.title} </p>
                      <p className="statContent"> {stat.content} </p>
                    </div>
                    <div className="content">
                      <p>{stat.name}</p>
                      <p className="walletPurple">{stat.wallet}</p>
                    </div>
                    <div>
                      <p>{stat.timer}</p>
                      <p className="coefficientRouge">{stat.coefficient}</p>
                    </div>
                    <div className="curve">
                      <img src={stat.img} alt="curve" />
                    </div>
                    <div className="trade">
                      <p> {stat.trade} </p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </section>
    </div>
  );
};

export default CoinTransaction;

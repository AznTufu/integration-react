import { dashboardimg, clients, products, messages, settings, help, usdt, bnb, litecoin, bitcoin, etherum, bitcoin2 } from "../assets";
export const balance = [
    {
      id: "portfolio",
      title: "Portfolio",
    },
    {
      id: "funding",
      title: "Funding",
    },
    {
      id: "assets",
      title: "Assets",
    },
    {
      id: "p2p",
      title: "P2P",
    },
  ];
  
export const dashboard = [
    {
        id: "dashboard-1",
        title: "Invoices",
        img: dashboardimg,
    },
    {
        id: "dashboard-2",
        title: "Clients",
        img: clients,
    },
    {
        id: "dashboard-3",
        title: "Product",
        img: products,
    },
    {
        id: "dashboard-4",
        title: "Messages",
        img: messages,
    },
    {
        id: "dashboard-5",
        title: "Settings",
        img: settings,
    },
    {
        id: "dashboard-6",
        title: "Help",
        img:  help,
    },
];

export const transactions = [
  {
    id: "usdt",
    icon: usdt,
    title: "Usdt",
    stat:"+ 3.546",
    date : "Today, 1:45 pm",
    content:
      "Recieved",
    
  },
  {
    id: "bnb",
    icon: bnb,
    title: "BNB",
    stat:"+ 0.7546",
    date : "Today, 10:02 am",
    content:
      "Buy",
  },
  {
    id: "lite-coin",
    icon: litecoin,
    title: "Lite Coin",
    stat:"+ 0.7546",
    date : "Today, 8:55 am",
    content:
      "Withdrawal",
  },
  {
    id: "bitcoin-1",
    icon: bitcoin,
    title: "Bitcoin",
    stat:"+ 2.7546",
    date : "Today, 7:55 am",
    content:
      "Recieved",
  },
  {
    id: "etherum-1",
    icon: etherum,
    title: "Etherum",
    stat:"+ 1.646",
    date : "Today, 5:45 am",
    content:
      "Recieved",
  },
];

export const assets = [
  {
    id: "bitcoin",
    icon: bitcoin2,
    title: "Bitcoin",
    wallet:"121,6450.45",
    content:
      "BTC",
  },
  {
    id: "etherum",
    icon: etherum,
    title: "Etherum",
    wallet:"143,850.45",
    content:
      "ETH",
  },
];
import React from 'react'
import { LeftSide, Main, RightSide, NavBar } from "./components";

const App = () => (
  <div className='test'>
    <h1>Hello world</h1>

    <div>
      <NavBar />
      <LeftSide />
      <Main />
      <RightSide />
    </div>
  </div>
)

export default App
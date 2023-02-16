import React from 'react'
import { LeftSide, Main, RightSide, NavBar } from "./components";

const App = () => (
  <div className='test'>
    <div>
      {/* <NavBar /> */}
      <LeftSide />
      <Main />
      <RightSide />
    </div>
  </div>
)

export default App

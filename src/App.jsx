import React from 'react'
import { LeftSide, Main, RightSide, NavBar } from "./components";

const App = () => (
  <div>
    <div className='section'>
      {/* <NavBar /> */}
      <LeftSide />
      <Main />
      {/* <RightSide /> */}
    </div>
  </div>
)

export default App

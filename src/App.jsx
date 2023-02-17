import React from 'react';
import { LeftSide, MidSide, RightSide, NavBar } from "./components";

const App = () => (
  <div>
    <div className='section'>
      {/* <NavBar /> */}
      <LeftSide />
      <MidSide />
      <RightSide />
    </div>
  </div>
)

export default App

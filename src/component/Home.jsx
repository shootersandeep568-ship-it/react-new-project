import React from 'react'
import Header from './Header'
import Slider from './componet1/Slider';
import Project from './Project';
import Nowbar from './componet1/Nowbar';


function Home() {
  return (
    <>
      <div>
        <Header />
        <Slider />
        <Project />
        <Nowbar />
      </div>
    </>
  )
}

export default Home

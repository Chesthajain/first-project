import React from 'react';
import vg from "../Assets/2.webp"

const Home = () => {
  return (
    <>
    <div className='home'>
        <main>
            <h1>TechnoStar</h1>
            <p>Soltions that are mindBlowing</p>
        </main>
    </div>
    <div className='home2'>

      <img src = {vg} alt="Graphics"></img>
      <div>
        <p> We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.</p>
      </div>
      </div></>
  )
}

export default Home;
import React from 'react';
import './Home.css'
import shoes from '../assets/shoes1.jpg'

function Home() {
  return (
    <div>
      <div className = "container">
        <div className='left'>
        <div className='paragraph'>
          <p>New In</p>
        </div>
        <div className='headers'>
          <h1>Yeezy <span>Boost</span></h1>
          <h1>Sply - <span>350</span> </h1>
          <p>Explore the new collections of sneokers</p>
          <button><a href='https://www.shoppersstop.com/'>Explore now</a></button>
        </div>

        </div>
      
        <div className='img'>
          <img src = {shoes} className='img_1'/>
        </div>

      </div>
    </div>
  )
}

export default Home
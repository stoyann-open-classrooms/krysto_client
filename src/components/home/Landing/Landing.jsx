import React from 'react'
import Coins from '../../../assets/coins/coinGif.gif'
import './landing.css'
function Landing() {
  return (
    <section className='container '>
      <div className="landing-container">
        <div className="landing-image">
          <img className="image is-64x64 mb-6" src={Coins} alt="" />
        </div>
        <hgroup>
          <h1 className="big-title ">
            Le troc nouvelle génèration.
          </h1>
          <h2>
            donner, pretez, troquer et gagner en pouvoir d'achat
          </h2>
        </hgroup>
      </div>
    </section>
  )
}

export default Landing

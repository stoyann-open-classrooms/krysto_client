import React from 'react'
import Coins from '../../../assets/coins/coinGif.gif'
import './landing.css'
function Landing() {
  return (
    <section>
        <div className="landing-container">

      <div className="landing-image">
        <img className="image is-64x64 mb-6" src={Coins} alt="" />
      </div>
      <hgroup>
        <h1 className="title is-3 p-5  big-title mb-0">
          Le troc nouvelle génèration.
        </h1>
        <h2 className="subtitle is-5">
          Gagner en pouvoir d'achat, grâce a la blockchain
        </h2>
      </hgroup>
   
        </div>
    </section>

  )
}

export default Landing

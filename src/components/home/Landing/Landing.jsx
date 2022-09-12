import React from 'react'
import Coins from '../../../assets/coins/coinGif.gif'
import Pig from '../../../assets/icones/black/save-monny-pig.png'
import './landing.css'
function Landing() {
  return (
    <section>
        <div className="landing-container">

      <div className="landing-image">
        <img className="image is-64x64 mb-6" src={Coins} alt="" />
      </div>
      <hgroup>
        <h1 className="title p-5  big-title ">
          Le troc nouvelle génèration.
        </h1>
        <h2 className="big-subtitle">
          Gagner en pouvoir d'achat, grâce a la blockchain
        </h2>
      </hgroup>
      <img src={Pig} alt="" />   
        </div>
    </section>

  )
}

export default Landing

import React from 'react'
import './heroTitle.css'
function HeroTitle(props) {
  return (
    <div className="hero p-4">
      <div className="hero-container">
        <div className="hero-txt">

        <h1>{props.title}</h1>
        </div>
        {props.subtitle ?  <h3>{props.subtitle}</h3> : '' }
        {props.image ? 
        <div className="hero-image">
        <img className='image is-64x64' src= {props.image} alt="" />
        </div>
        : ''}
      </div>
    </div>
  )
}

export default HeroTitle

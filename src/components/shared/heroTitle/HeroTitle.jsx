import React from 'react'

function HeroTitle(props) {
  return (
    <div className="hero p-4">
      <div className="hero-container">
        <h1>{props.title}</h1>
        {props.subtitle ?  <h3>{props.subtitle}</h3> : '' }
      </div>
    </div>
  )
}

export default HeroTitle

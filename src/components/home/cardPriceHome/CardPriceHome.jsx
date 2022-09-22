import React from 'react'
import { FaCheck } from 'react-icons/fa'
import './cardPrice.css'
function CardPriceHome({price, time , name}) {
  return (
<div className="price-card">
    <div className='card-price-home'>
<h3>{name}</h3>
    
    <span>{price}</span>/{time}
</div>

    <p className="info-card">
        <FaCheck/>
        Gérer vos comptes
    </p>
    <p className="info-card">
        <FaCheck/>
        Recevoir des krysto
    </p>
    <p className="info-card">
        <FaCheck/>
        Publier des annonces
    </p>
    <p className="info-card">
        <FaCheck/>
        Payer en Krysto
    </p>
    <p className="info-card">
        <FaCheck/>
   Echanger des Krysto
    </p>
    <p className="info-card">
        <FaCheck/>
       Répondre au annonces
    </p>
<button className='card-price-btn'>Choisir</button>



    </div>
  )
}

export default CardPriceHome
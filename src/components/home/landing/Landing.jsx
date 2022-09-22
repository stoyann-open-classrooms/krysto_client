import React from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

import CardSlide from '../cardSlide/CardSlide'

function Landing() {
  return (
    <section className='page-section'>
        <h1>Le troc nouvelle génèration !</h1>
        <h4>Gagnez en pouvoir d'achat en consommant plus librement et écologiquement.</h4>
   <div>
    <p>30 450 XPF offerts*</p>
    <p>A l'inscription</p>
   </div>


<div className="buttons">

   <button className='cta-button'>S'inscrire gratuitement</button>
   <button className='cta-button'>Découvir</button>
</div>

<h3 className='title-last-offer-slider'>Les dernières annonces</h3>
<section className="last-offer-slider">
   
        <button className='arrow leftArrow'>
            <FaArrowAltCircleLeft/>
        </button>
        <button className='arrow rightArrow'>
            <FaArrowAltCircleRight/>
        </button>
<div className="container-card-slide">
    <CardSlide/>
    <CardSlide/>
    <CardSlide/>
    <CardSlide/>
    <CardSlide/>
    <CardSlide/>
    <CardSlide/>
    <CardSlide/>
    <CardSlide/>
</div>
</section>
    </section>
  )
}

export default Landing
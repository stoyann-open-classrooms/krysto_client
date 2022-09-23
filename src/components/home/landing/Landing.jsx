import React from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import HomeSlider from './HomeSlider'




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

<section className="last-offer-slider">
<h3 className='title-last-offer-slider'>Les dernières annonces</h3>
   
     <HomeSlider/>
</section>
    </section>
  )
}

export default Landing
import React from 'react'
import { Link } from 'react-router-dom'



function Landing() {
  return (
    <>
    
    <section className='section-landing'>
     
      <div className="section-inner">
        <h4>Une nouvelle facon de consommer plus librement et ecologiquement.</h4>
        <h2>Le troc nouvelle génèration !</h2>
      <p className='landing-subtitle'>Le krysto une monnaie numerique local inspirée de la Theorie relative de la monnaie vous permettant d’echanger des biens ou des services sur le marché de l'occasion.</p>
      </div>
 <div className='promo'>
      <h5>30 000 XPF offert</h5>
      <h6>A l'inscripiton <span>*</span></h6>
      <p>*En Krysto</p>

 </div>
        <Link to={'/register-subscription'} className="btn-cta main-btn">
          <div className="hover"></div>
          <span>Commencer a troquer</span>
        </Link>




    </section>
    </>
  )
}

export default Landing
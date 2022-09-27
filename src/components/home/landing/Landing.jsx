import React from 'react'
import { FaArrowCircleDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import bourse from '../../../assets/icones/bourse 1.png'



function Landing() {
  return (
    <>
    
    <section className='section-landing'>
     
      <div className="section-inner">
        <h4>Une nouvelle facon de consommer plus librement et ecologiquement.</h4>
        <h2>Le troc nouvelle génèration !</h2>
      <p>Le krysto une monnaie numrique local inspirée de la Theorie relative de la monnaie vous permettant d’echanger des biens ou des services sur la plateforme</p>
      </div>
      <img src={bourse} alt="" />
      <h5>30 000 XPF offert a l'insrcription</h5>
        <Link to={'/register-subscription'} className="btn-cta">
          <div className="hover"></div>
          <span>Commencer a troquer</span>
        </Link>




    </section>
    </>
  )
}

export default Landing
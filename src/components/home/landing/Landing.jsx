import React from 'react'
import { FaArrowCircleDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import cycle from '../../../assets/cycletroc.png'



function Landing() {
  return (
    <>
    
    <section className='section-a'>
     
      <div className="section-inner">
        <h4>Gagnez en pouvoir d'achat</h4>
        <h2>Graçe au Krysto</h2>
      <p>Le krysto une monnaie numrique local inspirée de la Theorie relative de la monnaie vous permettant d’echanger des biens ou des services sur la plateforme</p>
      </div>
      <h5>30 000 XPF offert a l'insrcription</h5>
        <Link to={'/login'} className="btn">
          <div className="hover"></div>
          <span>s'inscrire gratuitement</span>
        </Link>

   


    </section>
    </>
  )
}

export default Landing
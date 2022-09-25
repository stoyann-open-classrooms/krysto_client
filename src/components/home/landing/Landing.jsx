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
        <Link to={'/login'} className="btn">
          <div className="hover"></div>
          <span>s'inscrire</span>
        </Link>
      </div>
   


    </section>
    </>
  )
}

export default Landing
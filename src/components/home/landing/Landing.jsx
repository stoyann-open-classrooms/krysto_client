import React from 'react'
import { FaArrowCircleDown } from 'react-icons/fa'




function Landing() {
  return (
    <>
    
    <section className='section-a'>
      <div className="section-inner">
        <h4>Gagnez en pouvoir d'achat</h4>
        <h2>Graçe au Krysto</h2>
        <button className="btn">
          <div className="hover"></div>
          <span>s'inscrire</span>
        </button>
      </div>
   

<div className="scroll-arrow">
  <FaArrowCircleDown/>
</div>

    </section>
    </>
  )
}

export default Landing
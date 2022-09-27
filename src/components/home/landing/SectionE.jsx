import React from 'react'
import { Link } from 'react-router-dom'

function SectionE() {
  return (
    <section className="sectionE">
      <h2>La monnaie libre</h2>
      <p>
        Krysto est inspirée du modèle de  <a href="https://monnaie-libre.fr/">la monnaie libre</a>, aussi appelée June,
        ou G1, et de la   <a href="http://trm.creationmonetaire.info/">Théorie relative de la monnaie</a>. 
        <span>

        Le Krysto
        </span>, n'en
        reproduit cependant pas intégralement l'ensemble des principes et des règles.
      </p>
      <p>Pour en savoir plus sur les ressemblances, et différences entre les deux monnaies, merci de consulter la section</p>

     

      <Link to={'/krysto-vs-g1'} >
    <button className='btn-cta'>
    <div className="hover"></div>
        <span>Krysto VS G1 comparatif</span>
    </button>            
</Link>


      
      <p> développée par l'ingénieur Stéphane Laborde en 2009, le concept de monnaie libre en établissant qu'aucun individu membre du système monétaire ne doit être privilégié devant la création monétaire.</p>
    <p>La TRM aboutit au résultat qu'une monnaie libre est une monnaie fondée sur un dividende universel qui ne dépend que de la masse monétaire à l'instant considéré, du nombre d'individus membres de la monnaie et de leur espérance de vie moyenne.</p>
    <button className='btn-cta'>
    <div className="hover"></div>
        <span>La théorie relative de la monnaie en détails</span>
    </button>            
    </section>
  )
}

export default SectionE

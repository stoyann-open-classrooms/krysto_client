import React from 'react'
import { Link } from 'react-router-dom'

function SectionE() {
  return (
    <section className="sectionE">
      <h2>La Théorie relative de la monnaie</h2>
      <p>
        {' '}
        développée par l'ingénieur Stéphane Laborde en 2010, le concept de
        monnaie libre etablit qu'  <strong>aucun individu membre du système monétaire ne
        doit être privilégié devant la création monétaire.</strong> 
      </p>
    
      <p>
        La Théorie relative de la monnaie ou TRM aboutit au résultat qu'une
        monnaie libre est une
        <strong>  monnaie fondée sur un dividende universel</strong> qui ne dépend que de la masse monétaire
        à l'instant considéré, du nombre d'individus membres de la monnaie et de
        leur espérance de vie moyenne.
      </p>
      <p>
        Dans un systéme de monnaie libre  <strong>aucun utilisateurs n'est
        privilligié en rapport a un autre</strong> ni dans le temp ni dans un espace
        geographique donée.
      </p>
 <p>Une monnaie libre doit rester libre <strong>Chacun est libre ou non de l'uttiliser</strong>
 de ce fait aucun etat, entité ou personne ne peut imposer une monnaie libre.</p>
  <p>

      <Link to={'/trm-details'} className='is-link'>Comprendre la théorie relative de la monnaie</Link>
  </p>
 
    </section>
  )
}

export default SectionE

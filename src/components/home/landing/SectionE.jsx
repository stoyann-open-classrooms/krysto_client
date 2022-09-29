import React from 'react'
import { Link } from 'react-router-dom'

function SectionE() {
  return (
    <section className="sectionE">
      <h2>La Théorie relative de la monnaie</h2>
      <p>
        {' '}
        développée par l'ingénieur Stéphane Laborde en 2009, le concept de
        monnaie libre etablit qu'aucun individu membre du système monétaire ne
        doit être privilégié devant la création monétaire.
      </p>
      <p>
        Quatre libertés économique fondamentales sont definie dans la théorie
        relative de la monnaie
      </p>
      <p>
        La Théorie relative de la monnaie ou TRM aboutit au résultat qu'une
        monnaie libre est une monnaie fondée sur un{' '}
        <span>dividende universel</span> qui ne dépend que de la masse monétaire
        à l'instant considéré, du nombre d'individus membres de la monnaie et de
        leur espérance de vie moyenne.
      </p>
      <p>
        Dans un systéme de monnaie libre aucun uttilisateur de celle-ci n'est
        privilligié en rapport a un autre ni dans le temp ni dans un espace
        geographique donée.
      </p>
 

      <Link to={'/trm-details'} className='is-link'>Comprendre la théorie relative de la monnaie</Link>
 
    </section>
  )
}

export default SectionE

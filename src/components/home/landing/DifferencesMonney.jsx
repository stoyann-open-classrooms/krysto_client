import React from 'react'
import { Link } from 'react-router-dom'
import TitlePage from '../../layout/TitlePage'

function DifferencesMonney() {
  return (
    <section>
        <TitlePage title={"Difference entre le Krysto et la G1 ou June"}/>


<p>
        Krysto est inspirée du modèle de{' '}
        <a href="https://monnaie-libre.fr/">la monnaie libre</a>, aussi appelée
        June, ou G1, et de la{' '}
        <a href="http://trm.creationmonetaire.info/">
          Théorie relative de la monnaie
        </a>
        .<span>Le Krysto</span>, n'en reproduit cependant pas intégralement
        l'ensemble des principes et des règles.
      </p>


      <p>
        {' '}
        développée par l'ingénieur Stéphane Laborde en 2009, le concept de
        monnaie libre etablit qu'aucun individu membre du système monétaire ne
        doit être privilégié devant la création monétaire.
      </p>
      <p>
        La Théorie relative de la monnaie ou TRM aboutit au résultat qu'une
        monnaie libre est une monnaie fondée sur un <span>dividende universel</span> qui ne
        dépend que de la masse monétaire à l'instant considéré, du nombre
        d'individus membres de la monnaie et de leur espérance de vie moyenne.
      </p>
      <p>Dans un systéme de monnaie libre aucun uttilisateur de celle-ci n'est privilligié en rapport a un autre ni dans le temp ou un espace geographique.</p>

      <p>
        Pour en savoir plus sur les ressemblances, et différences entre les deux
        monnaies, merci de consulter la section
      </p>

      <Link className='is-link' to={'/krysto-vs-g1'}>
       
          <span>Krysto VS G1</span>
      </Link>
    </section>
  )
}

export default DifferencesMonney
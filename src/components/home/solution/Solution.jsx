import React from 'react'
import { Link } from 'react-router-dom'
import cycle from '../../../assets/cycletroc.png'
import coins from '../../../assets/coins/coinGif.gif'

function Solution() {
  return (
    <section className="page-section">
      <h3>
        C'est exactement à ce besoin que répond Krysto notre monnaie numérique.
      </h3>
      <p>
        Remede anti-crise, développement du Systéme D ou en réponse à des
        aspirations plus profondes des consommateurs, le trocs fait aujourd'hui
        de plus en plus d'adeptes et il devient une mode ! Le troc a toujours
        existé et nous le pratiquons parfois même sans nous en rendre compte.
      </p>
      <p>
        Le troc vheicule des valeurs fortes comme l'entraide, le partage, la
        convivialité , mais il contribue aussi a la lutte contre le gaspillage
        et la surconsomation.
      </p>

      <div className="paralax2">

      </div>
      <h3>Recycler, prêter, donner permet de réduire l'impact écologique.</h3>
      <p>
        Quant aux monnaies complémentaires, elles créent un systéme économique
        alternatif plus libre, a valeur ajoutée écologique et sociale,
        revalorise la richesse des activités humaines, facilittent les échanges
        et créent des mécanismes de solidatité et de coopération à plusieurs
        échelles
      </p>
      <h3>Une monnaie stable et équitable.</h3>
      <p>
        Le Krysto n'est pas une monnaie comme les autres, parce qu'elle est
        basée sur un philosophie et un modèle mathematique très diffèrents des
        autres monnaies.... Krysto est inspirée de{' '}
        <Link to={'/'}> la monnaie libre</Link>, aussi appelée June ou G1 et de{' '}
        <Link to={'/'}>la théorie relative de la monnaie</Link>
        Cependant elle n'en reproduit pas l'ensemble des principes det des
        règles.
      </p>
      <p>
        Cette théorie repense la création monetaires - seul les uttilisateur de
        la monnaie en sont les créateurs ainsi personnes ne décide de créer de
        la monnaie pour l'un ou pour l'autre. La monnaie est créer de facon
        équitable et de façon automatique pour tous les utilisateurs de celle ci
      </p>
      <p>
        Ainsi les premiers inscrit ne sont pas privilegié par rapport au dernier
        inscrit
      </p>
      <button>En savoir plus sur le Krysto</button>

      <p>
        Grace au Krysto nous ne sommes plus prisonniers d'une seule monnaie et
        du système bancaire qui est rigide, maitre du jeux et fragile. Nous
        retrouvons une liberté dont nous avions même oublié l'existance; Nous
        pouvons désormais choisir le système dans lequel nous avons confiance.
      </p>
      <div className='content-cycle'>
      <img className='cycle' src={cycle} alt="" />
      </div>
    </section>
  )
}

export default Solution

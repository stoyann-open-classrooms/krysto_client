import React from 'react'
import HeroTitle from '../../components/shared/heroTitle/HeroTitle'
import reuse from '../../assets/refuse-reduce-reuse-recycle-icones.svg'
import { Link } from 'react-router-dom'
function KrystoProject() {
  return (
    <div className="page-content">
      <HeroTitle title={'Le projet Krysto.'} />

      <div className="container p-4">
        <h2 className="title is-4">
          Une Calédonie sans plastique grâce a la blockckchain
        </h2>
        <p className="m-2">
          Chez Krysto tout ce que nous entreprenons a pour but de contribuer a
          limiter notre impact sur l'environement. Grace nôtre monnaie
          complémentaire nous souhaitons stimuler le marché de l'occasion tout
          en luttant contre la vie cher, en echangeant des bien ou des services
          entre particulier tout en conservant son pouvoir d'achat réel
        </p>
        <p className="m-2">
          Dans le futur de nouvelles fonctionalités devrait arriver sur la
          plateforme comme par exemple l'arrivée de l'application mobile, la
          possibiliter de payer en Krysto chez certains commercant
          partenaires...
        </p>

        <p className="m-2">
          {' '}
          Cependant un autre probleme environemental préocupe particulierement
          l'équipe de Krysto celle de la pollution plastique des océans{' '}
        </p>

        <Link to={'/plastic-problem'} className="button is-success">
          Le problème du plastique
        </Link>

        <p className="m-2">
          Nous avons donc pour projet de transformer des dechets plastiques
          recolté localement et de les transformer en objet du quotidient design
          et tendances. Ajourd'hui il ne nous manque plus que les fonds
          necessaire pour investir de l'achat de nos machines et du local
          necessaire.{' '}
        </p>
      </div>
    </div>
  )
}

export default KrystoProject

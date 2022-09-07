import React from 'react'
import { FaCalculator, FaCheckCircle, FaMoneyCheck, FaSpider, FaXing } from 'react-icons/fa'

function G1VsKrysto() {
  return (
    <main>
      <div className="hero p-4">
        <div className="hero-container">
          <h1>G1 VS Krysto: comparatif</h1>
          <h3>
            La ressemblance entre les deux monnaies étant évidentes pour ceux
            qui connaissent la Ğ1, ce comparatif vous aidera à mieux comprendre
            leurs différences.
          </h3>
        </div>
      </div>
      <div className="container p-4 comparatif-container">

      <h4 className='title is-6 p-2 '> <FaCalculator/> Modèle mathématique </h4>
      <p className='mb-3'>
        Les formules mathématiques utilisées par le système Krysto ne sont pas
        tout à fait similaires à celles de la Ğ1.
      </p>
      <p className='mb-3'>Formule du dividende en Krysto:</p>
      <p className='mb-3'>1 Krysto = (masse monétaire / nombre d'utilisateurs / 365.25) * 12</p>
      <p className='mb-3'>
        365.25 / 12 = 30.4375 = la moyenne vers laquelle tendent tous les
        comptes courants.
      </p>
      <h4 className='title is-6 p-2 '> <FaSpider/> Toile de confiance</h4>
      <p className='mb-3'>
        Avec la Ğ1, la co-création de la monnaie (versemment du DU) est
        conditionnée à l'intégration de la toile de confiance.
      </p>
      <p className='mb-3'>
        Pour intégrer la toile de confiance, vous devez être certifié par 5
        membres déjà certifiés eux-mêmes.
      </p>
      <p className='mb-3'>
        L'objectif de cette toile de confiance est simple : garantir que chaque
        membre ne possède qu'un seul compte en Ğ1.
      </p>
      <p className='mb-3'>
        Cependant, sur Krysto, nous avons fait le choix de ne pas mettre en
        place cette toile de confiance, afin de simplifier et accélérer l'accès
        à notre monnaie.
      </p>
      <p className='mb-3'>
        L'unicité des comptes est garantie d'une autre façon : via le paiement
        des abonnements. En effet, il n'est pas possible de créer plusieurs
        compte Krysto avec la même identité banquaire (carte bleue).
      </p>
      <p className='mb-3'>
        La création de plusieurs comptes par personne est donc limitée, pour
        éviter les abus et l'accumulation de monnaie par une petite minorité.
      </p>
      <p className='mb-3'>
        Toutesfois nous considérons que ce n'est pas réellement un problème en
        soi, et que les dérives possibles sont également limitées par les autres
        règles mises en place pour garantir un usage sain de notre monnaie :
      </p>
      <ul className="m-4">
        <li>
          {' '}
          <FaCheckCircle className="mr-2" />
          Plafonement des comptes de dépôts à 365.25 Krysto.
        </li>
        <li>
          {' '}
          <FaCheckCircle className="mr-2" />
          Vérification de votre adresse e-mail.
        </li>
        <li>
          {' '}
          <FaCheckCircle className="mr-2" />
          Impossibilité de spéculer sur la valeur de l'òto (revendre ses òto
          contre des XPF)
        </li>
      </ul>
      <p className='mb-3'>
        La création de plusieurs compte pour une même personne n'est pas
        réellement un problème, parce que si une même personne possède beaucoup
        d'òto, la seule chose qu'elle peut en faire est de les dépenser en
        achetant des annonces sur la plateforme Krysto, ce qui engendrera
        simplement une redistribution de la masse monétaire.
      </p>
      <p className='mb-3'>
        L'accumulation abusive de Krysto est inutile. Vos Krysto ne prennent de
        la valeur que lorsque vous les échangez contre un bien ou un service
        réel.
      </p>

      <h4 className='title is-6 p-2 '> <FaMoneyCheck/> Taux de conversion en Xpf</h4>
      <p className='mb-3'>
        Les créateurs de la Ğ1 ont fait le choix de ne pas définir de taux de
        conversion entre la Ğ1 et les autres monnaies comme les €uros, afin de
        laisser les utilisateurs entièrement libre de fixer leurs prix, et
        d'échanger leur monnaie le plus librement possible.
      </p>
      <p className='mb-3'>
        Pour Krysto, nous avons fait le choix de fixer un taux de conversion
        indicatif (1 Krysto ~ 1000 Xpf) afin de faciliter la compréhension et la
        prise en main de cette nouvelle forme de monnaie, par le plus grand
        nombre.
      </p>
      <p className='mb-3'>
        Les monnaies relatives sont pour l'instant encore peut connues du grand
        public, et il n'est pas évident pour tout le monde d'en saisir toutes
        les subtilités.
      </p>
      <p className='mb-3'>
        Ce taux indicatif sert de base commune à tous nos membres pour fixer et
        évaluer les prix des annonces, ce qui n'est pas facile sans repert fixe.
      </p>
      </div>
    </main>
  )
}

export default G1VsKrysto

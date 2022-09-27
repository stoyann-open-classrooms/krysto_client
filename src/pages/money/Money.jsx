import React from 'react'
import TitlePage from '../../components/layout/TitlePage'
import chain from '../../assets/icones/chain.png'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
function Money() {
  return (
    <section>
      <TitlePage
        title={
          'Le Krysto, Une monnaie autonome, relative, stable, et sans risque'
        }
        icone={chain}
      />
      <h2>Origines</h2>
      <p>
        Krysto est inspirée du modèle de la monnaie libre , aussi appelée June,
        ou G1, et de la théorie relative de la monnaie.
      </p>
      <p>
        Cependant, elle n'en reproduit pas intégralement l'ensemble des
        principes et des règles.
      </p>

      <button className="btn-cta">
        <Link to={'/krysto-vs-g1'}>
          <div className="hover"></div>
          <span>Krysto VS G1 les différences</span>
        </Link>
      </button>
      <TitlePage title={'Introduction'} />
      <p>
        Krysto peut être considéré comme une crypto-monnaie car ses données sont
        stockées sur une blockchain (base de donnée cryptée)
      </p>
      <p>
        Mais on peut aussi parler plus simplement d'une monnaie numérique...
      </p>
      <p>
        Cependant, le krysto n'est pas une monnaie comme les autres, parce
        qu'elle est basée sur une philosophie et un modèle mathématique très
        différents des monnaies que l'on connait actuellement comme l'euros ou
        le beatcoins...
      </p>
      <h2>Le problème principal de toute monnaie est l'inflation.</h2>
      <p>
        Les monnaies "traditionnelles" (€, $, etc) sont créées par la dette, et
        doivent (en théorie) être "remboursée" par le travail.
      </p>
      <p>
        Avec ce système de dette, il est possible de créer une grande quantité
        de monnaie en une seule fois.
      </p>
      <p>
        Mais le risque est de créer de l'inflation, si trop de monnaie est émise
        en même temps.
      </p>
      <p>
        Pour éviter cela, ce sont les banques (et les banquiers) qui ont le
        pouvoir de décider pour qui ils créent de la monnaie, en fonction des
        capacités de remboursement de leurs clients...
      </p>
      <p>
        Avec Krysto, la monnaie n'est pas créée par la dette. Elle est créér
        Quotidienement, en petite quantité, et de façon équitable, pour tous ses
        utilisateurs.
      </p>
      <p>L'inflation est évitée de facçon naturelle graçe au mathématiques !</p>
      <p>
        La répartition de la masse monétaire est sans cesse rééquilibrée par une
        création monétaire équitable, qui donne à chacun un même pouvoir
        d'achat, constant et limité.
      </p>
      <p>
        Il n'y a donc personne qui décide de créer plus de monnaie pour l'un ou
        pour l'autre.
      </p>
      <p>
        L'ensemble du système est automatique et donc parfaitement stable...
      </p>

      <div>
        <p>
          Imaginez qu'au lieu de recevoir 10.000€ en une seule fois en
          contractant un emprunt dans une banque, vous recevez simplement 10€
          tous les jours, que vous pouvez utiliser tout de suite, ou accumuler
          pour plus tard.
        </p>
        <p>
          <FaArrowAltCircleRight /> En 3 ans, vous aurez reçu l'équivalent de{' '}
          <strong>10 000 euros</strong>{' '}
        </p>
        <p>
          <strong>10 X 365 X 3 = 10 950 euros</strong>
        </p>
      </div>
      <p>
        <strong>
          L'avantage, c'est que vous n'avez pas besoin de convaincre un banquier
          pour qu'il vous accorde un emprunt..{' '}
        </strong>
      </p>
      <h2>Et surtout : vous n'aurez rien à rembourser !</h2>
      <p>
        La monnaie vous sera distribuée automatiquement, tous les jours. Vous
        avez juste à vous inscrire sur la plateforme <strong>Krysto</strong>. Et
        ensuite, vous n'aurez plus qu'à dépenser votre monnaie pour acheter ce
        qui vous plaira parmis les annonces publiées sur le site...
      </p>

      <p>
        L'objectif de Krysto est de devenir une vraie monaie d'usage, que l'on
        peut utiliser directement pour faire des achats réels et utiles, sur le
        marché de l'occasion.
      </p>
      <p>
        Le Kryso peut être considérée comme une monnaie numérique
        complémentaire, qui augmente votre pouvoir d'achat réel tous les
        jours...
      </p>

      <h2>Le Krysto n'est pas une monnaie spéculative</h2>
      <p>c'est une monnaie d'usage.</p>
      <p>Il est impossible de revendre vos Krysto contre des XPF</p>
      <p>
        Le seul moyen d'utiliser vos Krysto, c'est d'acheter quelque chose de
        réel, parmis les petite-annonces publiées sur la plateforme.
      </p>

      <TitlePage title={'Définitions'} />
      <h2>La valeur d'un Krysto.</h2>
      <p>Le Krysto est une valeur relative</p>
      <p>
        Le système ne crée pas directement des krysto Il créé des unités (ù)
      </p>
      <p>
        La valeur d'1 krysto est toujours équivalente à une certaine quantité
        d'unités. Cette quantité est recalculée tous les jours.
      </p>
      <p>
        <strong>ex : 1 Krysto = 0.032854209 ù</strong>
      </p>
      <h2>Création monétaire.</h2>
      <p>
        Chaque jour, 1 Krysto (en ù) est créé par le système, pour chaque
        utilisateur de la monnaie.
      </p>
      <p>
        Donc, si : 1 òto = 0.25469874 ù <br />
        chaque utilisateur reçoit 0.25469874 ù <br />
        sur son compte courant
      </p>
      <h2>Masse monétaire</h2>
      <p>
        La masse monétaire de Krysto c'est le nombre total d'unité (ù) créées
        depuis le lancement du système monétaire.
      </p>
      <p>
        On peut aussi exprimer la masse monétaire en Krysto, selon le taux de
        conversion du moment.
      </p>

      <h2>Constantes universelles</h2>
      <p>La formule mathématique permettant de faire fonctionner l'ensemble du système monétaire Krysto  utilise les constantes universelles suivantes :</p>
  
  <ul>
    <li>
        <strong>362.25</strong>: <br /> Le nombre de jours dans l'année
    </li>
    <li>
        <strong>12</strong>: <br /> le nombre de mois dans l'année
    </li>
    <li>
        <strong>30.4375 </strong> = 365.25 / 12: <br /> le nombre de mois dans l'année
    </li>
  </ul>

<TitlePage title={"La formule mathématiques."}/>
<h2>Calculer la valeur d'un Krysto.</h2>  
    </section>
  )
}

export default Money

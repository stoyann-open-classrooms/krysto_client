import React from 'react'
import TitlePage from '../../components/layout/TitlePage'
import krystoVal from '../../../src/assets/val-krysto.jpg'
import krystoVal2 from '../../../src/assets/val-krysto-2.jpg'
import jNext from '../../../src/assets/jNext.jpg'
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
      <p>
        La formule mathématique permettant de faire fonctionner l'ensemble du
        système monétaire Krysto utilise les constantes universelles suivantes :
      </p>

      <ul>
        <li>
          <strong>362.25</strong>: <br /> Le nombre de jours dans l'année
        </li>
        <li>
          <strong>12</strong>: <br /> le nombre de mois dans l'année
        </li>
        <li>
          <strong>30.4375 </strong> = 365.25 / 12: <br /> le nombre de mois dans
          l'année
        </li>
      </ul>

      <TitlePage title={'La formule mathématiques.'} />
      <h2>Calculer la valeur d'un Krysto.</h2>
      <img src={krystoVal} alt="" />
      <p>1 Krysto = (masse monétaire) / (nb utilisateurs) / 30.4375</p>
      <p>
        1 Krysto est égal à la masse monétaire divisée par le nombre
        d'utilisateurs total, divisé par 30.4375 (le nombre moyen de jour dans
        chaque mois de l'année)
      </p>
      <h2>Calculer la valeur du premmier Krysto en circulation.</h2>
      <p>
        Pour le premier Krysto, la masse monétaire est initialisée à une unité
        (1ù), et le nombre d'utilisateur est de 1
      </p>
      <img src={krystoVal2} alt="" />
      <p> 1 Krysto = 1 (ù) / 1 / 30.4375</p>
      <p>
        1 Krysto est égal à 1 divisée par 1, divisé par 30.4375, soit 0.0328542
        unités (ù)
      </p>
      <p>
        <strong>
          Ces 0.0328542 unités sont versées sur le compte courant de
          l'administrateur.{' '}
        </strong>
      </p>
      <p>
        Puis on recalcule en considérant que la masse monétaire est égale à la
        valeur du premier òto :
      </p>
      <img src={krystoVal} alt="" />
      <p>
        Les 0.03285 unités versées sur le compte courant de l'administrateur
        prennent alors automatiquement la valeur de 30.4375 Krysto ! 0,03285 ÷
        0,001079 = 30.4375
      </p>
      <h2>On obtient alors la valeur du premier Krysto en circulation :</h2>

      <img src={krystoVal} alt="" />
      <p>
        Ensuite, chaque jour, la valeur du Krysto sera recalculée, toujours
        selon la même formule, en intégrant les nouveaux inscrits, et en prenant
        en compte le nouveau volume de la masse monétaire.
      </p>

      <h2>Les jours suivants...</h2>
      <p>
        <strong>Chaque jour,</strong> 1 Krysto est créer pour chaque
        utilisateur. Donc la masse monetaires (mm) augmente.
      </p>
      <p>
        De ce fait la valeur du Krysto et recalculée, et augmente également...
      </p>
      <p>
        <strong>mm(J2) = mm(J1) + Krysto(J1) = 0.033933608 ù</strong>
      </p>
      <p>
        <strong>mm(J2) = 0.032854209 ù + 0,00107939 ù = 0.033933608 ù</strong>
      </p>
      <p> 1 Krysto = (masse monétaire) / (nb utilisateurs) / 30.4375</p>
      <img src={jNext} alt="" />

      <h2>
        Le compte administrateur a reçu les 30.4375 Krysto créé à
        l'initialisation de la plateforme. Ensuite, il a reçu 1 Krysto pendant 4
        jours. Pourtant il n'a toujours que 30.4375 Krysto...
      </h2>

      <div className="">
        <img src={krystoVal2} alt="" />

        <div>
          <h2>Pourquoi ?</h2>
          <p>
            <strong>Car la valeur du Krysto a augmenté:</strong>
          </p>
          <p>
            Les Krysto d'hier valent moins que ceux d'aujourd'hui... Il faut de
            plus en plus d'unités pour faire 1 Krysto. Donc la quantité d'unités
            versées la veille ne correspond plus au nombre d'unités nécessaires
            pour faire 1 Krysto aujourd'hui, avec le nouveau taux de
            conversion...
          </p>
          <p>
            Lorsqu'un compte est à 30.4375 Krysto, chaque jour il Krysto 1 òto
            en unités, mais proportionellement au nouveau taux, il reste à
            30.4375 Krysto.
          </p>
        </div>
      </div>

      <TitlePage title={'gérer sa monnaie'} />
      <p>
        <strong>Comptes courant & compte de dépôt</strong>
      </p>

      <p>Tous les comptes courants tendent vers la moyenne de 30.4375 Krysto</p>

      <h2>Pour gagner plus, il faut utiliser son compte de dépot</h2>
      <p>
        A l'inscription, 2 types de comptes sont créés pour chaque utilisateur :
      </p>
      <img src={krystoVal2} alt="" />
      <div>
        <h2>> POUR GAGNER PLUS, IL FAUT UTILISER SON COMPTE DE DÉPOT</h2>
        <p>
          <strong>
            Les compte de dépot ne stockent pas des unités (ù). Il stock
            uniquement des Krysto
          </strong>
        </p>
        <p>
          Lorsque des Krysto sont transférés depuis un compte de dépot vers un
          compte courant, les Krysto sont reconvertis en unités, en fonction de
          la valeur courante de l'òto.
        </p>
        <p>
          Lorsqu'un compte est à 30.4375 Krysto, chaque jour il Krysto 1 òto en
          unités, mais proportionellement au nouveau taux, il reste à 30.4375
          Krysto.
        </p>
        <p>
          Cependant, il n'est pas conseillé de transférer des Krysto vers un
          compte courant, puisque cela aura pour conséquence de faire gagner
          moins de Krysto les jours suivants sur ce compte courant...
        </p>
        <p>
          <strong>
            Les comptes de dépôts sont plafonés à 365.25 Krysto, de façon à
            limiter l'accumulation des Krysto.
          </strong>
        </p>
      </div>
      <h2>
        Le principe de la relativité de la monnaie engendre le mécanisme suivant
        :
      </h2>

      <p>
        Plus un compte courant est rempli, moins il rapporte (presque 0
        krysto/j) <br />
        Plus un compte courant est vide, plus il rapporte (presque 1 Krysto/j)
      </p>
      <p>
        Donc, plus vous stockez vos òto sur votre compte de dépot, plus vous
        accumulez leur valeur.
      </p>

      <p>
        Pour gagner plus de 30.4375 Krysto, il suffit donc de vider
        régulièrement votre compte courant, en transférant votre monnaie vers
        votre compte de dépot, OU en achetant quelque chose...
      </p>

      <h2>
        A chaque fois qu'un compte courant est vidé, le lendemain, il rapporte
        plus de Krysto que s'il n'avait pas été vidé...{' '}
      </h2>
      <img src={krystoVal2} alt="" />
      <h2>Et à l'inverse, si un compte courant est crédité de + de 30.4375 Krysto :

il perd quotidiennement de sa valeur, pour tendre à nouveau vers 30.4375 Krysto.

 </h2>
    </section>
  )
}

export default Money

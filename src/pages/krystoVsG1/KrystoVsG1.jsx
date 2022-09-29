import React from 'react'
import { Link } from 'react-router-dom'
import TitlePage from '../../components/layout/TitlePage'
import krystoCoins from '../../assets/coins/piece_stoyan-02.svg'
import g1Coins from '../../assets/coins-g1.png'
import  "./krystoVsG1.css"

function KrystoVsG1() {
  return (
    <section>
      <TitlePage title={' Ğ1 VS Krysto : comparatif'} />

      <p className='big-paragraphe'>
        La ressemblance entre les deux monnaies étant évidentes pour ceux qui
        connaissent la Ğ1, ce comparatif vous aidera à mieux comprendre leurs
        différences.
      </p>
      <h2 className='title-section'>Le modèle mahtématique.</h2>
      <p>
        Les formules mathématiques (algorythme) utilisée par le système Krysto
        ne sont pas tout a fait similaires à celle de la Ğ1.
      </p>
      <h2  className='title-section'>Formule du dividende en Krysto</h2>
      <p className='formule'>1 Krysto = (masse monétaire / nombre d'utilisateurs / 365.25) * 12</p>

      <h2 className='title-section'>Toile de confiance.</h2>
      <p>
        Avec la Ğ1, la co-création de la monnaie (versemment du DU) est
        conditionnée à l'intégration de la toile de confiance. Pour intégrer la
        toile de confiance, vous devez être certifié par 5 membres déjà
        certifiés eux-mêmes. L'objectif de cette toile de confiance est simple :{' '}
        <p className='big-paragraphe'>
          {' '}
          garantir que chaque membre ne possède qu'un seul compte en Ğ1.{' '}
        </p>
      </p>

      <p>
        Cependant, sur Krysto, nous avons fait le choix de ne pas mettre en
        place cette toile de confiance, afin de simplifier et accélérer l'accès
        à notre monnaie.
      </p>

      <p className='big-paragraphe'>
       
          L'unicité des comptes est garantie d'une autre façon :{' '}
        
     
      </p>
      <p>   via le paiement des abonnements. En effet, il n'est pas possible
        de créer plusieurs compte Krysto avec la même identité banquaire (carte
        bleue).</p>
      <p>
        La création de plusieurs comptes par personne est donc limitée, pour
        éviter les abus et l'accumulation de monnaie par une petite minorité.
      </p>
      <p>
        Toutesfois nous considérons que ce n'est pas réellement un problème en
        soi, et que les dérives possibles sont également limitées par la mise en
        place d'autres règles sur Krysto pour garantir un usage sain de notre
        monnaie :
      </p>

      <ul className='comparatif-list'>
        <li>Plafonemend des comptes de dépôts ç 362.25 Krysto (362 250 XPF)</li>
        <li>Vérification de votre adresse e-mail</li>
        <li>
          Imposibilité de spéculer sur le valeur du Krysto (revendre ses Krysto
          contre des XPF)
        </li>
      </ul>
      <p>
        De ce fait la création de plusieurs compte pour une même personne n'est
        pas réellement un problème, parce que si une même personne possède
        beaucoup d'òto, la seule chose qu'elle peut en faire est de les dépenser
        en achetant des annonces sur la plateforme Krysto, ce qui engendrera
        simplement une redistribution de la masse monétaire.
      </p>
      <p>
        L'accumulation abusive de Krysto est inutile. Vos Krysto ne prennent de
        la valeur que lorsque vous les échangez contre un bien ou un service
        réel.
      </p>

      <h2 className='title-section'>Taux de conversion en XPF</h2>
      <p>
        Les créateurs de la Ğ1 ont fait le choix de ne pas définir de taux de
        conversion entre la Ğ1 et les autres monnaies comme les €uros, afin de
        laisser les utilisateurs entièrement libre de fixer leurs prix, et
        d'échanger leur monnaie le plus librement possible.
      </p>
      <p>
        Pour Krysto, nous avons fait le choix de fixer un taux de conversion
        indicatif <strong>(1 Krysto ~ 1000 XPF)</strong> afin de faciliter la
        compréhension et la prise en main de cette nouvelle forme de monnaie,
        par le plus grand nombre.
      </p>
      <p>
        Les monnaies relatives sont pour l'instant inconnues du grand public, et
        il n'est pas évident pour tout le monde d'en saisir toutes les
        subtilités.
      </p>
      <p>
        Ce taux indicatif sert de base commune à tous nos membres pour fixer et
        évaluer les prix des annonces, ce qui n'est pas facile sans repert fixe.
      </p>
      <p>
        Le rapport de 1 pour 10 reste accessible pour tout le monde, et il
        permet d'établir la moyenne des comptes à environ 300€ de pouvoir
        d'achat. Pour le marché de l'occasion, ce montant est largement
        suffisant pour réaliser des petits achats réguliers, en fonction des
        annonces publiées près de chez-soi. Et le plafond des comptes de dépôts,
        fixé à 365.25 òto, soit 3652€, permet d'accumuler une quantité de
        monnaie non-négligeable pour pouvoir aussi réaliser des achats plus
        importants de temps en temps.
      </p>
      <p>
        Ce taux de conversion, à la fois simple et pratique, semble établir un
        juste équilibre entre l'offre et la demande : On reçoit suffisamment de
        monnaie pour pouvoir en dépenser régulièrement sans peur d'en manquer,
        et on a aussi tout intérêt à devenir vendeur, pour accumuler un peu plus
        de monnaie, et pouvoir se permettre des achats plus importants.
      </p>
      <p>
        Ni trop, ni pas assez. C'est l'équilibre que nous espérons obtenir, à
        travers ce taux de conversion.
      </p>

      <h2 className='title-section'>Gratuité du service.</h2>
      <p>
        La Ğ1 est entièrement gratuite. La seule condition pour participer à la
        co-création de la monnaie est l'intégration de la toile de confiance.
      </p>
      <p>
        Pour Krysto, nous avons fait le choix de rendre le service payant, afin
        d'assurer les coûts qui garantiront la stabilité et la péreinité de la
        plateforme sur le long terme. (serveur-web, développement, maintenance,
        communication, et
      </p>
      <p>
        La quantité de pouvoir d'achat que nous fournissons à nos utilisateurs
        sera toujours supérieure aux prix minimalistes de nos abonnements. Au
        delà des 1000 comptes gratuits pour les premiers inscrits, nos tarifs
        resterons toujours au plus bas pour être accessibles à tous.
      </p>
      <p>
        400 XPF par mois vous donne potentiellement accès à 30 000 XPF de pouvoir d'achat
        mensuel en Krysto, en pouvant cumuler grâce a votre compte de dépot j'usqu'a 300 000 XPF !
      </p>

      <button className="btn-cta">
        <Link to={'/'}>
        <div className="hover"></div>
        <span>Retour à l'accueil</span>
        </Link>
      </button>

    </section>
  )
}

export default KrystoVsG1

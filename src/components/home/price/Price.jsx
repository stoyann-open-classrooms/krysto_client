import React from 'react'
import CardPriceHome from '../cardPriceHome/CardPriceHome'

function Price() {
  return (
    <section className="page-section">
      <p>
        l'abonement Premium vous donne un accés gratuit a vie, qui vous permet
        de gagnez des Krysto sans payer un seul centimes !
      </p>
      <p>La seul conditon pour activer votre compte Premium :</p>
      <p>Publiez une annonce dans les 7 jours suivant votre inscription !</p>
      <p>Offre réservée aux 1000 premiers inscrits !</p>
      <div className="buttons">
        <button>S'inscrire maintenant</button>
      </div>

      <h2>Nos abonements</h2>
    
      <p>
        Pourquoi le service deviendra il payant aprés les 1000 premiers inscrit
        ?
      </p>
      <p>
        Tout simplement pour finnancer les serveurs qui font fonctionner le
        système.{' '}
      </p>
      <p>
        Ainsi que les développeurs, et toutes les personnes qui travaillent et
        travailleront sur la plateforme dans les années qui viennent, pour
        continuer à l'améliorer, et à la maintenir en ligne.
      </p>
      <p>
        Avec krysto, nous n'avez pas à investir des milliers de francs en
        prennant le risque de tout perdre.
      </p>
      <p>Pour gagner des krysto tous les jours, soit l'équivalent de 1000 XPF par jour (et 30 000 XPF dès l'inscription) le risque maximum à prendre est de 400 XPF/mois.</p>
    <p>En gérant bien votre monnaie, vous pouvez transformer ces 400 xpf en 30 000 XPF par mois...</p>
    <p>Le seul risque que vous prenez, c'est de gagner du pouvoir d'achat...</p>
    
<div className="container-card-price-home">
    <CardPriceHome name={'Basique'} price={'400'} time={"mois"} />
    <CardPriceHome name={'Premium'} price={'0'} time={"gratuit à vie"} />
    <CardPriceHome name={'Pro'} price={'4000'} time={"Année"} />
</div>


    </section>
  )
}

export default Price

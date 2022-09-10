import React from 'react'
import Billet from "../../../assets/images/francs_pacifique_5000.jpg"
import Coins from "../../../assets/coins/piece_stoyan-02.svg"
import './RecapSection.css'
function RecapSection() {
  return (
    <section className='container p-4 recap-section'>
        <nav class="level m-3">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Uttilisateurs inscrit</p>
      <p class="title">6</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Annonces en ligne</p>
      <p class="title">1</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Krysto en circulation</p>
      <p class="title">76</p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">Comptes gratuit disponible</p>
      <p class="title">895</p>
    </div>
  </div>
</nav>

    


  <p className='title is-3 mt-6 mb-6 has-text-centered'>Ne mettez pas tous vos oeufs dans le même pannier !</p>
<h1 className='title is-3 mt-6 mb-6 has-text-centered'>Economisez vos Xpf payer Krysto !</h1>
    <div className='content-image'>
    <img src={Billet} alt="Billet de 5000 XPF" />
    <img src={Coins} alt="Billet de 5000 XPF" />

    </div>
    <p className='paragraph'>Le Krysto est une monnaie d'usage vous permettant d'acheter des biens ou des services sur le marché de l'occasion.
      Tout ce que dépenser en Kryto ce sont des XPF économiser
    </p>
    </section>
  )
}

export default RecapSection
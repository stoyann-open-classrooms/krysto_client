import React from 'react'
import HeroTitle from '../../components/shared/heroTitle/HeroTitle'
import './charte.css'
function Charte() {
  return (
    <div className='page-content'>
 <HeroTitle title={"La charte du bon utilisateur."} />

   <div className="container p-4 mb-6">

   <article class="message  is-small">
        <div class="message-header danger">
          <p>On ne peut avoir qu'un compte par utilisateur</p>
        </div>
      </article>

      <article class="message is-small">
        <div class="message-header success">
          <p>
            Les bons troqueurs se mettent bien d'accord sur le service à
            troquer, afin d'évaluer le temps et la compétence requise. Comme ça,
            pas de mauvaise surprise !
          </p>
        </div>
      </article>
      <article class="message is-small">
        <div class="message-header warning">
          <p>
          Un bon troqueur rend ce qu'on lui a prêté dans le même état qu'il l'a reçu !
          </p>
        </div>
      </article>
      <article class="message is-small">
        <div class="message-header danger">
          <p>
          Les annonces avec des propos médisants, diffamatoires, racistes ou calomnieux ne font pas parti du concept MyTroc !Bien évidemment !
          </p>
        </div>
      </article>
      <article class="message  is-small">
        <div class="message-header warning">
          <p>
          Les trocs déposés doivent être précis et non mensongers.
          </p>
        </div>
      </article>
      <article class="message  is-small">
        <div class="message-header danger">
          <p>
          Ici le XPF n'a pas cours, des Krysto OUI, des XPF NON !
          </p>
        </div>
      </article>
      <article class="message  is-small">
        <div class="message-header danger">
          <p>
          Les objets contrefaits, la prostitution ou la vente de drogue sont interdits sur le site. On préfère le préciser quand même
          </p>
        </div>
      </article>
      <article class="message  is-small">
        <div class="message-header warning">
          <p>
          Si je mets un troc en ligne, c'est vraiment pour le troquer.
          </p>
        </div>
      </article>
      <article class="message  is-small">
        <div class="message-header warning">
          <p>
          Les annonces de type MLM (multi level marketing) ou tous autre publicités concernant des systéme dit pyramidaux sont formellement interdit sur la plateforme Krysto.
          </p>
        </div>
      </article>
      <article class="message is-small">
        <div class="message-header success">
          <p>
          Et n'oubliez pas que : «La politesse et un sourire ouvrent toutes les portes»
          </p>
        </div>
      </article>
   
   </div>
 
        
    </div>
  )
}

export default Charte
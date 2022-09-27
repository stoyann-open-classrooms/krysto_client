import React from 'react'
import { FaPlus, FaRecycle } from 'react-icons/fa'
import teddy from '../../../assets/teddy-bear.png'
import shoes from '../../../assets/shoes.png'
import coins from '../../../assets/coins/coinGif.gif'
import circular from '../../../assets/circular.png'

function SectionB() {
  return (
    <section className='sectionB'>

        <h2>Krysto c'est quoi ce truc ?</h2>
        <p>Tout peut être échangé, troquer, de la garde de Omaî le chat à une paire de claquettes, d'un co-voiturage au prêt d'une tondeuse ou d'une machine à raclette , d'un cours d'anglais à une place de concert ...</p>
        <p>Le krysto est une monaie local et solidaire elle permet de troquer des biens ou des services sur le marché de  l’occasion. </p>
    <h2>Comment gagner des <strong>Krysto</strong> ? </h2>
    <p>Dés l'inscription vous recevez tout de suite 30.43 Krysto soit l'équivalent de 30430 xpf a dépenser tout de suite sur la plateforme parmis les annonces proposée</p>
    <p>Quotidienement vous recevez automatiquement sans rien faire entre 0 et 1 krysto Selon le solde de votre compte courant</p>
    <p>vous pouvez aussi gagner des Krysto en vendant des bien ou des services sur la plateforme</p>
    
    <button className='btn-cta'>
    <div className="hover"></div>
        <span>En savoir plus</span>
    </button>

<h2>Comment troquer sur Krysto ?</h2>

<div className='how-to-troc-container'>
    <div className='troc-card'>
        <h4>Troq classique</h4>
        <div className='troc-card-images'>
        <img src={teddy} alt="" />
        <img src={circular} alt="" />
        <img src={shoes} alt="" />
    </div>
<p>J'échange quelquechose contre autre chose</p>
    </div>
    <div className='troc-card'>
        <h4>Troq contre des Krysto</h4>
        <div className='troc-card-images'>
        <img src={teddy} alt="" />
        <img src={circular} alt="" />
        <img src={coins} alt="" />
    </div>
<p>1 Krysto = 1000 XPF</p>
<p>Le Krysto est une monnaie libre et collaborative, elle favorise et facilite le troc.</p>

    </div>
    <div className='troc-card'>
        <h4>négocier le troq</h4>
        <div className='troc-card-images'>
        <img src={teddy} alt="" />
        <img src={circular} alt="" />
        <img src={shoes} alt="" />
        <FaPlus/>
        <img src={coins} alt="" />
    </div>
<p>Je peux aussi négocier le nombre de Kryso et/ou proposer autre chose avec un suplément de Krysto.</p>

    </div>
    
</div>

    </section>
  )
}

export default SectionB
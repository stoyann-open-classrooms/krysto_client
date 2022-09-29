import React from 'react'
import { FaPlus, FaRecycle } from 'react-icons/fa'
import teddy from '../../../assets/teddy-bear.png'
import shoes from '../../../assets/shoes.png'
import coins from '../../../assets/coins/coinGif.gif'
import circular from '../../../assets/circular.png'
import cicle from '../../../assets/cycletroc.png'

function SectionB() {
  return (
    <section className='sectionB'>
        <div className="sectionB-troc-cycle">


        <h2>Le krysto est une monaie local et solidaire elle permet de troquer des biens ou des services sur le marché de  l’occasion. </h2>
 
 <div className="cycle-troc-home">

  <img src={cicle} alt="" />
 </div>
        </div>
  
  <div className="sectionB-how-to">

  
  
   
    <p>Dés l'inscription vous recevez tout de suite 30.43 Krysto soit l'équivalent de 30430 xpf a dépenser tout de suite sur la plateforme parmis les annonces proposée</p>
    <p>Quotidienement vous recevez automatiquement sans rien faire entre 0 et 1 krysto Selon le solde de votre compte courant</p>
    <p>vous pouvez aussi gagner des Krysto en vendant des bien ou des services sur la plateforme</p>
    
    
  </div>



<div className='how-to-troc-container'>
    <div className='troc-card'>
        <h4>Troc classique</h4>
        <div className='troc-card-images'>
        <img src={teddy} alt="" />
        <img className='circular-icon' src={circular} alt="" />
        <img src={shoes} alt="" />
    </div>
<p>J'échange quelquechose contre autre chose</p>
    </div>
    <div className='troc-card'>
        <h4>Troc contre des Krysto</h4>
        <div className='troc-card-images'>
        <img src={teddy} alt="" />
        <img className='circular-icon' src={circular} alt="" />
        <img src={coins} alt="" />
    </div>
<p>1 Krysto = 1000 XPF</p>

    </div>
    <div className='troc-card'>
        <h4>négocier le troc</h4>
        <div className='troc-card-images'>
        <img src={teddy} alt="" />
        <img className='circular-icon' src={circular} alt="" />
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
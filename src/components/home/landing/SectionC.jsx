import React from 'react'
import { Link } from 'react-router-dom'

function SectionC() {
  return (
    <section className='sectionC'>
      
  <h2>On le sait plus ou moins tous, le troc est un système utilisé depuis très très très longtemps !  Le troc c’est l’échange de biens ou de services qui ne nécessite pas l’intervention de la monnaie.</h2>
  <p>Et l’Homme pratique le troc depuis plusieurs siècles, échangeant par exemple son savoir-faire contre de la nourriture. 
Il faut remonter aux plus anciennes civilisations pour retourner au point de départ de l’utilisation du troc qui était déjà destiné à échanger et faire du commerce.</p>
   
   <p>Si le troc continue d’exister depuis tant d’années c’est grâce à ses nombreux avantages ! Et oui, le troc a un impact à la fois humain et solidaire : il permet de créer des relations et d’établir un contact humain en proximité.</p>
   <p>Le troc, c’est aussi, et aujourd’hui plus que jamais, avoir un geste écologique tout en faisant des économies : les objets, plutôt que d’’être jetés, retrouvent une seconde-vie, permettant la réduction de déchets et surtout la valorisation de ressources existantes.</p>
   <p>  
    
    <h2>

      <strong>   Malgrés tout ces avantages le troc dispose tout de même d’un default majeur.</strong>
    </h2>
    
En effet si vous souhaiter troquer quelquechose vous devez trouvez quelqu’un qui soit interresser par ce que vous proposer et qu’il est quelques chose qui vous convienne en echange sela limite fortement les capacité d’échange entre individus</p>
   <h2>Grace au Krysto plus de probléme vous pouvez troquer des biens ou des services avec n’importe quelle utilisateurs de la plateforme. </h2>
   <button  className='btn-cta'>
<Link to={"/money"}>

    <div className="hover"></div>
        <span>Le Krysto en détails</span>
</Link>
    </button>

   
    </section>
  )
}

export default SectionC
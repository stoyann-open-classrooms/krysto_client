import React from 'react'
import { Link } from 'react-router-dom'
import './presentation.css'
function Presentation() {
  return (
    <main>
    <div className="container p-4 presentation-content">

        <h1 className='title is-1'>Présentation du modèle mathématique de la crypto-monnaie Krysto </h1>
    
    
    <div className="presentation-text-container">
    <p>Cette présentation s'attarde principalement sur l'algorythme de Krysto, et s'adresse donc plutôt à un public à l'aise avec les mathématiques.</p>
    <p>Cependant, les calculs sont plus simples qu'ils n'y paraissent.</p>
    <p>Ne vous laissez donc pas impressionner, il ne s'agit la que d'additions, de multiplications et de divisions. Rien de bien plus compliqué...</p>

    </div>
    
</div>
    
    <nav class="pagination mt-6 p-4" role="navigation" aria-label="pagination">
  <Link to={'/'} class="pagination-previous">Précedent</Link>
  <Link to={'/'} class="pagination-next">Suivant</Link>
</nav>
  




    </main>
  )
}

export default Presentation
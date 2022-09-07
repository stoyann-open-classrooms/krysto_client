import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer class="footer is-fixed-bottom pt-3 pb-5">

 <div className="footer-list columns">
  <div className='column'>
    <p>Voir aussi</p>
    
    <div> <Link className='is-3' to={'/charte'}>Charte du bon uttilisateur</Link></div>
    <div > <Link className='is-3' to={'/thanks'}>Remerciement</Link></div>
  </div>
  <div className='column'>
 <p>A propos</p>
    <div> <Link className='is-3' to={'/team'}>Qui sommes nous ?</Link></div>
    <div> <Link className='is-3' to={'/compagny-solutions'}>Solutions entreprises</Link></div>
    <div> <Link className='is-3' to={'/legal-mentions'}>Mention légales</Link></div>
    <div> <Link className='is-3' to={'/cgu'}>C.G.U</Link></div>
    <div> <Link className='is-3' to={'/cgv'}>C.G.V</Link></div>
  </div>
  <div className='column'>
  <p>Presse</p>
    <div> <Link className='is-3' to={'/testimonials'}>On parle de nous</Link></div>
    <div> <Link className='is-3' to={'/press-kit'}>Kit de presse</Link></div>
    <div> <Link className='is-3' to={'/files'}>Flyers/Affiches/Visuels</Link></div>

  </div>
 

    
 </div>
 <div class="content has-text-centered mt-6">
    KRYSTO.NC © Tous droits réservés - 2022
    </div>
  </footer>
  )
}

export default Footer
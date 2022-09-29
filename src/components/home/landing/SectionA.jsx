import React from 'react'
import { Link } from 'react-router-dom'

function SectionA() {
  return (
    <div className='sectionA'>
    <div  className='sectionA-hero'>
        <h3 className='sectionA-hero-title'>Le krysto c'est la monnaie que vous recevez  <span>Chaque jour,</span>des votre inscription sur la plateforme.</h3>
    <p>Vous recevez quotidienement entre 0 et 1 Krysto, en fonction du solde de votre compte courant. </p>
    <p>Cette monnaie, créée par notre système, peut être utilisée pour acheter des biens d'occasion ou des services, via notre système de petites annonces.</p>
    </div>
    <div  className='sectionA-equity'>
        <p className='sectionA-equity-title'>Une monnaie équitable, qui profite a tous.</p>
    <h3>Les bénéfices de la création monétaire sont répartis équitablement entre tous les uttilisateurs de notre monnaie: 
        <span>Vous recevez tous, chaque jour, la même quantité de monnaie !</span>
    </h3>
 
    </div>

    <div>
    {/* <button  className='btn-cta'>
<Link to={"/money"}>

    <div className="hover"></div>
        <span>Le modèle mathématique</span>
</Link>
    </button>
    <button  className='btn-cta'>
<Link to={"/krysto-details"}>

    <div className="hover"></div>
        <span>Le krysto en détails</span>
</Link>
    </button> */}
    </div>
    </div>
  )
}

export default SectionA
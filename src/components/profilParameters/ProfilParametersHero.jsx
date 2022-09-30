import React from 'react'
import { FaCheck } from 'react-icons/fa'
import TitlePage from '../layout/TitlePage'

function ProfilParametersHero({profil}) {
  return (
    <div className='parameters-hero'>
        <TitlePage title={`Paramètres du compte de ${profil.user.name}`} />
         <div className="parameters-hero-content">

         {profil.user.emailChecked ? 
         
         <div className="email-checked">
            <FaCheck/>
            <p>email verifiée</p>
          </div>
         : 
         
         <div className="email-unchecked">
            <FaCheck/>
            <p>email non verifiée</p>
          </div>
         }
      
         
         <div className="plan-key">
           
            <p>{profil.user.plan.key}</p>
          </div>
         
       
         
         </div>
    </div>
  )
}

export default ProfilParametersHero
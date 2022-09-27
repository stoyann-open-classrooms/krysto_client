import React from 'react'
import TitlePage from '../../components/layout/TitlePage'
import SubscriptionCard from '../../components/register/subscriptionCard/SubscriptionCard'
import './registerSubscribe.css'
function RegisterSubscription() {
  return (
    <section>
      <TitlePage title={"Choissisez l'offre qui vous convient"}/>
      <h3>Inscription gratuite pour les 1000 premmiers utilisateur</h3>
        <p>Pour accéder à tous les services Krysto et recevoir vos òto tous les jours, inscrivez-vous en choisissant parmis les formules suivantes :</p>
        
        <SubscriptionCard/>

  
      
    </section>
  )
}

export default RegisterSubscription
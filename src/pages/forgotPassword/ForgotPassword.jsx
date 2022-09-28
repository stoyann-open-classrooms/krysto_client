import React from 'react'
import TitlePage from '../../components/layout/TitlePage'


function ForgotPassword() {
  return (
    <section>
 <TitlePage title={"Réinitalisation de votre mot de passe."}/>
 
 
 
   <div class="container p-4 mt-6 ">
  <div class="message-header">
    <p>Merci d'indiquer l'adresse e-mail de votre compte, afin que nous puissions vous envoyer le lien qui permettra de réinitialiser votre mot de passe.</p>
  </div>
  <div class="message-body">
  <form className="form">
   <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Email"/>
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
<div class="field is-grouped">
  <div class="control">
    

    <button class="submit-btn">Envoyer l'e-mail de récupèration</button>
    <button class="submit-btn">Retour</button>
    </div>


</div>
</form>
  </div>
</div>











   
   
       </section>
  )
}

export default ForgotPassword
import React from 'react'
import { Link } from 'react-router-dom'

function ConfirmEmail() {
  return (
    <main className='container p-4'>
        <div className="container has-text-centered">

      <h1 className='title is-1'>Email Validé !</h1>

      <p>
        Merci virginie, votre adresse e-mail a bien été validée. Votre compte
        courant a été créé. Il sera mis en service dès demain  (14h), lors
        de la prochaine mise à jour du système. Vous pourrez alors accéder à
        tous les services Krysto. En attendant, vous pouvez vous connecter à
        votre compte, et faire vos premiers pas sur la plateforme ! Bienvenue
        parmi nous !
      </p>

      <div className="title is-2">Aidez-nous à faire connaitre Krysto</div>
      <p>En partageant notre page Facebook</p>
      <a href='https://www.facebook.com/Krysto.noumea/' className="button">Facebook</a>
        </div>
<Link to={'/login'} className="button is-large">Se connecter</Link>
    </main>
  )
}

export default ConfirmEmail

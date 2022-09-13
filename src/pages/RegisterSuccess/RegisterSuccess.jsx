import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../components/shared/spinner/Spinner'
import { reset } from '../../features/auth/authSlice'

function RegisterSuccess() {


    const { user, isLoading, isError, isSuccess } = useSelector(
        (state) => state.auth,
      )
      
      const dispatch = useDispatch()
    
    //   useEffect(() => {
    //     return () => {
    //       if (isSuccess) {
    //         dispatch(reset())
    //       }
    //     }
    //   }, [dispatch, isSuccess, isError])
    
    //   useEffect(() => {
    //     dispatch(getProfil())
    //   }, [])
    
      console.log(user.emailParams.html)
      if (!user) {
        return <Spinner />
      }



  return (
    <main className='container p-6'>
        <div className="hgroup container has-text-centered p-2 mb-6">

        <h1 className='title is-1'>Félicitation {user.user.name} </h1>
        <h2 className='title is-2'>Vous êtes inscrit sur Krysto !</h2>
        </div>

        <div className="notification p-6 message-register-success">
            <p>Nous vous avons envoyer un lien d'activation a l'adresse <span> {user.user.email}</span>  Merci de cliquez sur ce lien pour valider votre compte </p>
        </div>
        <div className="resent has-text-centered container p-6">

        <p className='mb-6'>Vous n'avez pas reçu l'email de confirmation ? Verifier dans vos spam ou cliquer sur le bouton ci-dessous pour en recevoir un nouveau</p>
        <div className="button">Renvoyer l'e-mail d'activation</div>
        </div>
    </main>
  )
}

export default RegisterSuccess
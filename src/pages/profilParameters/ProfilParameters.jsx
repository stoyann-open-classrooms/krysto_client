import React, { useEffect } from 'react'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HeroTitle from '../../components/shared/heroTitle/HeroTitle'
import Spinner from '../../components/shared/spinner/Spinner'
import { getProfil, reset } from '../../features/user/userSlice'
import './profilParameters.css'
import { FaCheck, FaLock, FaMailBulk, FaTrash, FaVoicemail } from 'react-icons/fa'
import ResetMailForm from '../../components/profilParameters/ResetMailForm'
import UpdatePassword from '../../components/profilParameters/UpdatePassword'
import ProfilParametersMap from '../../components/profilParameters/ProfilParametersMap'
import { Link } from 'react-router-dom'
function ProfilParameters() {
  const { profil, isLoading, isError, isSuccess } = useSelector(
    (state) => state.user,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess, isError])

  useEffect(() => {
    dispatch(getProfil())
  }, [])

  console.log(profil)

  if (!profil.user) {
    return <Spinner />
  } else {
    return (
      <div className='page-content'>
        <HeroTitle title={`Paramètres du compte de ${profil.user.name}`} />
     
     <section className='parameters-section'>
      <h3>Modifier votre e-mail</h3>
      <Link to={'/private/change-email'}>
      <button className='btn-parameters'>
        Modifier Votre adresse e-mail</button>
      </Link>
     </section>
     <section className='parameters-section'>
      <h3>Modifier votre mot de passe</h3>
      <button className='btn-parameters'>
        Modifier Votre mot de passe</button>
     </section>
     <section className='parameters-section'>
      <h3>Résilier votre abonement</h3>
      <button className='btn-parameters'>
        Résilier votre abonement</button>
     </section>
     <section className='parameters-section'>
      <h3>Supprimer votre compte</h3>
      <button className='btn-parameters'>
      <FaTrash/>  Supprimer votre compte</button>
     </section>
      </div>
    )
  }
}

export default ProfilParameters

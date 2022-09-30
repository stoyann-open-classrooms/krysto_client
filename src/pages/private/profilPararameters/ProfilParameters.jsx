import React, { useEffect } from 'react'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfil, reset } from '../../../features/user/userSlice'
import { Link } from 'react-router-dom'
import Spinner from '../../../components/shared/spinner/Spinner'
import './ProfilParameters.css'
import ProfilParametersHero from '../../../components/profilParameters/ProfilParametersHero'
import LocalisationSection from '../../../components/profilParameters/LocalisationSection'
import MailNotificationSection from '../../../components/profilParameters/MailNotificationSection'
import UpdatePasswordSection from '../../../components/profilParameters/UpdatePasswordSection'
import DangerSectionParameters from '../../../components/profilParameters/DangerSectionParameters'
import UpdateEmail from '../../../components/profilParameters/UpdateEmail'
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
    
        <section className='parameters-section'>
         <ProfilParametersHero profil={profil}/> 
        <LocalisationSection />
        <MailNotificationSection />
        <UpdateEmail />
        <UpdatePasswordSection />
        <DangerSectionParameters/>
      </section>
      
    )
  }
}

export default ProfilParameters

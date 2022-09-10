import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HeroTitle from '../../components/shared/heroTitle/HeroTitle'
import Spinner from '../../components/shared/spinner/Spinner'
import { getProfil, reset } from '../../features/user/userSlice'

function Dashboard() {

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


  if(!profil) {
    return <Spinner/>
  } else {

    return (
      <main>
    <HeroTitle
        title={`Bienvenue sur votre dashboard ${profil.name}`}
      />
   
    </main>
  )
}
}

export default Dashboard

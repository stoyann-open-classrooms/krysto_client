import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../../components/shared/spinner/Spinner'
import { getProfil, reset } from '../../../features/user/userSlice'

import "./dashboard.css"
import { NavLink, Outlet } from 'react-router-dom'
import TitlePage from '../../../components/layout/TitlePage'
import ProfilIcone from '../../../assets/icones/primary-home-logo.png'

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

  if (!profil.user || isLoading) {
    return <Spinner />
  } else {
    return (
      <section>
   <TitlePage title={"Bienvenue sur votre dashboard"} icone={ProfilIcone}/>
      </section>












    )
  }
}

export default Dashboard

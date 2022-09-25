import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../../components/shared/spinner/Spinner'
import { getProfil, reset } from '../../../features/user/userSlice'

import "./dashboard.css"
import { NavLink, Outlet } from 'react-router-dom'


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
     <div className="title-page">
      <h1>Bienvenue sur votre Dashboard</h1>
      {/* <img src={HomeLogo} alt="" /> */}
     </div>
  
      </section>












    )
  }
}

export default Dashboard

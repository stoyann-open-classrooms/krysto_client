import React, { useEffect } from 'react'
import NoPhoto from '../../../assets/no_picture.png'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Spinner from '../../../components/shared/spinner/Spinner'
import { getProfil, reset } from '../../../features/user/userSlice'

import { Link } from 'react-router-dom'
import { FaGrinTears } from 'react-icons/fa'
import './dashboard.css'
import TitlePage from '../../../components/layout/TitlePage'
import DashboardMiniCard from '../../../components/dashboardMiniCard/DashboardMiniCard'

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
      <div className="page-content">
   <TitlePage title={`Bienvenue sur votre ${profil.user.name}`}/>
        <div className="dashboard-section">
         
      
          <div className="dashboard-accounts-container">
            {/* <CardRib wallet={profil.user.walletMain} />
            <CardRib wallet={profil.user.walletsDeposit[0]} /> */}
          </div>
       
        </div>
      
        <div className="dashboard-section">
          <h3>Vos annonces ({profil.user.offers.length})</h3>
        </div>
      

        
      </div>
    )
  }
}

export default Dashboard

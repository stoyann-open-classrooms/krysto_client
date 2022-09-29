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
      <h4>Total de vos comptes 59.78 Krysto</h4>
       <div className="wallets">
        </div>  
       <div className="propositions">
        <div className="sent">
          <h5>proposition envoyés</h5>
        </div>
        <div className="sell">
          <h5>proposition reçue</h5>
        </div>
        </div>  
       <div className="offer">
       Vous avez 5 trocs
         3 trocs en ligne 
         2 trocs en brouillon
        </div>  
    
        </div>
      
       

        
      </div>
    )
  }
}

export default Dashboard

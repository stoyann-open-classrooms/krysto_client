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
      <section className="dash-section">

   <TitlePage title={`Bienvenue sur votre profil ${profil.user.name}`}/>
        <div className="dashboard-section">

          <div className="dashboard-info">
          <button  className='btn-cta'>
<Link to={"/add-offer"}>

    <div className="hover"></div>
        <span>Publier un troc</span>
</Link>
    </button>

      <h4 className='total-balance'>Total de vos comptes 59.78 Krysto</h4>
          </div>

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
        <button  className=' parameters-btn'>
<Link to={"/private/profil-parameters"}>

    <div className="hover"></div>
        <span>Parametres du compte</span>
</Link>
    </button>
        </div>
      
       

        
      </section>
    )
  }
}

export default Dashboard

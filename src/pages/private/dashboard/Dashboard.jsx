import React, { useEffect } from 'react'
import NoPhoto from '../../../assets/no_picture.png'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HeroTitle from '../../../components/shared/heroTitle/HeroTitle'
import Spinner from '../../../components/shared/spinner/Spinner'
import { getProfil, reset } from '../../../features/user/userSlice'
import CardRib from '../../../components/shared/cardRib/CardRib'
import { Link } from 'react-router-dom'
import { FaGrinTears } from 'react-icons/fa'
import './dashboard.css'
import MiniOfferCArd from '../../../components/dashboard/miniCard/MiniOfferCArd'

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
        <HeroTitle
          title={`Bienvenue sur votre dashboard ${profil.user.name}`}
        />
        <div className="dashboard-section">
          <h3>Vos comptes</h3>
          <div className="dashboard-accounts-container">
            <CardRib wallet={profil.user.walletMain} />
            <CardRib wallet={profil.user.walletsDeposit[0]} />
          </div>
          <Link to={'/wallets/main'} className="submit-btn">
            gerez mes comptes
          </Link>
        </div>
      
        <div className="dashboard-section">
          <h3>Vos annonces ({profil.user.offers.length})</h3>
          <div className="dashboard-slider">
            <div className="slider-content">

          {profil
        ? profil.user.offers.map((offer) => (
          <MiniOfferCArd key={offer._id} offer={offer} />
          ))
          : ''}
          </div>
          </div>
          
        </div>
      

        <Link to={'/private/profil-parameters'}>
          <button className="btn-danger">
            Modifier les parametres de votre compte
          </button>
        </Link>
      </div>
    )
  }
}

export default Dashboard

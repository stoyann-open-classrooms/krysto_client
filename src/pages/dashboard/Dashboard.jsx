import React, { useEffect } from 'react'
import NoPhoto from '../../assets/no_picture.png'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HeroTitle from '../../components/shared/heroTitle/HeroTitle'
import Spinner from '../../components/shared/spinner/Spinner'
import { getProfil, reset } from '../../features/user/userSlice'
import CardRib from '../../components/shared/cardRib/CardRib'
import { Link } from 'react-router-dom'
import { FaGrinTears } from 'react-icons/fa'

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
      <div className='page-content'>
        <HeroTitle
          title={`Bienvenue sur votre dashboard ${profil.user.name}`}
         
        />
     
        <div className="dashboard-accounts-container p-4">
            <h3 className="title is-3">Vos comptes</h3>
            <CardRib wallet={profil.user.walletMain} />
            <CardRib wallet={profil.user.walletsDeposit[0]} />
        
        </div>
        <div className="dashboard-proposals-container p-4">
            <h3 className="title is-3">Vos propositions</h3>
            <div className="depositAccount box">
              <h4>Proposition envoyées</h4>
              
            </div>
            <div className="currentAccount box">
              <h4>Proposition reçue</h4>
            </div>
        </div>
        <div className="dashboard-offers-container p-4">
            <h3 className="title is-3">Vos Annonces publiées ({profil.user.offers.length})</h3>
           <div className="box">
            {/* OfferMiniCard */}
           </div>
        </div>

        <Link to={"/profil-parameters"}>
          <button className="btn-danger">

          Modifier les parametres de votre compte
          </button>
          </Link>
      
      </div>
    )
  }
}

export default Dashboard

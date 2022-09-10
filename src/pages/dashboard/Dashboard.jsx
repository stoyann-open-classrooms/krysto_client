import React, { useEffect } from 'react'
import NoPhoto from '../../assets/no_picture.png'

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

  if (!profil || isLoading) {
    return <Spinner />
  } else {
    return (
      <main>
        <HeroTitle
          title={`Bienvenue sur votre dashboard ${profil.name}`}
          image={NoPhoto}
        />
        <div className="dashbord-top container p-4">
          <div class="field is-grouped is-grouped-multiline">
            <div class="control mt-5">
              <div class="tags has-addons is-large">
                <span class="tag is-dark is-large">compte validé</span>
                <span class="tag is-info is-large is-success">Oui</span>
              </div>
              <div class="control mt-5">
                <div class="tags has-addons is-large">
                  <span class="tag is-dark is-large">Total de vos comptes</span>
                  <span class="tag is-info is-large">30.44 Krysto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-accounts-container p-4">
            <h3 className="title is-3">Vos comptes</h3>
            <div className="depositAccount box">
              <h4>Compte de dépot</h4>
            </div>
            <div className="currentAccount box">
              <h4>Compte courant</h4>

            </div>
        </div>
        <div className="dashboard-proposals-container p-4">
            <h3 className="title is-3">Vos comptes</h3>
            <div className="depositAccount box">
              <h4>Proposition envoyées</h4>
            </div>
            <div className="currentAccount box">
              <h4>Proposition reçue</h4>
            </div>
        </div>
        <div className="dashboard-offers-container p-4">
            <h3 className="title is-3">Vos Annonces publiées</h3>
           <div className="box">
            {/* OfferMiniCard */}
           </div>
        </div>
      </main>
    )
  }
}

export default Dashboard

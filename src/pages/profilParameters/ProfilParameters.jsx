import React, { useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HeroTitle from '../../components/shared/heroTitle/HeroTitle'
import Spinner from '../../components/shared/spinner/Spinner'
import { getProfil, reset } from '../../features/user/userSlice'
import  './profilParameters.css'
import { FaCheck, FaLock } from 'react-icons/fa'
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
      <main className='pb-6 ' >



<div className="dashbord-top container p-4">
          <div class="field is-grouped is-grouped-multiline">
            <div class="control mt-5">
              <div class="tags has-addons is-large">
                <span class="tag is-dark is-large">compte actif</span>
                {
                profil.user.isActive ? <span class="tag is-info is-large is-success">Oui</span> :  <span class="tag is-info is-large is-danger">Non</span>
                } 
              </div>
              <div class="tags has-addons is-large">
                <span class="tag is-dark is-large">Type d'abonement</span>
                <span class="tag is-info is-large is-success">{profil.user.plan.name}</span>
              </div>
              <div class="tags has-addons is-large">
                <span class="tag is-dark is-large">Date de création du compte</span>
                <span class="tag is-info is-large is-info">{new Date(profil.user.plan.created).toLocaleDateString()}</span>
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






        <HeroTitle title={`Paramètres du  compte de ${profil.user.name}`} />
    
        <div className="container p-2">
          <section className="parameters-localisation">
          <h1 className='title is-4 cadre'> Localiser votre position principale</h1>
          { profil.user.coordinates ? 
          <div className="leaflet-container">
            <MapContainer
              className="container p-4"
              style={{ height: '150px' }}
              center={[profil.user.coordinates[0], profil.user.coordinates[1]]}
              zoom={13}
              scrollWheelZoom={true}
              >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
                />
  <Marker
                position={[profil.user.coordinates[0], profil.user.coordinates[1]]}
              >
              <Popup>hello popup</Popup>
            </Marker>
   
            </MapContainer>
          </div>
      : <Spinner/> }
      </section>
      <section className=" mt-6 parameters-email-notification">
      <h1 className='title is-4 cadre'>  Activer les notifications par e-mail</h1>
<label class="checkbox">
  <input type="checkbox"/>
  Remember me
</label>
      </section>
      <section className="mt-6 parameters-section">
      <h1 className='title is-4 cadre'> Modifier votre e-mail</h1>
      <form className="form p-4">

      <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input is-large" type="email" placeholder="Email"/>
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <FaCheck/>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left">
    <input class="input is-large" type="password" placeholder="Password"/>
    <span class="icon is-small is-left">
      <FaLock/>
    </span>
  </p>
  <div class="field is-grouped mt-5">
  <div class="control">
    <button class="button is-large is-danger">Modifier</button>
  </div>
  <div class="control">
    <button class="button is-large is-link is-light">Annuler</button>
  </div>
</div>
      </div>
</form>

      </section>
      <section className=" mt-6 parameters-section">
      <h1 className='title is-4 cadre'> Modifier votre mot de passe</h1>

      <form className="form p-4">

<div class="field">
<p class="control has-icons-left">
<input class="input is-large" type="password" placeholder="Ancien mot de passe"/>
<span class="icon is-small is-left">
<FaLock/>
</span>
</p>
</div>

<div class="field">
<p class="control has-icons-left">
<input class="input is-large" type="password" placeholder="Nouveau mot de passe"/>
<span class="icon is-small is-left">
<FaLock/>
</span>
</p>
</div>

<div class="field">
<p class="control has-icons-left">
<input class="input is-large" type="password" placeholder="Repeter le mot de passe"/>
<span class="icon is-small is-left">
<FaLock/>
</span>
</p>
</div>

<div class="field is-grouped mt-5">
<div class="control">
<button class="button is-large is-danger">Modifier</button>
</div>
<div class="control">
<button class="button is-large is-link is-light">Annuler</button>
</div>
</div>
</form>





      </section>
      <section className=" mt-6 parameters-section">
      <h1 className='title is-4 cadre'> Résilier votre abonement</h1>
      <button className='button is-large is-danger'>Resilier votre abonement</button>
      </section>
      <section className="mt-6 parameters-section">
      <h1 className='title is-4 cadre'> Supprimer votre compte</h1>
      <button className='button is-large is-danger'>Supprimer votre compte</button>
      </section>
        </div>
      </main>
    )
  }
}

export default ProfilParameters

import React, { useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

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

  if (!profil) {
    return <Spinner />
  } else {
    return (
      <main>
        <HeroTitle title={`Bienvenue sur votre dashboard ${profil.name}`} />
        <div className="container p-6">
          <div className="leaflet-container">
            <MapContainer
              className="container p-4"
              style={{ height: '250px' }}
              center={profil.coordinates}
              zoom={13}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
              />

   
            </MapContainer>
          </div>
        </div>
      </main>
    )
  }
}

export default Dashboard

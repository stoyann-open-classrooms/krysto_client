import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Spinner from '../../components/shared/spinner/Spinner'
import { getOffer, reset } from '../../features/offer/offerSlice'
import { getProfil, profil } from '../../features/user/userSlice'

import noPhoto from '../../assets/no_picture.png'
import './offer.css'
import { useState } from 'react'
import Modal from '../../components/shared/spinner/modal/Modal'
function Offer() {
  const { profil } = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(getProfil())
  }, [])

  console.log(profil)



  const params = useParams()

  const { offer, isLoading, isError, isSuccess } = useSelector(
    (state) => state.offer,
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
    dispatch(getOffer(params.id))
  }, [])
  console.log(offer.offer)

  if (!offer.offer) {
    return <Spinner />
  }

  return (
    <section className="offer-section">
      <div className="offer-slider-container">
        {offer.offer.gallery[0] ? (
          <img
            src={`http://152.228.137.213:4001/${offer.offer.gallery[0]}`}
            alt=""
          />
        ) : (
          <img src={noPhoto} alt="" srcset="" />
        )}
      </div>
      <div className="offer-page-top">
        *<h1>{offer.offer.title}</h1>
        <div className="price">
          <p>{offer.offer.amountMony}</p>
        </div>
      </div>
      <div className="offer-page-body">
        <p>{offer.offer.text}</p>
      </div>
      <Modal btn={'Faire une proposition'} title={'Faire une offre'}>
        <h3>Le prix de cette annonce est de {offer.offer.amountMony} Krysto</h3>
        <p>
          Vous pouvez proposer au vendeur un montant inférieur ou suppérieur au
          prix annoncé. Le vendeur pourra accepter ou refuser votre proposition,
          en fonction des autres offres qu'il recevra.
        </p>
        <form>
          <div className="field">
            <label htmlFor="">Montant de l'offre en Krysto.</label>
            <input type="number" />
          </div>

          <div className="field">
            <textarea placeholder="Laisser un message..." name=""></textarea>
          </div>

          <button className="submit-btn">Envoyer ma proposition</button>
        </form>
        <div className="authorized">Montant autorisé par vos comptes: </div>
      </Modal>
    </section>
  )
}

export default Offer

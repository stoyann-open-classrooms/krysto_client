import React, { useEffect } from 'react'
import Billet from "../../../assets/images/francs_pacifique_5000.jpg"
import Coins from "../../../assets/coins/piece_stoyan-02.svg"
import Star from "../../../assets/icones/star.png"
import Offer from "../../../assets/icones/offer.png"
import HandMoney from "../../../assets/icones/give-money.png"
import Gift from "../../../assets/icones/gift.png"
import './RecapSection.css'
import { useDispatch, useSelector } from 'react-redux'
import { getNbUsers, reset } from '../../../features/user/userSlice'
import { getOffers } from '../../../features/offer/offerSlice'
import Spinner from '../../shared/spinner/Spinner'
function RecapSection() {


  const { nbUsers, isLoading, isError, isSuccess } = useSelector(
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
    dispatch(getNbUsers())
  }, [])

  console.log(nbUsers)

  const { offers } = useSelector(
    (state) => state.offer,
  )

  useEffect(() => {
    dispatch(getOffers())
  }, [])
  console.log(offers)



if(!offers.offers || !nbUsers.nbUsers){
  <Spinner/>
}




  return (
    <section className='container p-4 recap-section'>
        <nav class="level m-3">
  <div class="level-item has-text-centered item-recap mb-6">
    <div>
      <img className='mb-5' src={Star} alt="" />
      <p class="heading">Uttilisateurs inscrit</p>
      {nbUsers.nbUsers ?  <p class="title">{nbUsers.nbUsers}</p>   : <p>0</p> }
      
    </div>
  </div>
  <div class="level-item has-text-centered item-recap mb-6">
    <div>
      <img className='mb-5' src={Offer} alt="" />
      <p class="heading">Annonces en ligne</p>
      {offers.offers ?    
      <p class="title">
        {offers.offers.length}</p>
      
      : <p>0</p> }
    </div>
  </div>

  <div class="level-item has-text-centered item-recap mb-6">
    <div>
      <img className='mb-5' src={Gift} alt="" />
      <p class="heading">Comptes gratuit disponible</p>
      <p class="title">{nbUsers.limitForFreePlan}</p>
    </div>
  </div>
</nav>

    


  <p className='title is-3 mt-6 mb-6 has-text-centered'>Ne mettez pas tous vos oeufs dans le même pannier !</p>
<h1 className='title is-3 mt-6 mb-6 has-text-centered'>Economisez vos Xpf payer Krysto !</h1>
    <div className='content-image'>
    <img src={Billet} alt="Billet de 5000 XPF" />
    <img src={Coins} alt="Billet de 5000 XPF" />

    </div>
    <p className='paragraph'>Le Krysto est une monnaie d'usage vous permettant d'acheter des biens ou des services sur le marché de l'occasion.
      Tout ce que dépenser en Kryto ce sont des XPF économiser
    </p>
    </section>
  )
}

export default RecapSection
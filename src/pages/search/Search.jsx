import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TitlePage from '../../components/layout/TitlePage'
import OffersContainer from '../../components/search/OffersContainer'
import {getOffers, reset} from '../../features/offer/offerSlice'
import OfferIcone from '../../assets/icones/offer-icone-primary.png'
import OfferSearch from '../../components/search/offerSearch/OfferSearch'
import Offer from '../offer/Offer'
import './search.css'

function Search() {

    const { offers, isLoading, isError, isSuccess } = useSelector(
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
        dispatch(getOffers())
      }, [])
      


  return (
    <>
     <OfferSearch icone={OfferIcone}/>
    <section>
        <OffersContainer offers={offers} />
    </section>
    </>
  )
}

export default Search
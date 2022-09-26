import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TitlePage from '../../components/layout/TitlePage'
import OffersContainer from '../../components/search/OffersContainer'
import {getOffers, reset} from '../../features/offer/offerSlice'
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
    <section>
        <h1>rechercher</h1>
        <OffersContainer offers={offers}/>
    </section>
  )
}

export default Search
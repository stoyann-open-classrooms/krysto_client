import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getOffers, reset } from '../../../features/offer/offerSlice'
import Spinner from '../../shared/Spinner'

import OfferItem from '../OfferItem/OfferItem'


function OfferList() {
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
  console.log(offers)

  if (!offers || offers.length === 0) {
    return <Spinner/>
  }

  return (
    <>
      {offers.offers
        ? offers.offers.map((offer) => (
            <OfferItem key={offer._id} offer={offer} />
          ))
        : ''}
    </>
  )
}

export default OfferList

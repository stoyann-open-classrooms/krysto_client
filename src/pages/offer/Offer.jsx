import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Spinner from '../../components/shared/spinner/Spinner'
import { getOffer, reset } from '../../features/offer/offerSlice'

import noPhoto from '../../assets/no_picture.png'
import './offer.css'
function Offer() {

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


if(!offer.offer) {
    return <Spinner/>
}

  return (
    <section>
        <div className="offer-slider-container">

            {offer.offer.gallery[0] ? 
        <img
        src={`http://152.228.137.213:4001/${offer.offer.gallery[0]}`}
        alt=""
        />
    : 
        <img src={noPhoto} alt="" srcset="" />
    }
        </div>
        <div className="offer-page-top">*
        <h1>
         {offer.offer.title}
        </h1>
        <div className="price">
            <p>{offer.offer.amountMony}</p>
        </div>
        </div>
        <div className="offer-page-body">
            <p>{offer.offer.text}</p>
        </div>
        <div className="offer-page-footer buttons">
            <button className='btn-offer'>Contacter le vendeur</button>
            <button className='btn-offer'>Faire une proposition</button>
        </div>
    </section>
  )
}

export default Offer
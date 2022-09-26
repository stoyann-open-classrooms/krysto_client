import React from 'react'
import OfferItem from './offerItem/OfferItem';

function OffersContainer({offers}) {
    console.log(offers);
  return (
    <div className='offers-container'>
        <OfferItem/>
    </div>
  )
}

export default OffersContainer
import React from 'react'
import OfferItem from './offerItem/OfferItem';

function OffersContainer({ offers }) {
    console.log(offers);
    return (
        <div className='offers-container'>
            {offers.offers
                ? offers.offers.map((offer) => (
                    <OfferItem key={offer._id} offer={offer} />
                ))
                : ''}
        </div>
    )
}

export default OffersContainer
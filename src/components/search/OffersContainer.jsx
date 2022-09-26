import React from 'react'
import Spinner from '../shared/spinner/Spinner';
import OfferItem from './offerItem/OfferItem';

function OffersContainer({ offers }) {
    console.log(offers);
    return (
        <div className='offers-container'>




            {offers.offers
                ? offers.offers.map((offer) => (
                    <OfferItem key={offer._id} offer={offer} />
                ))
                : <Spinner/>}
        </div>
    )
}

export default OffersContainer
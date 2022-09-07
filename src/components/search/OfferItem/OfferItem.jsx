import React from 'react'

function OfferItem({offer}) {
    console.log(offer);
  return (
    <div>
        <h3>{offer.title}</h3>
    </div>
  )
}

export default OfferItem
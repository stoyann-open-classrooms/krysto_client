import React from 'react'
import HeroTitle from '../../components/shared/heroTitle/HeroTitle'

function MyOffers() {
  
  return (
    <main>
      <HeroTitle
        title={'Vos annonces'}
       
      />

      {/* <div className="container-offers">
        {offers
          ? offers.map((offer) => <p className="box">{offer.title}</p>)
          : ''}
      </div> */}
    </main>
  )
}

export default MyOffers

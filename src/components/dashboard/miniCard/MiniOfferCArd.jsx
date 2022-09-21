import './MiniOfferCard.css'
function MiniOfferCArd({offer}) {
    console.log(offer);
  return (
    <div className='mini-offer-card'>
        <h5>{offer.title}</h5>
 
    </div>
  )
}

export default MiniOfferCArd
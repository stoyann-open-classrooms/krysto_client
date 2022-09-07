import { FaCoins, FaLocationArrow, FaTag } from 'react-icons/fa'
import './offerItem.css'
function OfferItem({ offer }) {
  console.log(offer)
  return (
    <div className='offer-card'>
      <div className="slider-card">
        <img src={`http://152.228.137.213:4001/${offer.gallery[0]}`} alt="" />
      </div>
      <div className="body-card">
        <div className="body-card-header">
        <h4> <FaTag/>{offer.category.name}</h4>
        <h4> <FaLocationArrow/>{offer.city}</h4>
        </div>
        <div className="body-card-content">
        <h3>{offer.title}</h3>
        <h4> {offer.amountMony} <FaCoins/>K</h4>
        </div>
      </div>
    </div>
  )
}

export default OfferItem

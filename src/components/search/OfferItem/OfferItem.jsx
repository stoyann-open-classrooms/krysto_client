import {
  FaArrowLeft,
  FaArrowRight,
  FaCoins,
  FaLocationArrow,
  FaTag,
} from 'react-icons/fa'
import Coins from '../../../assets/coins/piece_stoyan-02.svg'

import './offerItem.css'
function OfferItem({ offer }) {
  console.log(offer)
  return (
    <div className="offer-card card">
      <div className="slider-card">
 
        <img src={`http://152.228.137.213:4001/${offer.gallery[0]}`} alt="" />
      </div>
      <div className="body-card">
        <div className="body-card-header">
          <h4>
            {' '}
            <FaTag />
            {offer.category ? offer.category.name : 'aucune categorie'}
          </h4>
          <h4>
            {' '}
            <FaLocationArrow />
            {offer.city}
          </h4>
        </div>
        <div className="body-card-content">
          <h3>{offer.title}</h3>
          <div className="price">
            <h4> {offer.amountMony}</h4>
            <img className="image is-32x32" src={Coins} alt="" />
          </div>
        </div>

        <footer class="card-footer mt-5">
          <a
            href={`/offer/${offer._id}`}
            class="card-footer-item button detail-btn"
          >
            Détails de l'annonce
          </a>
        </footer>
      </div>
    </div>
  )
}

export default OfferItem

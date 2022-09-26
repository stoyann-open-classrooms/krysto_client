import './offerItem.css'
import test from '../../../assets/images/tortue_plastic.jpeg'
import coins from '../../../assets/coins/coinGif.gif'
function OfferItem({ offer }) {
  return (
    <div className="offer-card">
      <div className="offer-img-container">
        <img src={test} alt="" />
      </div>
      <div className="offer-card-body">
        <div className="card-body-top">
          <h3>{offer.title}</h3>
          <div className="price">
            <div>{offer.amountMony}</div>

            <img src={coins} alt="" />
          </div>
        </div>

        <div className="card-body-content">
            {offer.text}
        </div>
      </div>
    </div>
  )
}

export default OfferItem

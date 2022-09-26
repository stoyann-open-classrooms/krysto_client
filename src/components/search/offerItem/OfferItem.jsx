import './offerItem.css'
import noPhoto from '../../../assets/images/tortue_plastic.jpeg'
import coins from '../../../assets/coins/coinGif.gif'
import { Link } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'
function OfferItem({ offer }) {

    
  return (
    <div className="offer-card">
      <div className="offer-img-container">
      {offer.gallery[0] ? 
        <img
        src={`http://152.228.137.213:4001/${offer.gallery[0]}`}
        alt=""
        />
    : 
        <img src={noPhoto} alt="" srcset="" />
    }
      </div>
      <div className="offer-card-body">
        <div className="card-body-top">
          <h3>{offer.title}</h3>
          <div className="price">
            <div>{offer.amountMony}</div>
            <img src={coins} alt="" />
            <div className="translate">{offer.amountMony * 1000} xpf</div>
          </div>
        </div>

        <div className="card-body-content">
            <p>

            {offer.text}
            </p>
        </div>
  
      </div>
      <div className="card-footer">
        <Link to={`/offer/${offer._id}`}>
            <button className='btn-card'>
                

                <FaEye/>
              

                voir l'annonce
               
                </button>
        </Link>
        </div>
    </div>
  )
}

export default OfferItem

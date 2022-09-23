import { Link } from 'react-router-dom'
import coins from '../../../assets/coins/coinGif.gif'
import './cardSlide.css'
function CardSlide({offer}) {
  return (
    <Link to={`/offer/${offer._id}`}>
    <div className='card-slide'>
            <img src={`http://152.228.137.213:4001/${offer.gallery[0]}`} alt="" />
     <div className="card-slide-info">

        <p className='card-slide-title'>{offer.title}</p>
        <div className="amount">
        <p>{offer.amountMony}</p>
         <img src={coins} alt="" />
        </div>
     </div>
    </div>
    </Link>
  )
}

export default CardSlide
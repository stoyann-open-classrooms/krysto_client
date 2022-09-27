import noPhoto from '../../../assets/no_picture.png'
import './miniCardOffer.css'
function MiniCardTroc({offer}) {
  return (
    <div className='mini-card-offer'>
        <div className="image-container">

         {offer.gallery[0] ? 
        <img
        src={`http://152.228.137.213:4001/${offer.gallery[0]}`}
        alt=""
        />
        : 
        <img src={noPhoto} alt="" srcset="" />
    }
    </div>
    <div className="mini-card-body">

        <h3>{offer.title}</h3>
        <h3>{offer.status}</h3>
    </div>
    </div>
  )
}

export default MiniCardTroc
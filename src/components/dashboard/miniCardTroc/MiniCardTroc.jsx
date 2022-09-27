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
<div className="mini-card-body-top">

        <h3>{offer.title}</h3>
        <div>{offer.amountMony}</div>
</div>
<div className="mini-card-body-content">

        <h3>{offer.text}</h3>
</div>
<div className="mini-card-actions">
<button>Voir</button>
<button>Modifier</button>
<button>Supprimer</button>

</div>
    </div>
    </div>
  )
}

export default MiniCardTroc
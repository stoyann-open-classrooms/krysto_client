import { FaArrowLeft, FaArrowRight, FaCoins, FaLocationArrow, FaTag } from 'react-icons/fa'
import './offerItem.css'
function OfferItem({ offer }) {
  console.log(offer)
  return (
    <div className='offer-card card'>
      <div className="slider-card">
        {/* <div className="controls">
            <div className="buttons">

                <button className='button is-small arrow-slider'><FaArrowLeft/></button>
                <button className='button is-small arrow-slider'><FaArrowRight/></button>
            </div>
        </div> */}
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
      <footer class="card-footer mt-5">
    <a href= {`/offer/${offer._id}`} class="card-footer-item button is-small is-primary">Détails de l'annonce</a>
 
  </footer>
      </div>
    </div>
  )
}

export default OfferItem

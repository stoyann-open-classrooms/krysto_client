import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Spinner from '../../components/shared/spinner/Spinner'
import { getOffer, reset } from '../../features/offer/offerSlice'
import Coins from '../../assets/coins/piece_stoyan-02.svg'
import './offer.css'
function Offer() {
  const [toggleModal, setToggleModal] = useState(false)
  const params = useParams()

  const { offer, isLoading, isError, isSuccess } = useSelector(
    (state) => state.offer,
  )
  const dispatch = useDispatch()

  const toggle = () => {
    setToggleModal(!toggleModal)
  }
  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess, isError])

  useEffect(() => {
    dispatch(getOffer(params.id))
  }, [])
  console.log(offer)

  if (!offer.offer) {
    return <Spinner />
  }
  return (
    <main className="container p-4 offer-container">
      <div className="offer-cover">
        <img
          src={`http://152.228.137.213:4001/${offer.offer.gallery[0]}`}
          alt=""
        />
      </div>

      <div className="box-offer-info">
      <div className="offer-datetime">
          <p>Publiée le : {  new Date(offer.offer.created).toLocaleDateString()}</p>
          <p> à :{  new Date(offer.offer.created).toLocaleTimeString()}</p>
         
   
        </div>
        
        <div className="offer-price">
          <div className="price">
          <p>{offer.offer.amountMony}</p>
          <img src={Coins} alt="" />
           </div>
           <div className="offer-info">

          <p className='price-translate'>{offer.offer.amountMony * 1000} xpf</p>
           </div>
        </div>
      
      </div>
      <h1 className="title title-offer ">{offer.offer.title}</h1>

      <div className="box box-description">{offer.offer.text}</div>

      {/* <div class={toggleModal ? 'modal is-active' : 'modal'}>
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Signaler une annonce.</p>
            <button onClick={toggle} class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body"></section>
          <footer class="modal-card-foot">
            <button class="button is-success">Save changes</button>
            <button class="button">Cancel</button>
          </footer>
        </div>
      </div> */}

      <div className="buttons">

      <a href="/search" className=" button back-btn">
        Revenir a la recherche
      </a>

      <p onClick={toggle} className="button">

        Signaler
      </p>
      </div>
    </main>
  )
}

export default Offer

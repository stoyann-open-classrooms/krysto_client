import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Spinner from '../../components/shared/spinner/Spinner'
import { getOffer, reset } from '../../features/offer/offerSlice'
import Coins from '../../assets/coins/coinGif.gif'
import Modal from '../../components/shared/modal/Modal'
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
    <div className='page-content' >
      <div className="offer-cover">
        <img
          src={`http://152.228.137.213:4001/${offer.offer.gallery[0]}`}
          alt=""
        />
      </div>

      <div className="box-offer-info">
        <div className="offer-datetime">
          <p className='publish'>
            Publiée le :
            <span>

             {new Date(offer.offer.created).toLocaleDateString()}
            </span>
          </p>
          <p className='publish'>
           par :
            <span>
{offer.offer.creator.name}
            </span>
          </p>
        </div>

        <div className="offer-price">
          <div className="price">
            <p>{offer.offer.amountMony}</p>
            <img src={Coins} alt="" />
          </div>
          <div className="offer-info">
            <p className="price-translate">
              {offer.offer.amountMony * 1000} xpf
            </p>
          </div>
        </div>
      </div>

      <div className="buttons mt-5">
        <button className="submit-btn" onClick={toggle}>
          Contacter le vendeur
        </button>
        {/* <Modal
          btn={'Faire une proposition'}
          isActive={false}
          titleModal={'Faire une offre pour cette annonce'}
        >
          <section class="modal-card-body">
            <h4 className="title is-4">
              Le prix de cette annonce a ete fixée a {offer.offer.amountMony}{' '}
              Krysto par son vendeur.
            </h4>
            <p>
              Vous pouvez proposer au vendeur un montant inférieur ou suppérieur
              au prix annoncé. Le vendeur pourra accepter ou refuser votre
              proposition, en fonction des autres offres qu'il recevra.
            </p>
            <form></form>
            <p>Montant maximum autorisé par vos comptes : {}</p>
          </section>
          <footer class="modal-card-foot"></footer>
        </Modal> */}
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

      {/* <p onClick={toggle} className="button">

        Signaler
      </p> */}
    </div>
  )
}

export default Offer

import React, { useEffect } from 'react'
import { FaBoxOpen } from 'react-icons/fa'
import HeroTitle from '../../components/shared/heroTitle/HeroTitle'
import NoPhoto from '../../assets/no_picture.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { reset } from '../../features/user/userSlice'
import { getProfil } from '../../features/user/userSlice'
import Spinner from '../../components/shared/spinner/Spinner'
function MyOffers() {
  const { profil, isLoading, isError, isSuccess } = useSelector(
    (state) => state.user,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess, isError])

  useEffect(() => {
    dispatch(getProfil())
  }, [])

  console.log(profil.user)
  if (!profil.user) {
    return <Spinner />
  }

  return (
    <main>
      <HeroTitle
        title={'Vos annonces'}
        subtitle={'Vous avez actuellement 4 annonces en ligne'}
      />

      <div className="my-offers-container p-6">
        {profil.user
          ? profil.user.offers.map((offer) => (
              <div key={offer._id} className="my-offer-card m-6">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">{offer.title}</p>
                    <p class="card-header-title">{offer.type}</p>
                    
                    <time className="mt-3" datetime="2016-1-1">
                      Publiée le {new Date(offer.created).toLocaleDateString()} à {new Date(offer.created).toLocaleTimeString()}
                    </time>

                    <button class="card-header-icon" aria-label="more options">
                      <span class="icon">
                        <FaBoxOpen />
                      </span>
                    </button>
                  </header>
                  <div class="card-content-my-offer">

                  <img className='image is-64x64'
          src={`http://152.228.137.213:4001/${offer.gallery[0]}`}
          alt=""
        />
                    <div class="content">
                      <div className="offer_info">
                        <p>2 krysto</p>
                        <p>
                          <span>Propositions</span>: {offer.propositions.length}
                        </p>
                      </div>
                      <div className="offer-description">
                        <p>
                          {offer.text}
                        </p>
                      </div>
                    </div>
                  </div>
                  <footer class="card-footer">
                    <Link
                      to={'#'}
                      className="card-footer-item action-my-offer-card"
                    >
                      Voir
                    </Link>
                    <Link
                      to={'#'}
                      className="card-footer-item action-my-offer-card"
                    >
                      Modifier
                    </Link>
                    <Link
                      to={'#'}
                      className="card-footer-item action-my-offer-card-danger"
                    >
                      Supprimer
                    </Link>
                  </footer>
                </div>
              </div>
            ))
          : ''}
      </div>

      {/* <div className="container-offers">
        {offers
          ? offers.map((offer) => <p className="box">{offer.title}</p>)
          : ''}
      </div> */}
    </main>
  )
}

export default MyOffers

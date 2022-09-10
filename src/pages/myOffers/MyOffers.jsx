import React from 'react'
import { FaBoxOpen } from 'react-icons/fa'
import HeroTitle from '../../components/shared/heroTitle/HeroTitle'
import NoPhoto from '../../assets/no_picture.png'
import { Link } from 'react-router-dom'
function MyOffers() {
  
  return (
    <main>
      <HeroTitle
        title={'Vos annonces'}
       subtitle={"Vous avez actuellement 4 annonces en ligne"}
      />

    <div className="my-offers-container p-6">
      <div className="my-offer-card">
      <div class="card">
  <header class="card-header">
    <p class="card-header-title">
     Annonce title
    </p>
    <time className='mt-3' datetime="2016-1-1">Publiée le 10/09/2022 à 18H30</time>

    <button class="card-header-icon" aria-label="more options">
      <span class="icon">
        <FaBoxOpen/>
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
  <div class="card-content-my-offer">
    <img style={{height:'150px'}} src={NoPhoto} alt="" />
    <div class="content">
      <div className="offer_info">

        <p>2 krysto</p>
        <p><span>Propositions</span>: 3</p>
      </div>
      <div className="offer-description">

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum in tempora natus vitae corrupti! Harum beatae minima voluptate modi. Provident.</p>
      </div>

   
    
    </div>
  </div>
    <footer class="card-footer">
    <Link to={'#'} className="card-footer-item action-my-offer-card">Voir</Link>
    <Link  to={'#'} className="card-footer-item action-my-offer-card">Modifier</Link>
    <Link  to={'#'} className="card-footer-item action-my-offer-card-danger">Supprimer</Link>
  </footer>

</div>
      </div>
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

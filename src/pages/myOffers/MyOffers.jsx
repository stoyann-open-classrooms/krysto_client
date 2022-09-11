import React, { useEffect } from 'react'
import { FaBoxOpen } from 'react-icons/fa'
import HeroTitle from '../../components/shared/heroTitle/HeroTitle'
import NoPhoto from '../../assets/no_picture.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { reset } from '../../features/user/userSlice'
import { getProfil } from '../../features/user/userSlice'
import Spinner from '../../components/shared/spinner/Spinner'
import OfferList from '../../components/search/OfferList/OfferList'
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
<OfferList user={profil.user}/>
     

      {/* <div className="container-offers">
        {offers
          ? offers.map((offer) => <p className="box">{offer.title}</p>)
          : ''}
      </div> */}
    </main>
  )
}

export default MyOffers

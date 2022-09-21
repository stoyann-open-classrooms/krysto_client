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
import MyOfferList from '../../components/myOffers/MyOfferList'
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
    <div className='page-content'>
      <HeroTitle
        title={'Vos trocs'}
      />
    <MyOfferList user= {profil.user}/>
     
    </div>
  )
}

export default MyOffers

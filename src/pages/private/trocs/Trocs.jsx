import React from 'react'
import TitlePage from '../../../components/layout/TitlePage'
import OfferIcone from '../../../assets/icones/offer-icone-primary.png'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { reset } from '../../../features/category/categorySlice'
import { getProfil } from '../../../features/user/userSlice'
import Spinner from '../../../components/shared/spinner/Spinner'
import MiniCardTroc from '../../../components/dashboard/miniCardTroc/MiniCardTroc'
function Trocs() {
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
  console.log(profil)
if(!profil.user) {
  return <Spinner/>
}
  return (
    <div>
      <TitlePage title={'Mes trocs'} icone={OfferIcone} />
      <h2> Vous avez {profil.user.offers.length} trocs en ligne</h2>

      <div className="my-offers-container">
        {profil.user.offers ? (
          profil.user.offers.map((offer) => (
            <MiniCardTroc key={offer._id} offer={offer}/>
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  )
}

export default Trocs

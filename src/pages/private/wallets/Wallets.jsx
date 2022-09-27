import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, NavLink } from 'react-router-dom'
import Spinner from '../../../components/shared/spinner/Spinner'
import { getProfil, reset } from '../../../features/user/userSlice'

function Wallets() {


  // const { profil, isLoading, isError, isSuccess } = useSelector(
  //   (state) => state.user,
  // )
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   return () => {
  //     if (isSuccess) {
  //       dispatch(reset())
  //     }
  //   }
  // }, [dispatch, isSuccess, isError])

  // useEffect(() => {
  //   dispatch(getProfil())
  // }, [])

  // console.log(profil)

  return (
    <div className="page-content">


      <div className="account-btn-container">
      <button className="submit-btn">
          <NavLink 
    to={'/private/dashboard/wallets/main'}
    className={({ isActive }) => {
        return isActive ? 'dashboard-nav-btn active' : 'dashboard-nav-btn'
      }}
  >

    compte courant
  </NavLink>
    </button>
      <button className="submit-btn">
          <NavLink 
    to={'/private/dashboard/wallets/deposit'}
    className={({ isActive }) => {
        return isActive ? 'dashboard-nav-btn active' : 'dashboard-nav-btn'
      }}
  >

    compte de dépot
  </NavLink>
    </button>
      </div>
      <Outlet />
    </div>
  )
}

export default Wallets

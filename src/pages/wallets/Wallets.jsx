import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, Outlet } from 'react-router-dom'
import HeroTitle from '../../components/shared/heroTitle/HeroTitle'
import { getProfil, reset } from '../../features/user/userSlice'


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

  // console.log(profil.user)

 
  return (
    <div className='page-content'>
         <HeroTitle title={"Gerer vos krysto"}/>
         
        <div className='account-btn-container'>
        <Link className='account-btn' to={'/wallets/main'}>
            Compte courant
        </Link>
        <Link className='account-btn' to={'/wallets/deposit'}  >
            Compte de dépot
        </Link>
      
        </div>
        <Outlet/>
    

    </div>
  )
}

export default Wallets
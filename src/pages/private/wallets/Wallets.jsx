import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate, Outlet, NavLink } from 'react-router-dom'
import HeroTitle from '../../../components/shared/heroTitle/HeroTitle'


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
        <NavLink className='account-btn' to={'/wallets/main'}>
            Compte courant
        </NavLink>
        <NavLink className='account-btn' to={'/wallets/deposit'}  >
            Compte de dépot
        </NavLink>
      
        </div>
        <Outlet/>
    

    </div>
  )
}

export default Wallets
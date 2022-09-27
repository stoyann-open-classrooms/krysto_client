import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../../../components/shared/spinner/Spinner'
import WalletGraph from '../../../../components/wallets/WalletGraph'

import WalletsTable from '../../../../components/wallets/walletsTable/WalletsTable'
import { getProfil, reset } from '../../../../features/user/userSlice'

function Main() {
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

  if (!profil.user) {
    return <Spinner />
  }

  return (
    <div className='wallet-page-content'>
      <hgroup className='title-wallet'>

      <h2>Compte courant - 44 Jours</h2>
      <h3>{   Math.round(profil.user.walletMain.amountUnity / profil.monyConvertValue ) } Krysto</h3>
      </hgroup>
      <div className="container-graph">
       <WalletGraph transactions={profil.user.walletMain.transactions}/>
      </div>
    
      <div className="wallet-actions">
  <button className="btn-cta">
  <div className="hover"></div>
          <span>Envoyer</span>
  </button>
  <button className="btn-cta">
  <div className="hover"></div>
          <span>Recevoir</span>
  </button>
      </div>
      <WalletsTable transactions={profil.user.walletMain} />
    </div>
  )
}

export default Main

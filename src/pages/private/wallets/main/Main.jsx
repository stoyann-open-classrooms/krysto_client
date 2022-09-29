import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../../../../components/shared/spinner/modal/Modal'
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




      <Modal btn={'Envoyer'} title={'Envoyer de la monnaie'}>
     
        <h3>Depuis vers votre compte courant</h3>
     
     <div className="modal-link">
        <p>Vers votre compte de dépots</p>
     
      <p>Transférez votre monnaie vers votre compte de dépots.</p>
     </div>
     <div className="modal-link">
      <p>Vers un contact</p>
      <p>Transférez votre monnaie vers le compte de l'un de vos contacts.</p>
     </div>
     <div className="modal-link inactiv">
      <p>Vers un nouveaux compte</p>
      <p>Transférez votre monnaie vers un nouveau compte tiers.</p>
      
      <div className="field">

        <input type="text" placeholder='Indiquez le n° du compte a créditer' />
      </div>
     </div>

      <button className="btn-submit">Annuler</button>
      </Modal>

      <Modal btn={'recevoir'} title={'Recevoir de la monnaie'}>
       <p>Pour recevoir de la monnaie : </p>
      
      </Modal>








  {/* <button className="btn-cta">
  <div className="hover"></div>
          <span>Envoyer</span>
  </button>
  <button className="btn-cta">
  <div className="hover"></div>
          <span>Recevoir</span>
  </button> */}
      </div>
      <WalletsTable transactions={profil.user.walletMain} />
    </div>
  )
}

export default Main

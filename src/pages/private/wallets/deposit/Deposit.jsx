import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../../../../components/shared/spinner/modal/Modal'

import Spinner from '../../../../components/shared/spinner/Spinner'
import WalletGraph from '../../../../components/wallets/WalletGraph'
// import CardRib from '../../../../components/shared/cardRib'
import WalletsTable from '../../../../components/wallets/walletsTable/WalletsTable'
import { getProfil, reset } from '../../../../features/user/userSlice'

function Deposit() {

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




if(!profil.user) {
  return <Spinner/>
}


  return (
    <div>
            <hgroup className='title-wallet'>


       <h2>Compte de depot</h2>
      <h2>{profil.user.walletsDeposit[0].amountMony} Krysto</h2>
      </hgroup>
      <div className="container-graph">
      <WalletGraph transactions={profil.user.walletsDeposit[0].transactions}/>
      </div>
      <div className="wallet-actions">




<Modal btn={'Envoyer'} title={'Envoyer'}>
  <h3>Le prix de cette annonce est de  Krysto</h3>
  <p>
    Vous pouvez proposer au vendeur un montant inférieur ou suppérieur au
    prix annoncé. Le vendeur pourra accepter ou refuser votre proposition,
    en fonction des autres offres qu'il recevra.
  </p>

</Modal>

<Modal btn={'recevoir'} title={'Recevboir'}>
  <h3>Le prix de e est de  Krysto</h3>
  <p>
    Vous pouvez proposer au vendeur un montant inférieur ou suppérieur au
    prix annoncé. Le vendeur pourra accepter ou refuser votre proposition,
    en fonction des autres offres qu'il recevra.
  </p>

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
     
      <div >
        <h4>Cours du Krysto au 11/09/2022</h4>
        <div>1 Krysto = {profil.monyConvertValue} ù</div>
      </div>
      <WalletsTable transactions={profil.user.walletsDeposit[0]}/>
    </div>
  )
}

export default Deposit

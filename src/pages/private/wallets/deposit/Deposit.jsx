import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Dialog from '../../../../components/shared/Dialog/Dialog'
import Modal from '../../../../components/shared/modal/Modal'
import Spinner from '../../../../components/shared/spinner/Spinner'
import WalletGraph from '../../../../components/wallets/WalletGraph'
// import CardRib from '../../../../components/shared/cardRib'
import WalletsTable from '../../../../components/wallets/walletsTable/WalletsTable'
import { getProfil, reset } from '../../../../features/user/userSlice'
import '../wallets.css'
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
    <section>
            <hgroup className='title-wallet'>


       <h2>Compte courant - 44 Jours</h2>
      <h2>{profil.user.walletsDeposit[0].amountMony} Krysto</h2>
      </hgroup>
      <div className="container-graph">
      <WalletGraph transactions={profil.user.walletsDeposit[0].transactions}/>
      </div>
       
      <div className="buttons">
      <Dialog btn={"Envoyer"}>
        <h1>this is the modal</h1>
      </Dialog>
      <Dialog btn={"Recevoir"}>
        <h1>this is the modal</h1>
      </Dialog>
      
      </div>
     
      <div >
        <h4>Cours du Krysto au 11/09/2022</h4>
        <div>1 Krysto = {profil.monyConvertValue} ù</div>
      </div>
      <WalletsTable transactions={profil.user.walletsDeposit[0]}/>
    </section>
  )
}

export default Deposit

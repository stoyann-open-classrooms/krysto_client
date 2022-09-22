import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
    <section className="container p-4">
      <div className="container-graph">
      <WalletGraph transactions={profil.user.walletsDeposit[0].transactions}/>
      </div>
      <div className="buttons">
        <Modal btn={'Envoyer'}
        isActive={false}
        titleModal={"Comment recevoir de l'argent d'un autre utilisateur ?"}
        
        >

        </Modal>
      
      </div>
      <div >
        <h4 className='title is-4'>Cours du Krysto au 11/09/2022</h4>
        <div className='tag is-large p-4'>1 Krysto = {profil.monyConvertValue} ù</div>
      </div>
      <WalletsTable transactions={profil.user.walletsDeposit[0]}/>
    </section>
  )
}

export default Deposit

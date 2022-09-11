import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardRib from '../../../components/shared/cardRib/CardRib'
import Modal from '../../../components/shared/modal/Modal'
import Spinner from '../../../components/shared/spinner/Spinner'
import WalletsTable from '../../../components/wallets/walletsTable/WalletsTable'
import { getProfil, reset } from '../../../features/user/userSlice'
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


  console.log(profil);

if(!profil.user) {
  return <Spinner/>
}


  return (
    <section className="container p-4">
      <div className="container-graph container p-4">
        <div className="box box-graph"></div>
      </div>
      <div className="buttons">
        <Modal btn={'Envoyer'}
        isActive={false}
        titleModal={"Comment recevoir de l'argent d'un autre utilisateur ?"}
        
        >

        </Modal>
        <Modal
          isActive={false}
          btn={'Recevoir'}
          titleModal={"Comment recevoir de l'argent d'un autre utilisateur ?"}
        >
          <section class="modal-card-body">
            <p>
              Donnez le numéro du compte sur lequel vous souhaitez recevoir de
              la monnaie, à la personne qui souhaite vous en envoyer :
            </p>
            <p>
              Ces numéros de compte sont vos Identifiant bancaires tout comme le
              RIB de votre compte en banque !
            </p>
            <div className="rib-box">
              <CardRib wallet={profil.user.walletsDeposit[0]}/>
              <CardRib wallet={profil.user.walletMain} monyConvertValue={profil.monyConvertValue}/>
             
            </div>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success">J'ai compris</button>
          </footer>
        </Modal>
      </div>
      <div className="notification m-6 box blue-box has-text-centered">
        <h4 className='title is-4'>Cours du Krysto au 11/09/2022</h4>
        <div className='tag is-large p-4'>1 Krysto = {profil.monyConvertValue} ù</div>
      </div>
      <WalletsTable transactions={profil.user.walletsDeposit[0]}/>
    </section>
  )
}

export default Deposit

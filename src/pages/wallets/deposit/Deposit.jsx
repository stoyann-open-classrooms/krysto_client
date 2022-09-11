import React from 'react'
import Modal from '../../../components/shared/modal/Modal'
import WalletsTable from '../../../components/wallets/walletsTable/WalletsTable'
import '../wallets.css'
function Deposit() {
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
            <div className="box rib-box">
              <div className="box">
                <h4 className="mb-3 title is-4">Compte courant</h4>
                <p className="tag is-large is-warning">
                  {' '}
                  <strong>DCNV72</strong>{' '}
                </p>
              </div>
              <div className="box">
                <h4 className="mb-3 title is-4">Compte de dépot</h4>
                <p className="tag is-large is-warning">
                  <strong>DJME51 </strong>
                </p>
              </div>
            </div>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success">J'ai compris</button>
          </footer>
        </Modal>
      </div>
      <div className="notification m-6">
        <h4>Cours du Krysto au 11/09/2022</h4>
        <div>1 Krysto = 0.0002827 ù</div>
      </div>
      <WalletsTable />
    </section>
  )
}

export default Deposit

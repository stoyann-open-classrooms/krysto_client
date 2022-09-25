import React from 'react'
import {NavLink , Outlet }from 'react-router-dom'
import TitlePage from '../../../components/layout/TitlePage'
import WalletIcone from '../../../assets/icones/wallet.png'
function Wallets() {
  return (
    <section>
     <TitlePage title={'Mes comptes'} icone={WalletIcone}/>
      <div className="buttons">
        <button className="submit-btn">Compte courant</button>
        <button className="submit-btn">Compte de depot</button>
      </div>
    </section>
  )
}

export default Wallets
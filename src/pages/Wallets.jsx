import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Wallets() {


    const userData = JSON.parse(window.localStorage.getItem('user'))
        const [user , setUser] = useState(userData)
        const [mainWallet, setMainWallet] = useState(user.walletMain)
        const [depositWallet, setDepositWallet] = useState(user.walletsDeposit[0])
console.log(mainWallet);
console.log(depositWallet);
 
  return (
    <main>
            <div className="hero p-4">
        <div className="hero-container">
         
        <div className="buttons mt-2 is-centered">
            <button className="button is-small is-warning">Compte courant</button>
            <button className="button is-small is-primary">Compte de dépot</button>
        </div>
        </div>

      </div>
   
   <div className="section">
    <div className="box">

     <p>  Vous aver effectuer {mainWallet.transactions.length} transaction avec ce compte</p>
     <h2>Compte courant</h2>
     <p>{mainWallet.amountMony}</p>
     <p>{mainWallet.uid}</p>
    </div>
    <div className="box">

     <p>  Vous aver effectuer {depositWallet.transactions.length} transaction avec ce compte</p>
     <h2>Compte de dépot</h2>
     <p>{depositWallet.amountMony}</p>
     <p>{depositWallet.uid}</p>
    </div>
   </div>

    </main>
  )
}

export default Wallets
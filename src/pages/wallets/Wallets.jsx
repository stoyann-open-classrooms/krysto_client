import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import HeroTitle from '../../components/shared/heroTitle/HeroTitle'


function Wallets() {



 
  return (
    <main>
         <HeroTitle title={"Gerer vos krysto"}/>
         
        <div className="buttons mt-2 is-centered">
            <button className="button is-small is-warning">Compte courant</button>
            <button className="button is-small is-primary">Compte de dépot</button>
        </div>
        {/* <div class="field has-addons">
  <p class="control">
    <span class="select">
      <select>
        <option>$</option>
        <option>£</option>
        <option>€</option>
      </select>
    </span>
  </p>
  <p class="control">
    <input class="input" type="text" placeholder="Amount of money"/>
  </p>
  <p class="control">
    <a class="button">
      Transfer
    </a>
  </p>
</div>

<div class="field has-addons">
  <p class="control">
    <span class="select">
      <select>
        <option>$</option>
        <option>£</option>
        <option>€</option>
      </select>
    </span>
  </p>
  <p class="control is-expanded">
    <input class="input" type="text" placeholder="Amount of money"/>
  </p>
  <p class="control">
    <a href='#' class="button">
      Transfer
    </a>
  </p>
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
   </div> */}

    </main>
  )
}

export default Wallets
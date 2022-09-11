import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, Outlet } from 'react-router-dom'
import HeroTitle from '../../components/shared/heroTitle/HeroTitle'


function Wallets() {



 
  return (
    <main>
         <HeroTitle title={"Gerer vos krysto"}/>
         
        <div className="buttons mt-2 is-centered">
        <Link className='button is-small is-warning' to={'/wallets/main'}>
            Compte courant
        </Link>
        <Link className='button is-small is-warning' to={'/wallets/deposit'}  >
            Compte de dépot
        </Link>
      
        </div>
        <Outlet/>
    

    </main>
  )
}

export default Wallets
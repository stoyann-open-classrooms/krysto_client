import React from 'react'

import "./CardRib.css"
function CardRib({wallet}) {





  return (
    <div className="card-rib">

        {wallet.name === "DEPOSIT" ?    <h4 className="mb-3 title is-4">Compte de dépot</h4> :   <h4 className="mb-3 title is-4">Compte courant</h4> }
  
    <p className="rib-uid">
      {' '}
      <strong>{wallet.uid}</strong>{' '}
    </p>
    {
      wallet.name === "DEPOSIT" ?  <p className='rib-balance'>{wallet.amountMony} Krysto</p> :  <p className='rib-balance'>{wallet.amountMony} Ùnités </p>
    }

    <div>
        <p>{wallet.amountMony * 1000} XPF</p>
    </div>
   
   
  </div>
  )
}

export default CardRib
import React from 'react'

function CardRib({wallet}) {
    console.log(wallet);
  return (
    <div className="box">
        {wallet.name === "DEPOSIT" ?    <h4 className="mb-3 title is-4">Compte de dépot</h4> :   <h4 className="mb-3 title is-4">Compte courant</h4> }
  
    <p className="tag is-large is-warning mb-3">
      {' '}
      <strong>{wallet.uid}</strong>{' '}
    </p>
    {
        wallet.name === "DEPOSIT" ?  <p className='tag is-medium'>{wallet.amountMony} Krysto</p> :  <p className='tag is-medium'>{wallet.amountMony} Ùnités </p>
    }

    <div>
        <p>{wallet.amountMony * 1000} XPF</p>
    </div>
   
  </div>
  )
}

export default CardRib
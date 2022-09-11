import React from 'react'

function WalletsTable({transactions}) {
  console.log(transactions.transactions);
  return (
    <section className='container p-4 mb-6'>
        <h3 className='title '>Vos transactions</h3>
        <table class="table  is-fullwidth is-hoverable">
  <thead>
    <tr>
      <th><abbr title="Position">Date</abbr></th>
      <th>Type</th>
      <th>Libellé</th>
      <th><abbr title="Played">Montant (ù)</abbr></th>
      <th><abbr title="Won">Montant (krysto)</abbr></th>
    </tr>
  </thead>

  <tbody>

    
        {transactions.transactions
          ? transactions.transactions.map((transaction) => (
            <tr>
              <th>{new Date(transaction.created).toLocaleDateString()}</th>
              {transaction.type === "create" ?   <td>Création monétaire</td> : <td>Transfert</td> }
            
              <td>Aucun libelée pour cette annonce</td>
              <td>{transaction.amountUnity} ù</td>
              <td>{(transaction.amountUnity/transaction.monyConvertValue).toFixed(2)} Kr</td>
            </tr>
            
          ))
          : ''}
    
 

 
   
  </tbody>
</table>
    </section>
  )
}

export default WalletsTable
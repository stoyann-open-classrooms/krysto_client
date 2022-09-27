import './walletTable.css'

function WalletsTable({ transactions }) {
  console.log(transactions.transactions)
  return (
    <div className='transaction-table-container'>
      <h3>Historique de vos transactions</h3>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>
            Date
            </th>
            <th>Type</th>
           
            <th>
            Montant  (ùnités)
       
            </th>
            <th>
            Montant  (krysto)
            </th>
          </tr>
        </thead>

        <tbody className=' scroller'>
          {transactions.transactions
            ? transactions.transactions.map((transaction) => (
                <tr>
                  <th>{new Date(transaction.created).toLocaleDateString()}</th>
                  {transaction.type === 'create' ? (
                    <td>Création monétaire</td>
                  ) : (
                    <td>Transfert</td>
                  )}

                 
                  <td>{transaction.amountUnity.toFixed(4)} ù</td>
                  <td>
                    {(
                      transaction.amountUnity / transaction.monyConvertValue
                    ).toFixed(2)}{' '}
                    Kr
                  </td>
                </tr>
              ))
            : ''}
        </tbody>
      </table>
    </div>
  )
}

export default WalletsTable

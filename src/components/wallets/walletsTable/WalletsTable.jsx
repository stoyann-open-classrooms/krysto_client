import React from 'react'

function WalletsTable() {
  return (
    <section className='container p-4 mb-6'>
        <h3 className='title '>Vos transactions</h3>
        <table class="table  is-fullwidth is-hoverable">
  <thead>
    <tr>
      <th><abbr title="Position">Date</abbr></th>
      <th>Libellé</th>
      <th><abbr title="Played">Montant (ù)</abbr></th>
      <th><abbr title="Won">Montant (krysto)</abbr></th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th>1</th>
      <td>
        Création monétaire
      </td>
      <td>+ 0.000830328</td>
      <td>+1</td>
      
    </tr>
    <tr>
      <th>2</th>
      <td>Envoyé à Stoyann - DJME51</td>
      <td>38</td>
      <td>20</td>
      
    </tr>
 
    <tr>
      <th>2</th>
      <td>Envoyé à Stoyann - DJME51</td>
      <td>38</td>
      <td>20</td>
      
    </tr>
 
   
  </tbody>
</table>
    </section>
  )
}

export default WalletsTable
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import WalletsTable from '../../../components/wallets/walletsTable/WalletsTable'
import '../wallets.css'
const data = {
  labels: ['red', 'blue', 'green', 'yellow', 'violet'],
  datasets: [
    {
      label: 'couleur preferee en france',
      data: ['23', '87', '33', '41', '50'],
    },
  ],
}

function Main() {
  return (
    <section>
      <div className="container-graph container p-4">
        <div className="box box-graph"></div>
      </div>
      <WalletsTable/>
    </section>
  )
}

export default Main

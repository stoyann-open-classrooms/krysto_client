import React from 'react'
import { useState } from 'react'
import Chart from 'react-apexcharts'
function WalletGraph({ transactions }) {
  console.log('transaction from graph', transactions)
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: 'basic-line',
       
        foreColor: 'white',
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100],
          },
        },
        toolbar: {
          show: false,
        },
      },
      stroke: {
        curve: 'smooth',
        width: '3',
      },

      tooltip: {
        enabled: false,
      },

      xaxis: {
        categories: transactions.map((transaction) =>
          new Date(transaction.created).toLocaleDateString(),
        ),
      },
    },
    series: [
      {
        name: 'krysto',
        data: transactions.map((transaction) =>
          transaction.amountMony.toFixed(4),
        ),
      },
    ],
  })

  console.log(chartData)

  return (
    <div className="mixed-chart">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={450}
      />
    </div>
  )
}

export default WalletGraph

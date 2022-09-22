import React from 'react'
import { useState } from 'react'
import Chart from 'react-apexcharts'
function WalletGraph({ transactions }) {
  console.log('transaction from graph', transactions)
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: 'basic-line',
        background: '#fffff',
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
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
            download: true,
            selection: true,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false | '<img src="/static/icons/reset.png" width="30">',
            customIcons: [],
          },
          export: {
            csv: {
              filename: `compte de dépot`,
              columnDelimiter: ',',
              headerCategory: 'Date',
              headerValue: 'value',
              dateFormatter(timestamp) {
                return new Date(timestamp).toDateString()
              },
            },
            svg: {
              filename: `Compte de dépot`,
            },
            png: {
              filename: `compte de dépot`,
            },
          },
          autoSelected: 'zoom',
        },
      },
      stroke: {
        curve: 'smooth',
        width: '10',
      },

      markers: {
        size: 10,

        colors: ['#F49E4C', '#292f4d', '#292f4d'],

        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: 'circle',
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
          size: undefined,
          sizeOffset: 3,
        },
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
        data: transactions.map((transaction) => transaction.amountMony.toFixed(4)) ,
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

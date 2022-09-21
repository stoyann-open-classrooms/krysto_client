import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../../../components/shared/spinner/Spinner'
import Chart from "react-apexcharts";
import WalletsTable from '../../../../components/wallets/walletsTable/WalletsTable'
import { getProfil, reset } from '../../../../features/user/userSlice'
import '../wallets.css'


function Main() {
const [chartData ,setChartData] = useState({
  options: {
    chart: {
      id: "basic-line"
    },
    xaxis: {
      
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ]
})

  const { profil, isLoading, isError, isSuccess } = useSelector(
    (state) => state.user,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess, isError])

  useEffect(() => {
    dispatch(getProfil())
  }, [])

console.log(profil);

if(!profil.user) {
  return <Spinner/>
}


  return (
    <section>
      <div className="container-graph container p-4">
      <div className="row">
          <div className="mixed-chart">
            <Chart
              options={chartData.options}
              series={chartData.series}
              type="line"
            
            />
          </div>
        </div>
      </div>
      <WalletsTable transactions={profil.user.walletMain}/>
    </section>
  )
}

export default Main

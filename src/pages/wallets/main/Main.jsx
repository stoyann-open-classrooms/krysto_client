import React, { Profiler, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../../../components/shared/spinner/Spinner'
import WalletsTable from '../../../components/wallets/walletsTable/WalletsTable'
import { getProfil, reset } from '../../../features/user/userSlice'
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
        <div className="box box-graph"></div>
      </div>
      <WalletsTable transactions={profil.user.walletMain}/>
    </section>
  )
}

export default Main

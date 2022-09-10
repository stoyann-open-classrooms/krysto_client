import React from 'react'
import CoinGif from '../../../assets/coins/coinGif.gif'
import './spinner.css'
function Spinner() {
  return (
    <div className='loadingSpinnerContainer'>
        <img src={CoinGif} alt="Chargement ..." />
    </div>
  )
}

export default Spinner
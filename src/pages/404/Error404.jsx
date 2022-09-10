import React from 'react'
import GifCoins from '../../assets/coins/coinGif.gif'
import './error404.css'


function Error404() {
  return (
    <main className="main-404 ">
      <h2 className="title  ">oups !</h2>
      <h1 className="title ">404</h1>
      <h3 className='subtitle '>Il semblerait que vous vous soyez perdus...</h3>

<div className='coins-404'>

<img src={GifCoins} alt="" className='image is-120x120' />
</div>

     
   <a href='/' className='button is-large btn-error'>
     Retour a l'accueil</a>
    </main>
  )
}

export default Error404

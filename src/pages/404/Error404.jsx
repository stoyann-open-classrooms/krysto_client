import React from 'react'
import GifCoins from '../../assets/coins/coinGif.gif'
import './error404.css'


function Error404() {
  return (
    <main className="main-404 pt-5">
      <h2 className="title is-1 ">oups !</h2>
      <h1 className="title is-1">404</h1>
      <h3 className='subtitle is-6'>Il semblerait que vous vous soyez perdus...</h3>


<img src={GifCoins} alt="" className='image is-120x120' />

     
   <a href='/' className='button is-small'>Retour a l'accueil</a>
    </main>
  )
}

export default Error404

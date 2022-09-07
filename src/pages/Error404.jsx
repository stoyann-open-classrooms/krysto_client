import React from 'react'

function Error404() {
  return (
    <main className="main-404 pt-5">
      <h2 className="title is-4 ">oups !</h2>
      <h1 className="title is-1">404</h1>
      <h3 className='subtitle is-6'>Il semblerait que vous vous soyez perdus...</h3>
   <a href='/' className='button is-small mt-6'>Retour a l'accueil</a>
    </main>
  )
}

export default Error404

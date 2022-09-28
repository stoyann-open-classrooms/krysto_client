import React from 'react'
import AddOfferForm from '../../components/addOffer/AddOfferForm'
import TitlePage from '../../components/layout/TitlePage'

function AddOffer() {
  return (
    <section>
      <TitlePage title={"Ajouter un troc"}/>
      <AddOfferForm/>
    </section>
  )
}

export default AddOffer
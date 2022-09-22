import React from 'react'
import { useEffect } from 'react'
import { FaUpload } from 'react-icons/fa'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories, reset } from '../../features/category/categorySlice'
import Coins from '../../assets/coins/coinGif.gif'
import './addOffer.css'
import { useState } from 'react'
import { createOffer } from '../../features/offer/offerSlice'

// Get user from localstorage
function AddOfferForm() {
  const [offer, setOffer] = useState({})

  const dispatch = useDispatch()
  const formData = new FormData()

  formData.append('title', offer.title)
  formData.append('offerType', offer.type)
  formData.append('category', offer.category)
  formData.append('text', offer.text)
  formData.append('amountMony', offer.amountMony)
  formData.append('status', offer.status)

  const { categories, isLoading, isError, isSuccess } = useSelector(
    (state) => state.category,
  )
  const { offers } = useSelector((state) => state.offer)

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess, isError])

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  const handleForm = (e) => {
    e.preventDefault()
    dispatch(createOffer(formData))
    console.log(offer)
  }

  const handleInput = ({ currentTarget }) => {
    const { name, value } = currentTarget
    setOffer({
      ...offer,
      [name]: value,
    })
  }

  return (
    <form onSubmit={handleForm} className="container p-6">
      <div className="field">
        <label className="label"> Sélectionnez le type d'annonce.</label>
            <select onChange={handleInput} name="type">
              <option value={'OFFER'}>je vend</option>
              <option value={'DEMANDE'}>je recherche</option>
            </select>
      </div>
      <div className="field">
        <label className="label">
          Sélectionnez la catégorie de votre annonce.
        </label>
        <div className="control">
          <div className="select is-large">
            <select onChange={handleInput} name="category">
              <option>Catégories</option>
              {categories.entities
                ? categories.entities.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))
                : ''}
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">Titre de votre annonce</label>
        <div className="control">
          <input
            name="title"
            onChange={handleInput}
            className="input is-large"
            type="text"
            placeholder="Titre de votre annonce"
          />
        </div>
      </div>
      <div class="field">
        <label class="label"> Redigez votre annonce </label>
        <div class="control">
          <textarea
            name="text"
            onChange={handleInput}
            class="textarea"
            placeholder="décrivez votre annonce"
          ></textarea>
        </div>
      </div>
      <div class="field">
        <label class="label"> Redigez votre annonce </label>
       
            <input
              name="amountMony"
              onChange={handleInput}
              className="input is-large"
              type="number"
              placeholder="Prix de l'annonce"
            />
              <img className="littleCoins" src={Coins} alt="" />
          </div>
         
      <div className="field">
        <label class="label">Ajouter des photos</label>
        <div class="file has-name mb-4">
          <label class="file-label">
            <input
              className="file-input"
              type="file"
              name="resume"
              multiple="multiple"
            />
            <span class="file-cta">
              <span class="file-icon">
                <FaUpload />
              </span>
              <span class="file-label">Choose a file…</span>
            </span>
            <span class="file-name"></span>
          </label>
        </div>
      </div>

      <div class="field">
        <label class="label">Ville ou code postal</label>
        <div class="control">
          <input
            class="input is-large"
            type="text"
            placeholder="ville / code postal"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Complément d'adresse</label>
        <div class="control">
          <input
            class="input is-large"
            type="text"
            placeholder="ville / code postal"
          />
        </div>
        {/* <div className="container p-2 mt-3">
          <div className="leaflet-container">
            <MapContainer
              className="container p-4"
              style={{ height: '250px' }}
              center={[-22.2758, 166.458]}
              zoom={13}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
              />
            </MapContainer>
          </div>
        </div> */}
      </div>
      <div class="field">
        <label class="label">Brouillon</label>
        <div class="control">
          <div class="select is-large">
            <select onChange={handleInput} name="status">
            <option>OPEfsdfsN</option>
            <option value={'OPEN'}>OPEN</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="buttons">
          <button class="btn-submit">Publier</button>
          <button class="btn-submit">Annuler</button>
        </div>

        
      </div>
    </form>
  )
}

export default AddOfferForm

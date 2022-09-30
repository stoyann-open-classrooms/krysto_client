import React from 'react'
import { useEffect } from 'react'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories, reset } from '../../features/category/categorySlice'
import { useState } from 'react'
import { createOffer } from '../../features/offer/offerSlice'

// Get user from localstorage
function AddOfferForm() {
  const dispatch = useDispatch()
  const formData = new FormData();
  const [gallery, setGallery] = useState({})
  const [uploadImage, setUploadImage] = useState('')
  const [offer, setOffer] = useState({
    title: '',
    gallery: gallery,
    text: '',
    amountMony: '',
    type: '',
    status: 'OPEN',

  })

  const handleInput = ({ currentTarget }) => {
    const { name, value } = currentTarget
    setOffer({
      ...offer,
      [name]: value,
    })
  }


  const handleFile = (e) => {
    console.log(e.target.files[0]);
    setGallery(e.target.files[0]);

  };





  formData.append('gallery', gallery)
  formData.append('title', offer.title)
  formData.append('type', offer.type)
  formData.append('category', offer.category)
  formData.append('text', offer.text)
  formData.append('amountMony', offer.amountMony)
  formData.append('status', offer.status)




  const handleForm = (e) => {
    e.preventDefault()
//  dispatch(createOffer(offer))
 console.log(offer);
  }

  const { categories, isLoading, isError, isSuccess } = useSelector(
    (state) => state.category,
  )
  useEffect(() => {
    dispatch(getCategories())
  }, [])
  const { offers } = useSelector((state) => state.offer)

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset())
      }
    }
  }, [dispatch, isSuccess, isError])


  



  return (
    <form onSubmit={handleForm} id='post-offer'
    method="POST"
      encType="multipart/form-data"
    >
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
          </div>
         
          <div className="input-group">
      <label for="product_image" class="custom-file-upload">
    Ajouter une image 
</label>
        <input 
        className="input-files"
          onChange={handleFile}
          type="file"
          id="product_image"
          name="image"
          accept="image/png, image/jpeg, image/png"
        />
      </div>
<div className="display-image">
<img src={uploadImage} alt="" />
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

        <div className="actions">
          <button type='submit'>Publier</button>
          <button >Annuler</button>
        </div>

        
    </form>
  )
}

export default AddOfferForm

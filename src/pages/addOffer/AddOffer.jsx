import { FaUpload } from "react-icons/fa"
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import './addOffer.css'
function AddOffer() {
  return (
    <main>
      
      <form className="container p-6">
        <div class="field">
          <label class="label"> Sélectionnez le type de votre annonce</label>
          <div class="control">
            <div className="buttons">
              <button className="button ">Je vend</button>
              <button className="button ">Je recherche</button>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">
            {' '}
            Sélectionnez la catégorie de votre annonce.
          </label>
          <div class="control">
            <div class="select is-small">
              <select>
                <option>Catégories</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Titre de votre annonce</label>
          <div class="control">
            <input
              class="input is-small"
              type="text"
              placeholder="Text input"
            />
          </div>
        </div>
        <div class="field">
          <label class="label"> Redigez votre annonce </label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="e.g. Hello world"
            ></textarea>
          </div>
        </div>
        <div class="field">
          <label class="label"> Redigez votre annonce </label>
          <div class="field has-addons">
            <p class="control">
              <input
                class="input"
                type="number"
                placeholder="Prix de l'annonce"
              />
            </p>
            <div class="control">
              <p class="button is-disabled">Krysto</p>
            </div>
          </div>
        </div>
          <label class="label">Ajouter des photos</label>
        <div class="file has-name mb-4">
          <label class="file-label">
            <input class="file-input" type="file" name="resume" />
            <span class="file-cta">
              <span class="file-icon">
                <FaUpload/>
              </span>
              <span class="file-label">Choose a file…</span>
            </span>
            <span class="file-name">
              Screen Shot 2017-07-29 at 15.54.25.png
            </span>
          </label>
        </div>

        <div class="field">
          <label class="label">Ville ou code postal</label>
          <div class="control">
            <input
              class="input is-small"
              type="text"
              placeholder="ville / code postal"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Complément d'adresse</label>
          <div class="control">
            <input
              class="input is-small"
              type="text"
              placeholder="ville / code postal"
            />
          </div>
          <div className="container p-2 mt-3">
          <div className="leaflet-container">
            <MapContainer
              className="container p-4"
              style={{ height: '250px' }}
              center={[-22.275800, 166.458000 ]}
              zoom={13}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
              />

   
            </MapContainer>
          </div>
        </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button submit-btn">
              Publier maintenant
            </button>
          </div>

          <div class="control">
            <button class="button danger-btn ">Annuler</button>
          </div>
        </div>
      </form>
    </main>
  )
}

export default AddOffer

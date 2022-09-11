import React from 'react'
import { Link } from 'react-router-dom'
import HeroTitle from '../../components/shared/heroTitle/HeroTitle'

function Converter() {
  return (
    <main>
        <HeroTitle
        title={'Convertisseur de devises Krysto'}
      
   
        />

        <div className="form container p-6">
        <div class="field has-addons">
  <p class="control">
    <span class="select">
      <select>
      <option>ùnité</option>
        <option>Krysto</option>
        <option>XPF</option>

      </select>
    </span>
  </p>
  <p class="control is-expanded">
    <input class="input" type="text" placeholder="Amount of money"/>
  </p>
 
</div>
        <div class="field has-addons">
  <p class="control">
    <span class="select">
      <select>
      <option>ùnité</option>
        <option>Krysto</option>
        <option>XPF</option>

      </select>
    </span>
  </p>
  <p class="control is-expanded">
    <input class="input" type="text" placeholder="Amount of money"/>
  </p>
 
</div>


        </div>
    </main>
  )
}

export default Converter
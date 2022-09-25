import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
function ChangeEmail() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    if (!password) {
      toast.error('Vous devez entrez votre mot de passe')
    }

    if (!email) {
      toast.error('Vous devez entrez votre email')
    } else {
      console.log(formData)
    }
  }

  return (
    <div className="page-content">
      <button className="btn-back">Retour</button>
      <form onSubmit={onSubmit}>
        <div className="field">
          <input
            onChange={onChange}
            type="email"
            placeholder="Nouvelle adresse e-mail"
            value={email}
            name="email"
          />
        </div>
        <div className="field">
          <input
            onChange={onChange}
            type="password"
            placeholder="Mot de passe actuel"
            value={password}
            name="password"
          />
        </div>
        <button className="submit-btn">Enregistrer</button>
      </form>
    </div>
  )
}

export default ChangeEmail

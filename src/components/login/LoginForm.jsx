import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../features/auth/authSlice'
import { FaCheck, FaEnvelope, FaLock } from 'react-icons/fa'
import './LoginForm.css'

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  )
  console.log(user)
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()

    if (!password) {
      toast.error('Vous devez entrez votre mot de passe')
    }

    if (!email) {
      toast.error('Vous devez entrez votre email')
    } else {
      const userData = {
        email,
        password,
      }
      dispatch(login(userData))
      navigate('/private/dashboard')
    }
  }

  return (
    <form onSubmit={onSubmit}>
    
      <div className="field">
        <label htmlFor="email">e-mail</label>
        <input
          type="email"
       
          id="email"
          value={email}
          name="email"
          onChange={onChange}
        />
       
      </div>
      <div class="field">
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          value={password}
          onChange={onChange}
        />

      </div>
      <div class="field">
        <div class="control">
          <button className="submit-btn">Connexion</button>
        </div>
      </div>
      <div className="field">

      <Link to={'/forgot-password'} className="is-link">
        Mot de passe oublié
      </Link>
      <Link to={'/register-subscription'} className="is-link">
        Pas encore inscrit ?
      </Link>


      </div>
    </form>
  )
}

export default LoginForm

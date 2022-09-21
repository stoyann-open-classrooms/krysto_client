import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../features/auth/authSlice'
import { FaCheck, FaEnvelope, FaLock } from 'react-icons/fa'
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
          if(isSuccess){
            
            window.reload()
            toast.success('Vous êtes connecter !')
            navigate('/private/private-home')
    
          }
    
          // window.location.reload()
        }
      }
    
      return (
        
          <form onSubmit={onSubmit} >
            <div className="field">
            
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  value={email}
                  name="email"
                  onChange={onChange}
                />
                <span className="icon  is-left">
                  <FaEnvelope/>
                </span>
              
              
            </div>
            <div class="field">
             
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={onChange}
                />
    
                <span class="icon is-small is-left">
                  <FaLock/>
                 
                </span>
              
            </div>
            <div class="field">
              <div class="control">
                <button class="button is-success is-medium ">Connexion</button>
              </div>
            </div>
            <Link to={'/forgot-password'} className="is-link">
                Mot de passe oublié
              </Link>
           
              <Link to={'/register-subscription'} className="is-link ml-6">
                Pas encore inscrit ?
              </Link>
          </form>
        
        
      )
}

export default LoginForm
/* eslint-disable no-restricted-globals */
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { register } from '../../features/auth/authSlice'
import { FaCheck, FaEnvelope, FaLock, FaUser } from 'react-icons/fa'
import TitlePage from '../../components/layout/TitlePage'
function RegisterForm() {
  const [formData, setFormData] = useState({
    name:'',
    email: '',
    password: '',
    planKey:'premium'
  })
  const { name, email, password , planKey} = formData

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
    
  console.log(formData);    
     dispatch(register(formData))
     
      navigate('/register-success')
      
    

      // window.location.reload()
    }
  }

  return (
    <section className='page-content'>
      <TitlePage title={"S'insrire"}/>
      <form onSubmit={onSubmit}>
       
        <div class="field">
          <label htmlFor="name">Entrer votre nom d'utilisateur</label>
            <input
              className="input is-large"
              type="text"
              placeholder="Votre nom d'utilisateur"
              id="name"
              value={name}
              name="name"
              onChange={onChange}
            />
           
          
          
        </div>
        <div className="field">
        
          <label htmlFor="email">Entrer votre e-mail</label>
            <input
              className="input is-large"
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              name="email"
              onChange={onChange}
            />
          
          
        </div>
        <div class="field">
       <label htmlFor="password">Entrer un mot de passe</label>
            <input
              className="input is-large "
              type="password"
              placeholder="mot de passe"
              name="password"
              id="password"
              value={password}
              onChange={onChange}
            />

     
        </div>
        <div class="field">
          <label htmlFor="password2">Confirmer votre mot de passe</label>
        
            <input
              className="input is-large "
              type="password"
              placeholder="confirmer votre mot de passe"
              name="password2"
              id="password2"
              value={password}
              onChange={onChange}
            />

      
        </div>
        <div class="field">
          <p class="control">
            <button class="submit-btn ">Envoyer</button>
          </p>
        </div>

      </form>
      <p>En créant votre compte, vous aceptez les <Link to={'/cgu'}>C.G.U</Link> et <Link to={'/cgv'}>C.G.V</Link> </p>
    </section>
  )
}

export default RegisterForm

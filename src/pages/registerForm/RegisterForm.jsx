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
          <p class="control has-icons-left has-icons-right">
            <input
              className="input is-large"
              type="text"
              placeholder="Votre nom d'utilisateur"
              id="name"
              value={name}
              name="name"
              onChange={onChange}
            />
           
          
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input is-large"
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              name="email"
              onChange={onChange}
            />
          
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input
              className="input is-large "
              type="password"
              placeholder="mot de passe"
              name="password"
              id="password"
              value={password}
              onChange={onChange}
            />

          
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input
              className="input is-large "
              type="password"
              placeholder="confirmer votre mot de passe"
              name="password"
              id="password"
              value={password}
              onChange={onChange}
            />

          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="submit-btn ">Connexion</button>
          </p>
        </div>

      </form>
      <p>En créant votre compte, vous aceptez les <Link to={'/cgu'}>C.G.U</Link> et <Link to={'/cgu'}>C.G.U</Link> </p>
    </section>
  )
}

export default RegisterForm

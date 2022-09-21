/* eslint-disable no-restricted-globals */
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { register } from '../../features/auth/authSlice'
import { FaCheck, FaEnvelope, FaLock, FaUser } from 'react-icons/fa'
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
    <div className='page-content'>
      <form onSubmit={onSubmit}>
        <h1>S'inscrire</h1>
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
            <span class="icon is-small is-left">
              <FaUser />
            </span>
            <span class="icon is-small is-right">
              <FaCheck />
            </span>
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
            <span className="icon  is-left">
              <FaEnvelope />
            </span>
            <span className="icon is-right">
              <FaCheck />
            </span>
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

            <span class="icon is-small is-left">
              <FaLock />
            </span>
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

            <span class="icon is-small is-left">
              <FaLock />
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-success is-medium ">Connexion</button>
          </p>
        </div>

      </form>
      <p>En créant votre compte, vous aceptez les <Link to={'/cgu'}>C.G.U</Link> et <Link to={'/cgu'}>C.G.U</Link> </p>
    </div>
  )
}

export default RegisterForm

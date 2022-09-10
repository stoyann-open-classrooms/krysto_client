import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../features/auth/authSlice'
import { FaCheck, FaEnvelope, FaLock } from 'react-icons/fa'
function Login() {
 
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
      toast.success('Vous êtes connecter !')

      navigate('/')
      // window.location.reload()
    }
  }

  return (
    <main>
      <form onSubmit={onSubmit} className="container p-3">
        <h1 className="title is-4">Bienvenue !</h1>
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input
              class="input is-small"
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              name="email"
              onChange={onChange}
            />
            <span class="icon is-small is-left">
              <FaEnvelope/>
            </span>
            <span class="icon is-small is-right">
              <FaCheck/>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input
              className="input is-small"
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
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-success is-small">Connexion</button>
          </p>
        </div>
        <Link to={'/forgot-password'} className="is-link">
            Mot de passe oublié
          </Link>
       
          <Link to={'/register-subscription'} className="is-link ml-6">
            Pas encore inscrit ?
          </Link>
      </form>
    
    </main>
  )
}

export default Login

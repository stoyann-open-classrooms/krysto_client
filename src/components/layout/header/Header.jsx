import { Link, NavLink, useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../../features/auth/authSlice'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import Coins from '../../../assets/coins/coinGif.gif'
import './Header.css'


function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const token = JSON.parse(localStorage.getItem('userToken'))
  console.log(token)
  const { user } = useSelector((state) => state.auth)
  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
    window.location.reload()
  }
  console.log(user)

  return <>
<header className='main-header'>
  <div >
    <Link className="logo" to={'/'}>
      <img src={Coins} alt="piéce krysto qui tourne" />
      <p>

      Krysto
      </p>
    </Link>
  </div>
  <nav className='desktop-main-menu'>
    <ul>
      <li>
        <Link to={'/'}>Accueil</Link>
      </li>
      <li>
        <Link to={'/search'}>Rechercher</Link>
      </li>
      <li>
        <Link to={'/money'}>La monnaie</Link>
      </li>
      <li>
        <Link to={'/login'}>Connexion</Link>
      </li>
      <li>
        <Link to={'/register'}>S'inscrire</Link>
      </li>
    </ul>
  </nav>
</header>

</>
}

export default Header

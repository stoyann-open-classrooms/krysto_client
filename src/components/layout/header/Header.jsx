import { Link, useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../../features/auth/authSlice'
import {
  FaHome,
  FaMoneyBill,
  FaRegUserCircle,
  FaSearch,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from 'react-icons/fa'
import Coins from '../../../assets/coins/coinGif.gif'
import './Header.css'
import { useState } from 'react'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const token = JSON.parse(localStorage.getItem('userToken'))
  console.log(token)

  const [toggle, setToggle] = useState(false)
  const toggleNav = () => {
    setToggle(!toggle)
  }

  // const { user } = useSelector((state) => state.auth)
  // const onLogout = () => {
  //   dispatch(logout())
  //   dispatch(reset())
  //   navigate('/')
  //   window.location.reload()
  // }
  // console.log(user)

  return (
    <>
      <div
        onClick={toggleNav}
        className={toggle ? 'overlay-show' : 'overlay'}
      ></div>
      <div className={toggle ? 'mobile-main-menu show-menu' : 'mobile-main-menu'}>
        <ul>
        <li className="mobile-only">
            <Link to={'/'}>Accueil</Link>
          </li>
      
          {/* // mobile only */}

        
          <li className="mobile-only">
            <Link to={'/search'}>Rechercher</Link>
          </li>
        

          {token ? 
          <>
                    <li className="mobile-only">
            <Link to={'/login'}>Dashboard</Link>
          </li>
                    <li >
            <Link to={'/login'}>Mes propositions</Link>
          </li>
                    <li className="mobile-only">
            <Link to={'/login'}>Mes trocs</Link>
          </li>
                    <li className="mobile-only">
            <Link to={'/login'}>Deconnexion</Link>
          </li>
         
          </>
          : 
          <>

                    <li className="mobile-only">
            <Link to={'/login'}>Connexion</Link>
          </li>
         
          <li className="mobile-only">
            <Link to={'/register'}>S'inscrire</Link>
          </li>
          </>
          
          }





{token ? 
          <>
            
                    <li >
            <Link to={'/login'}>Mes comptes</Link>
          </li>
       
            
         
          </>
          : 
          <>
      <li >
            <Link to={'/money'}>La monnaie</Link>
          </li>
              <li>
            <Link to={'/'}>A propos</Link>
          </li>
          <li>
            <Link to={'/'}>Team</Link>
          </li>
          <li>
            <Link to={'/'}>Contact</Link>
          </li>
          </>
          
          }





          
      

        </ul>
      </div>
      <header className="main-header">
        <div>
          <Link className="logo" to={'/'}>
            <img src={Coins} alt="piéce krysto qui tourne" />
            <p>Krysto</p>
          </Link>
        </div>
        <nav className="desktop-main-menu">
          <ul>
            <li>
              <FaHome />
              <Link to={'/'}>Accueil</Link>
            </li>
            <li>
              <FaSearch />
              <Link to={'/search'}>Rechercher</Link>
            </li>
            <li>
              <FaMoneyBill />
              <Link to={'/money'}>La monnaie</Link>
            </li>
            <li>
              <FaUser/>
              <Link to={'/money'}>Profil</Link>
            </li>

            {token ? 
            <>
              <li>
              <FaSignOutAlt />
              <Link to={'/login'}>deconnexion</Link>
            </li>
        
            </>
            : 

            <>
            <FaSignInAlt />
            <Link to={'/login'}>Connexion</Link>
            <li>
          </li>
          <li>
            <FaRegUserCircle />
            <Link to={'/register'}>S'inscrire</Link>
          </li>
          </>
            
            }
          </ul>
        </nav>
      </header>

      <div
        onClick={toggleNav}
        className={toggle ? 'hamburger open' : 'hamburger'}
        type="button"
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </div>
    </>
  )
}

export default Header

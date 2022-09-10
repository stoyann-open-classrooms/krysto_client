import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Header.css'

import { logout, reset } from '../../../features/auth/authSlice'
import {
  FaBoxOpen,
  FaCalculator,
  FaCoins,
  FaHouseUser,
  FaMoneyBill,
  FaPhone,
  FaPlusCircle,
  FaQuestionCircle,
  FaSearch,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from 'react-icons/fa'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
    window.location.reload()
  }
  const [toggleMenu, setToggleMenu] = useState(false)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <>
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link to={'/'} className="navbar-item">
              <div className="logo">
                <p className='title is-4 logo'>KRYSTO</p>

              </div>
            </Link>


            {!toggleMenu ? (
              <Link
                role="button"
                onClick={toggleNav}
                className="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                to={'#'}
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </Link>
            ) : (
              <Link
                to={'#'}
                role="button"
                onClick={toggleNav}
                className="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </Link>

            )}
          </div>


          <div
           
            className={toggleMenu ? 'navbar-menu is-active' : 'navbar-menu'}
          >
            <div className="navbar-start">
              <NavLink className="navbar-item nav-item" to={'/'}>
                <FaHouseUser className='mr-2'/> Accueil
              </NavLink>
              <NavLink className="navbar-item nav-item" to={'/search'}>
                <FaSearch className="mr-2" /> Rechercher
              </NavLink>
              <NavLink className="navbar-item nav-item" to={'/add-offer'}>
                <FaPlusCircle className="mr-2" /> Publier
              </NavLink>
                {user ? (
                <div className="navbar-item has-dropdown is-hoverable">
                  <NavLink to={'#'} className="navbar-item nav-title">
                    <FaUser className="mr-2" />
                    Profil
                  </NavLink>

                  <div className="navbar-dropdown">
                    <NavLink className="navbar-item nav-item" to={'/dashboard'}>
                      <FaHouseUser className="mr-2" /> Dashboard
                    </NavLink>
                    <NavLink className="navbar-item nav-item" to={'/my-offers'}>
                      <FaBoxOpen className="mr-2" /> Mes annonces
                    </NavLink>
                    <NavLink className="navbar-item nav-item" to={'/proposals'}>
                      Propostions
                    </NavLink>
                    <NavLink className="navbar-item nav-item" to={'/wallets'}>
                      <FaMoneyBill className="mr-2" /> Mes comptes
                    </NavLink>

                    <hr className="navbar-divider" />
                    <NavLink className="navbar-item nav-item" to={'/profil-parameters'}>
                      Paramètre du compte
                    </NavLink>
                  </div>
                </div>
              ) : (
                ''
              )}

              <div className="navbar-item has-dropdown is-hoverable">
                <NavLink className="navbar-item nav-title" to={'/about'}>
                  <FaQuestionCircle className="mr-2" /> A propos
                </NavLink>

                <div className="navbar-dropdown">
                  <NavLink className="navbar-item nav-item" to={'/money'}>
                    <FaCoins className="mr-2" /> La monnaie
                  </NavLink>
                  <NavLink className="navbar-item nav-item" to={'/math-model'}>
                    <FaCalculator className="mr-2" /> Le modéle mathématique
                  </NavLink>

                  <NavLink className="navbar-item nav-item" to={'/krysto-project'}>
                    <FaQuestionCircle className="mr-2" /> Le projet Krysto
                  </NavLink>
                 
                  <NavLink className="navbar-item nav-item" to={'/faq'}>
                    <FaQuestionCircle className="mr-2" /> FAQ
                  </NavLink>
                 
                  <NavLink className="navbar-item nav-item" to={'/contact'}>
                    <FaPhone className="mr-2" /> Nous contacter
                  </NavLink>
                </div>
              </div>
            
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                {user ? (
                  <>
                    <button
                      className="button is-small logout-btn"
                      onClick={onLogout}
                    >
                      <FaSignOutAlt className="mr-2" /> Deconexion
                    </button>
                    {/* <figure class="image is-128x128">
                      <img
                        class="is-rounded"
                        crossorigin="anonymous"
                        src={'http://localhost:5045/uploads/' + user.photo}
                        alt="test"
                      />
                    </figure> */}
                  </>
                ) : (
                  <div className="buttons">
                    <NavLink
                      to={'/register-subscription'}
                      className="button is-primary is-small"
                    >
                      Inscription
                    </NavLink>
                    <NavLink to={'/login'} className="button is-light is-small">
                      <FaSignInAlt className="mr-2" /> Connexion
                    </NavLink>
                  </div>
                )}
              </div>
            </div>

          </div>

        </nav>
      </header>
    </>
  )
}

export default Header

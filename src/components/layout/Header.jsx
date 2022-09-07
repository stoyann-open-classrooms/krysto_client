import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Logo from '../../assets/logo_krysto.png'
import { logout, reset } from '../../features/auth/authSlice'
import {
  FaBoxOpen,
  FaCalculator,
  FaClosedCaptioning,
  FaCoins,
  FaCross,
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
  const  [toggleMenu, setToggleMenu] = useState(false)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <>
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link to={'/'} className="navbar-item">
              <img
                src={Logo}
                className="image is-228x228"
                alt="Logo de krysto / retour a l'acceuil"
              />
            </Link>

            
            {!toggleMenu ?  <Link
              role="button"
              onClick={toggleNav}
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            to={'#'}>
             <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </Link>: <Link
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
          
          </Link>}
            
          </div>

          <div id="navbarBasicExample" className={toggleMenu ? 'navbar-menu is-active' : 'navbar-menu'}>
            <div className="navbar-start">
              <NavLink className="navbar-item" to={'/'}>
                Accueil
              </NavLink>
              <NavLink className="navbar-item" to={'/search'}>
                <FaSearch className="mr-2" /> Rechercher
              </NavLink>
              <NavLink className="navbar-item" to={'/add-offer'}>
                <FaPlusCircle className="mr-2" /> Publier
              </NavLink>

              <div className="navbar-item has-dropdown is-hoverable">
                <NavLink className="navbar-item" to={'/about'}>
                  <FaQuestionCircle className="mr-2" /> A propos
                </NavLink>

                <div className="navbar-dropdown">
                  <NavLink className="navbar-item" to={'/money'}>
                    <FaCoins className="mr-2" /> La monnaie
                  </NavLink>
                  <NavLink className="navbar-item" to={'/math-model'}>
                    <FaCalculator className="mr-2" /> Le modéle mathématique
                  </NavLink>

                  <hr className="navbar-divider" />
                  <NavLink className="navbar-item" to={'/faq'}>
                    <FaQuestionCircle className="mr-2" /> FAQ
                  </NavLink>
                  <NavLink className="navbar-item" to={'/about'}>
                    A propos
                  </NavLink>
                  <NavLink className="navbar-item" to={'/contact'}>
                    <FaPhone className="mr-2" /> Nous contacter
                  </NavLink>
                </div>
              </div>
              {user ? (
                <div className="navbar-item has-dropdown is-hoverable">
                  <div className="navbar-item">
                    <FaUser className="mr-2" />
                    Profil
                  </div>

                  <div className="navbar-dropdown">
                    <NavLink className="navbar-item" to={'/dashboard'}>
                      <FaHouseUser className="mr-2" /> Dashboard
                    </NavLink>
                    <NavLink className="navbar-item" to={'/my-offers'}>
                      <FaBoxOpen className="mr-2" /> Mes annonces
                    </NavLink>
                    <NavLink className="navbar-item" to={'/proposals'}>
                      Propostions
                    </NavLink>
                    <NavLink className="navbar-item" to={'/wallets'}>
                      <FaMoneyBill className="mr-2" /> Mes comptes
                    </NavLink>

                    <hr className="navbar-divider" />
                    <NavLink className="navbar-item" to={'/profil-parameters'}>
                      Paramètre du compte
                    </NavLink>
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                {user ? (
                  <>
                    <button
                      className="button is-small is-danger"
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
                    <NavLink
                      to={'/login'}
                      className="button is-light is-small"
                    >
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

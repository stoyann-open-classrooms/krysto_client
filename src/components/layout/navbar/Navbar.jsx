import { useState } from 'react'
import {
  FaAdversal,
  FaCalculator,
  FaCoins,
  FaComment,
  FaEnvelope,
  FaEraser,
  FaHamburger,
  FaHandshake,
  FaHandshakeSlash,
  FaHome,
  FaHouseUser,
  FaLightbulb,
  FaPhone,
  FaPlane,
  FaPlus,
  FaPlusCircle,
  FaQuestion,
  FaQuestionCircle,
  FaRProject,
  FaSearch,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
  FaWallet,
} from 'react-icons/fa'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import userPic from '../../../assets/images/bouchon_hand.jpeg'
import { useSelector, useDispatch } from 'react-redux'
import './navbar.css'
import { logout } from '../../../features/auth/authSlice'
import { reset } from '../../../features/user/userSlice'
import Coins from '../../../assets/coins/coinGif.gif'
function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [toggle, setToggle] = useState(false)
  const toggleNav = () => {
    setToggle(!toggle)
  }

  const token = JSON.parse(localStorage.getItem('userToken'))
  console.log(token)
  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
    window.location.reload()
  }
  return (
    <>
      <div
        onClick={toggleNav}
        className={toggle ? 'overlay active' : 'overlay'}
      ></div>
      <div className={toggle ? 'sidebar active' : 'sidebar'}>
        <Link to={"/"} className="logo_content">
          <div className="logo">
            <img src={Coins} alt="" />
            <Link to={'/'} className="logo_name">Krysto</Link>
          </div>
        </Link>
        <span>
  
    <div className="burger" onClick={toggleNav}>
            <div className={toggle ? "contLigne btn1 active" :  "contLigne btn1"}>
                <div class="lignes"></div>
                <div class="lignes"></div>
                <div class="lignes"></div>
            </div>
        </div>
        </span>

        <ul className="nav_list">
          <li>
            <NavLink to={'/'}>
              <FaHome className="nav-icone" />
              <span className="links_name">Accueil</span>
            </NavLink>
            <span className="tooltip">Acceuil</span>
          </li>
          <li>
            <NavLink to={'/search'}>
              <FaSearch className="nav-icone" />
              <span className="links_name">Rechercher</span>
            </NavLink>

            <span className="tooltip">Rechercher</span>
          </li>
          {token !== null ? (
            <>
              <li>
                <NavLink to={'/add-offer'}>
                  <FaPlus className="nav-icone" />
                  <span className="links_name">Publier</span>
                </NavLink>
                <span className="tooltip">Publier</span>
              </li>
              <li>
                <NavLink to={'/dashboard'}>
                  <FaUser className="nav-icone" />
                  <span className="links_name">Dashboard</span>
                </NavLink>
                <span className="tooltip">Dashboard</span>
              </li>
              <li>
                <NavLink to={'/my-offers'}>
                  <FaHandshake className="nav-icone" />
                  <span className="links_name">Mes trocs</span>
                </NavLink>
                <span className="tooltip">Mes trocs</span>
              </li>
              <li>
                <NavLink to={'/wallets'}>
                  <FaWallet className="nav-icone" />
                  <span className="links_name">Comptes</span>
                </NavLink>
                <span className="tooltip">Comptes</span>
              </li>
              <li>
                <NavLink to={'/proposals'}>
                  <FaComment className="nav-icone" />
                  <span className="links_name">Propositions</span>
                </NavLink>
                <span className="tooltip">Propositions</span>
              </li>
              <li>
            <NavLink to={'/converter'}>
              <FaCalculator className="nav-icone" />
              <span className="links_name">Convertisseur</span>
            </NavLink>
            <span className="tooltip">Convertisseur</span>
          </li>
            </>
          ) : (
            ''
          )}

          <li>
            <NavLink to={'/money'}>
              <FaCoins className="nav-icone" />
              <span className="links_name">La monnaie</span>
            </NavLink>
            <span className="tooltip">La monnaie</span>
          </li>
       
          <li>
            <NavLink to={'/krysto-project'}>
              <FaLightbulb className="nav-icone" />
              <span className="links_name"> Le projet </span>
            </NavLink>
            <span className="tooltip"> Le projet</span>
          </li>
          <li>
            <NavLink to={'/faq'}>
              <FaQuestion className="nav-icone" />
              <span className="links_name"> F.A.Q</span>
            </NavLink>
            <span className="tooltip">F.A.Q</span>
          </li>

          <li>
            <NavLink to={'/about'}>
              <FaAdversal className="nav-icone" />
              <span className="links_name">A propos</span>
            </NavLink>
            <span className="tooltip">A propos</span>
          </li>
          <li>
            <NavLink to={'/contact'}>
              <FaPhone className="nav-icone" />
              <span className="links_name">Nous contacter</span>
            </NavLink>
            <span className="tooltip">Nous contacter</span>
          </li>
        </ul>
        <div className="profile_content">
          <div className="profile">
            {token !== null ? (
              <>
                <div className="profile_details">
                  <img src={userPic} alt="" />
                  <div className="profil_info">
                    <div className="name">Stoyann</div>
                    <div className="balance">563 Kr</div>
                  </div>
                </div>
        
              </>
            ) : (
              <>
                <div className="profile_details">
                  {/* <button><FaSignInAlt/></button>
            <button><FaSignOutAlt/></button> */}

                  <div className="profil_info">
                    <Link to={'/login'}>
                      <button className="log_btn">
                        <span>

                        <FaSignInAlt />
                        </span>
                        Connexion
                      </button>
                    </Link>
                    <Link to={'/register-subscription'}>
                      <button className="log_btn">
                        <span>

                        <FaSignOutAlt />
                        </span>
                        S'inscrire
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            )}

            {token !== null ? (
              <>
                <button id="log_out" onClick={onLogout}>
                  <FaSignOutAlt />
                </button>
              </>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

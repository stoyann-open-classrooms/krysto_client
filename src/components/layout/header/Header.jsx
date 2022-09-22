import { Link, NavLink, useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import './Header.css'

import { logout, reset } from '../../../features/auth/authSlice'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'


function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const token =JSON.parse( localStorage.getItem('userToken'))
  console.log(token);
  const { user } = useSelector((state) => state.auth)
  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
    window.location.reload()
  }
  console.log(user);


  return (
    <>
      <header>


      <nav className='header-nav'>

        {token ? 
          <>
          <button className= "log_btn_nav" onClick={onLogout}>
            <FaSignOutAlt />
          </button>
        </>
        : 
        <>
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
                        {' '}
                        <span>
                          
                        <FaSignOutAlt />
                        </span>
                        S'inscrire
                      </button>
                    </Link>
        </>
        
        }
      


        </nav>


      </header>
    </>
  )
}

export default Header

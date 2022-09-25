import { useState } from 'react'
import {
  FaAdversal,
  FaCalculator,
  FaCoins,
  FaComment,
  FaHandshake,
  FaHome,
  FaLightbulb,
  FaPhone,
  FaPlus,
  FaQuestion,
  FaSearch,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
  FaWallet,
} from 'react-icons/fa'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import userPic from '../../../assets/images/bouchon_hand.jpeg'
import {  useDispatch } from 'react-redux'
import './navbar.css'
import { logout } from '../../../features/auth/authSlice'
import { reset } from '../../../features/user/userSlice'

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
   
    </>
  )
}

export default Navbar

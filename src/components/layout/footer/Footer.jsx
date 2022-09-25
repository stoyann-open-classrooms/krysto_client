

import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './footer.css'
function Footer() {
  return (
    <>
      <footer className="footer">
      
<ul>
  
  <li>
    <FaYoutube/>
    <Link to={'#'}>You Tube</Link>
  </li>
  <li>
    <FaFacebook/>
    <Link to={'#'}>Facebook</Link>
  </li>
  <li>
    <FaInstagram/>
    <Link to={'#'}>Instagram</Link>
  </li>
  <li>
    <FaDiscord/>
    <Link to={'#'}>Discord</Link>
  </li>
  <li>
    <FaLinkedin/>
    <Link to={'#'}>Linkedyn</Link>
  </li>

  </ul>  
        <p > KRYSTO.NC © Tous droits réservés - 2022</p>

      </footer>
    </>
  )
}

export default Footer

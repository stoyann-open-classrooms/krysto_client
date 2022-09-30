

import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './footer.css'
function Footer() {
  return (
    <>
      <footer className="footer">



<ul className='social-link-list'>
  
  <li>
    <FaYoutube/>
    <a href='https://www.youtube.com/channel/UCoudw4zohXdN9Bs3I32uHkQ'>You tube</a>
  </li>
  <li>
    <FaFacebook/>
    <a href='https://www.facebook.com/Krysto.noumea'>Facebook</a>
  </li>
  <li>
    <FaDiscord/>
    <Link to={'#'}>Discord</Link>
  </li>
  <li>
    <FaLinkedin/>
    <a href='https://www.linkedin.com/company/krysto-nc/'>Linkedyn</a>
  </li>

  </ul>  
        <p > KRYSTO.NC © Tous droits réservés - 2022</p>

      </footer>
    </>
  )
}

export default Footer

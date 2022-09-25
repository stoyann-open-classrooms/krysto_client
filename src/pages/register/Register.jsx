import { FaCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './register.css'
function Register() {
  return (
    <div>
      <h1>Choisissez votre formule...</h1>
      <h2 className="notification is-small is-success p-2">
        Inscription gratuite pour les 1000 premiers utilisateurs !
      </h2>
      <section className="container-subscription">
        <div className="subcription-card">
          <hgroup className="subcription-card-top">
            <h3>
              {' '}
              <span>400XPF</span>/mois
            </h3>
            <h4>Abonement mensuel</h4>
            <p>Engagement d'1 mois renouvlable Résiliable a tout moment.</p>
          </hgroup>
          <button className="submit-btn">Voir les détails de l'offre</button>
          <div className='unlimited'>
            <span>

            <FaCheckCircle /> 
            </span>
            Accès illimité à tous les services Krysto.
          </div>

          <ul className="subsription-list">
            <li>
            
                <FaCheckCircle />
           
              <p>Gérez vos comptes</p>
            </li>
            <li>
             
                <FaCheckCircle />
             
              Recevoir des Krysto
            </li>
            <li>
              <FaCheckCircle />
              Publier des annonces
            </li>
          
            <li>
              <FaCheckCircle />
              Payer en Krysto
            </li>
            <li>
              <FaCheckCircle />
              Echanger des Krysto
            </li>
          </ul>

          <div className="submit-btn">Choisir</div>
        </div>
        <div className="subcription-card">
          <div className="subcription-card-top">
            <h3>Gratuit a vie !</h3>
            <h5>Abonement PREMIUM</h5>
          </div>
          <div>998 comptes gratuits sont encore disponible</div>

          <div> </div>
          <div>
            {' '}
            En vous inscrivant dès aujourd'hui, vous bénéficiez d'un compte
            <strong>gratuit à vie !</strong>
          </div>
          <div>
            A partir du 1000ème membre, l'inscription deviendra payante pour les
            nouveaux membres.
          </div>
          <div>
            Avec votre compte premium, vous bénéficierez d'une gratuité totale
            et illimitée sur tous les services Krysto.
          </div>
          <div>Détails de l'offre</div>
          <div>
            <FaCheckCircle /> Accès illimité à tous les services Krysto.
            <p>(Dés la première annonce publiée)</p>
          </div>

          <Link to={'/register-form'} className="button is-success">
            Créer mon compte gratuit
          </Link>
        </div>
        <div className="subcription-card">
          <div className="subcription-card-top">
            <h3>4000 XPF / mois</h3>
            <h5>Abonement Annuel</h5>
            <p> 2 mois offert !</p>
          </div>
          <div>Détails de l'offre</div>
          <div>
            {' '}
            <FaCheckCircle /> Accès illimité à tous les services Krysto.
          </div>

          <ul>
            <li>
              <FaCheckCircle /> Gérez vos comptes
            </li>
            <li>
              <FaCheckCircle className="mr-2" /> Recevoir des Krysto
            </li>
            <li>
              <FaCheckCircle className="mr-2" />
              Publier des annonces
            </li>
            <li>
              <FaCheckCircle className="mr-2" />
              Répondre aux annonces
            </li>
            <li>
              <FaCheckCircle className="mr-2" />
              Payer en Krysto
            </li>
            <li>
              <FaCheckCircle className="mr-2" />
              Echanger des Krysto
            </li>
          </ul>

          <div className="button is-success">Choisir cette formule</div>
        </div>
      </section>
    </div>
  )
}

export default Register

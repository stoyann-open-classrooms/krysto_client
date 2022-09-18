import { FaCheckCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <main className="p-4">
      <h1>Choisissez votre formule...</h1>
      <h2 className='notification is-small is-success p-2'>Inscription gratuite pour les 1000 premiers utilisateurs !</h2>
      <div className="container-subscription">
        <div className="box subcription-card">
          <div className="subcription-card-top">
            <h3>  <span>400 XPF</span>/mois</h3>
            <h5>Abonement mensuel</h5>
          </div>
          <p>Engagement d'1 mois renouvlable Résiliable a tout moment.</p>
          <div className="button is-primary is-small">Détails de l'offre</div>
          <div>
            {' '}
            <FaCheckCircle /> Accès illimité à tous les services Krysto.
          </div>

          <ul className="subsription-card-list">
            <li>
              <FaCheckCircle className="mr-2" /> Gérez vos comptes
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
        <div className="box subcription-card">
          <div className="subcription-card-top">
            <h3>Gratuit a vie !</h3>
            <h5>Abonement PREMIUM</h5>
          </div>
          <div className=" tag p-3 is-primary nb-free">
            998 comptes gratuits sont encore disponible
          </div>

          <div className="mb-2"> </div>
          <div className="mb-2">
            {' '}
            En vous inscrivant dès aujourd'hui, vous bénéficiez d'un compte
            <strong>gratuit à vie !</strong>
          </div>
          <div className="mb-2">
            A partir du 1000ème membre, l'inscription deviendra payante pour les
            nouveaux membres.
          </div>
          <div className="mb-2">
            Avec votre compte premium, vous bénéficierez d'une gratuité totale
            et illimitée sur tous les services Krysto.
          </div>
          <div className="button is-primary is-small mb-5">
            Détails de l'offre
          </div>
          <div className="mb-2">
            <FaCheckCircle /> Accès illimité à tous les services Krysto.
            <p>(Dés la première annonce publiée)</p>
          </div>

          <Link to={'/register-form'} className="button is-success">Créer mon compte gratuit</Link>
        </div>
        <div className="box subcription-card">
          <div className="subcription-card-top">
            <h3>4000 XPF / mois</h3>
            <h5>Abonement Annuel</h5>
            <p> 2 mois offert !</p>
          </div>
          <div className="button is-primary is-small mb-5">
            Détails de l'offre
          </div>
          <div className="mb-2">
            {' '}
            <FaCheckCircle /> Accès illimité à tous les services Krysto.
          </div>

          <ul className="subsription-card-list">
            <li>
              <FaCheckCircle className="mr-2" /> Gérez vos comptes
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
      </div>
    </main>
  )
}

export default Register

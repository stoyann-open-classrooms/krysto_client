
import LoginForm from '../../components/login/LoginForm'
import './login.css'
function Login() {
 

  return (
    <section >
      <div className="title-page">

<h1>Connexion</h1>
      </div>
    <LoginForm/>

    <div className="register-link-container">
      <button className="submit-btn">Inscription</button>
    </div>

    <h2>Connecter vous pour commencer a troquer avec les autres utilisateurs !</h2>
    </section>
  )
}

export default Login

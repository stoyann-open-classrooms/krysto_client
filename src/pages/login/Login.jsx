
import TitlePage from '../../components/layout/TitlePage'
import LoginForm from '../../components/login/LoginForm'
import './login.css'
function Login() {
 

  return (
    <section >
      <div>
<TitlePage title={"Connexion"}/>

      </div>
    <h2>Connecter vous pour commencer a troquer avec les autres utilisateurs !</h2>
    <LoginForm/>


    </section>
  )
}

export default Login

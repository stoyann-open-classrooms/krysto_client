import { FaPen } from "react-icons/fa"
import HeroTitle from "../../components/shared/heroTitle/HeroTitle"


function Contact() {
  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="page-content">
   <HeroTitle
        title={'Nous contacter.'}
 
      />




<form onSubmit={onSubmit}>
      <hgroup>
        <h1 className="login_form_title">Bonjour !</h1>
        <h2>Connectez-vous pour découvrir toutes nos fonctionnalités !</h2>
      </hgroup>
      <div className="field">
        <input
          type="text"
          placeholder="titre"
          // id="email"
          // name="email"
          // value={email}
          // onChange={onChange}
        />
        <span>
          <FaPen />
        </span>
      </div>
      <div class="field">
      <textarea
      placeholder="votre message"
      ></textarea>
      </div>
      <div class="field">
        <div class="control">
          <button type="submit" className="submit-btn">Envoyer</button>
        </div>
      </div>
   

    </form>

    </div>
  )
}

export default Contact
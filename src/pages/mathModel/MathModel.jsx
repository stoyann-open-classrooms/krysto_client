import { Link } from "react-router-dom"
import HeroTitle from "../../components/shared/heroTitle/HeroTitle"

function MathModel() {
  return (
    <main>
       <div className="hero p-4">
       <HeroTitle title={"Le modèle mathématique."}/>
     
    
 </div>
 <div className="page-content container p-4">

       <h3>Une monnaie autonome,relative,stable et sans risque.</h3>
   <h3 className="title is-5 ">Origines</h3>
   <p className="mb-2">Krysto est inspirée du modèle de <a href="https://monnaie-libre.fr/">La monnaie libre</a>, aussi appelée June, ou G1, et de  <a href="http://trm.creationmonetaire.info/">la théorie relative de la monnaie</a>.</p>
   
   <p className="mb-2">Cependant, elle n'en reproduit pas intégralement l'ensemble des principes et des règles.</p>
   
   Pour en savoir plus sur les ressemblances, et différences entre les deux monnaies, merci de consulter la section
   <a href="/g1-vs-krysto" className=" button  is-small  is-rounded m-3">G1 VS Krysto</a>
 </div>

 <Link to={'/presentation'} className="button">
  Demarrer la présentation
 </Link>
    </main>
  )
}

export default MathModel
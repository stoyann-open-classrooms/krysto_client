import { FaBitbucket, FaCoins, FaConfluence, FaMoneyCheckAlt, FaQuestionCircle } from "react-icons/fa"
import HeroTitle from "../../components/shared/heroTitle/HeroTitle"
import './money.css'
function Money() {
  return (
    <main className="pb-6">
     <HeroTitle title={"Une monnaie complémentaire local et solidaire pour vous faire gagner du pouvoir d'achat."}/>
      <div className="container p-4 money-content-page">

      <h4 className="title is-6 p-2 ">  <FaQuestionCircle/> Une monnaie libre c'est quoi ?</h4>

      <p className="p-2">
        Une monnaie complémentaire est une monnaie parallèle, locale et
        fonctionnant en complémentarité vis-à-vis d'une autre monnaie. Elle ne
        met pas à bas le système financier actuel. Mais elle permet de créer une
        transition dans notre façon d'appréhender nos achats, de re-localiser
        notre consommation, de re-matérialiser nos échanges et d'éviter la
        spéculation.
      </p>
      <p className="p-2">
        Une monnaie est un outil d'échange de mesure et de réserve de valeur.
        Tout peut être une monnaie, c'est l'usage qui fait d'un objet une
        monnaie. Les céréales (dont le blé), le sel (d'où vient le mot salaire)
        ont longtemps servi de monnaie. Puis sont apparues les monnaies
        fiduciaires (basées uniquement sur la confiance). En utilisant la
        monnaie dette vous faites confiance aux banquiers
      </p>
      <p className="p-2">
        Il faut se poser la question de la provenance de la monnaie. D'où vient
        elle? Comment est-elle créée ? Par qui ?
      </p>
      <h4 className="title is-6 mt-3 p-2"> <FaCoins/> Une monnaie différente...</h4>
      <p className="p-2">
        La monnaie libre est créée uniquement dans le portefeuille des êtres
        humains vivants. La création de monnaie libre est répartie équitablement
        entre tout les membres de la communauté, dans l'espace et dans le temps.
        C'est à dire que quelque-soit le lieu mais aussi quelque-soit l'époque,
        chaque membre créé la même portion de monnaie, durant toute sa vie. La
        même portion ne veux pas dire même quantité, quand la quantité de
        monnaie en circulation grandit, la portion créée par chacun grandit
        aussi.
      </p>
      <h4 className="title is-6 mt-3 p-2"> <FaConfluence/> Une monnaie relative</h4>
      <p className="p-2">
        Il faut rester conscient que ce n'est pas la quantité de monnaie que
        l'on possède qui compte, mais la part relative de monnaie par rapport à
        la masse monétaire globale. En monnaie libre on ne compte plus en
        quantitatif mais en relatif. On utilise une unité relative de monnaie le
        DU quotidien.
      </p>
      <h4 className="title is-6 mt-3 p-2" > <FaBitbucket/> La monnaie n'est pas le fruit du travail.</h4>
      <p  className="p-2">
        La monnaie que vous avez n'est pas le fruit de votre travail. La
        monnaie, c'est ce que vous acceptez en échange du fruit de votre
        travail.
      </p>
      <h4 className="title is-6 mt-3 p-2"> <FaMoneyCheckAlt/> Mais alors qui produit la monnaie ?</h4>
      <p className="p-2">
        Dans le système monétaire régi par les banques, ce sont les banques
        commerciales qui créent cette monnaie que vous utilisez tous les jours.
        Le gouvernement vous le dit lui-même{' '}
        <a href=" https://www.economie.gouv.fr/facileco/creation-monetaire-definition">
          Création monetaire definition (gouv.fr)
        </a>
        </p>
        <p  className="p-2">
          C'est la banque qui décide qui a le droit à la monnaie, selon ses
          critères (généralement un max de profit). Bien sûr, cette création ne
          se fait pas gratuitement, il y a des intérêts à payer. Globalement il
          faut rembourser plus qu'il n'y a de monnaie en circulation.
        </p>
        <p className="p-2">
          Conséquence : Course au profit, compétition, faillite pour les plus
          fragiles. Cette course au profit entraîne entre autres l'épuisement
          des ressources et de la biodiversité.
        </p>
      
      <h4 className="title is-6 mt-3 p-2"> <FaCoins/> Et la monnaie libre ?</h4>
      <p  className="p-2">
        Dans le système de la monnaie libre, la monnaie est créée à parts égales
        pour tous les membres, sans dette et sans intérêts à rembourser.
      </p>
      <p  className="p-2">
        Chaque membre créant sa propre portion de monnaie, c'est en quelque
        sorte un revenu de base, ce n'est pas un revenu de subsistance.
      </p>
      <p  className="p-2">
        La création permanente de monnaie, allège la peur de l'avenir, et
        favorise un comportement de collaboration et d'entraide.
      </p>
      </div>
    </main>
  )
}

export default Money

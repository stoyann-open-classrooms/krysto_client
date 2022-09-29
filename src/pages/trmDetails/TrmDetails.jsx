import React from 'react'
import TitlePage from '../../components/layout/TitlePage'
import trmGeneration from '../../assets/trm/trm-generation.png'
import convergence from '../../assets/trm/convergence-des-soldes.png'
import './trmDetails.css'
function TrmDetails() {
  return (
    <section>
      <TitlePage title={'la théorie relative de la monnaie en détails.'} />
      <p>
        Le Krysto est une application de la Théorie relative de la monnaie
        écrite par Stéphane Laborde en 2010.
      </p>
      <h2>4 Libertés</h2>
      <p>Cette théorie pose 4 axiomes qui sont les 4 libertés économiques</p>
      <ul>
        <li>La liberté de choix de son systéme monétaire</li>
        <li>La liberté d'utiliser les ressources.</li>
        <li>
          La liberté d'estimation et de production de toute valeur économique
        </li>
        <li>
          La liberté d'échanger, comptabiliser, afficher ses prix dans la
          monnaie.
        </li>
      </ul>
      <p>
        La liberté s'entend bien sûr au sens de non-nuisance à soi et à autrui.
        s'il y'a nuisance, il y'a privation de liberté.
      </p>

      <div className="chapter">
        <div className="chapter-img">
          <img src={trmGeneration} alt="" />
        </div>

        <p>
          Les vivants qui arrivent en fin de vie (ev≈80ans), ont pu échanger
          avec des humains du passé (en rouge), mais n'échangeront jamais avec
          les humains du futur.
        </p>
        <p>
          Les humains en début de vie n'ont jamais échangé avec les humains du
          passé, mais échangeront un jour avec les humains du futur (en jaune).
          Seul les humains vivants (en vert) peuvent faire des échanges entre
          eux, il n'y a pas de raison que leurs échanges influent sur les
          générations futures, ni qu'ils soient impactés par les échanges des
          générations passées.
        </p>
      </div>

      <div className="chapter">
        <h2>Égalité spatio-temporelle</h2>
        <p>
          Pour respecter les 4 libertés, il faut que chaque humain crée la même
          part de monnaie (la même portion).On appelle cela le DU
        </p>
      </div>
      <div className="chapter">
        <h2>La formule</h2>
        <p>
          La part que chaque être humain crée (le DU) est une portion, un
          coefficient (c) de la moyenne de la masse monétaire par membre (M/N).
          Ce coefficient c doit être proche de 10% par an pour ne pas
          privilégier les plus jeunes ni les plus âgés..
        </p>

        <h3>DU = C(M/N)</h3>
      </div>
      <div className="chapter">
        <h2>Convergences des comptes</h2>
        <p>
          Chaque créateur créant la même quantité de monnaie, leurs comptes se
          rapprochent relativement. Comme une différence d'âge devient de moins
          en moins visible en vieillissant.
        </p>
        <div className="chapter-img">

        <img src={convergence} alt="" />
        </div>
      </div>
      <h2>Plus d'informations sur la TRM - liens utiles</h2>
      <p>Pour en savoir plus vous pouvez lire la Théorie Relative de la Monnaie. Ce livre écrit par Stéphane Laborde est disponible en ligne : http://trm.creationmonetaire.info/</p>
    Vous pou
    <div>
        <h2>Le krysto et la G1</h2>
        Basée sur la même théorie, le Krysto comporte beaucoup de difference avec la G1 pour connaitre les differences entre ces deux monnaie merci de consulter la section <span>Krysto vs G1</span>
    </div>
    
    
    </section>
  )
}

export default TrmDetails

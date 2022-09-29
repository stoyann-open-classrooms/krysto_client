import React from 'react'
import { Link } from 'react-router-dom'
import TitlePage from '../../components/layout/TitlePage'

function KrystoDetails() {
  return (
    <section>
      <TitlePage title={'Le Krysto en détails'} />
      <p>
        Pour comprendre comment fonctionne le Krysto il est important de
        comprendre quelques subtilités sur les monnaies que nous utilisont
        actuellement.
      </p>
      <h2>1. Les fonctions économiques de la monnaie</h2>
      <p>
        Les monnaies on trois fonctions essentieles. Pour définir la monnaie, le
        plus simple est de distinguer ses différentes fonctions.
      </p>
      <ul>
        <li>
          La monnaie est avant toute chose une unité de compte qui permet de
          mesurer la valeur des biens et services échangés avec un étalon
          commun. Cette unité est propre à une zone géographique, mais il est
          toujours possible d'échanger les monnaies entre elles.
        </li>
        <li>
          {' '}
          C'est ensuite un instrument d'échange, universellement reconnu. Ce
          moyen de paiement unique évite les inconvénients du troc
        </li>
        <li>
          {' '}
          La monnaie est enfin une réserve de valeur : il est possible de la
          conserver sans risque de dévalorisation à court terme. Cela permet de
          différer ses achats dans le temps ou de se constituer une épargne.
        </li>
      </ul>
      <p>
        Ces trois fonctions de la monnaie font qu'elle est un intermédiaire
        essentiel des échanges marchands : elles s'appliquent à toutes les
        formes de monnaies possibles, de la plus liquide (les pièces et billets)
        à la plus longue à mobiliser (les certificats de dépôt ou les OPCVM –
        Organismes de Placement Collectif en Valeurs Mobilières).
      </p>
      <h2>2. comment est créer la monnaie?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
        aliquam, unde excepturi iure quo voluptates neque, voluptatem veritatis
        eum laborum deleniti, architecto modi. Suscipit corporis veritatis atque
        magnam voluptatem! Nisi, at sed. Recusandae debitis aspernatur harum
        illum odit, molestiae modi sit placeat alias odio sapiente, quis quae
        corporis rerum quos itaque? Recusandae maiores quos ut reprehenderit sit
        eos ab asperiores quaerat minus quia quod inventore, adipisci laboriosam
        accusamus id. Nisi laudantium eos harum numquam excepturi repellat
        aliquam vitae totam provident iure fuga sint expedita esse temporibus
        pariatur ducimus officiis accusantium, voluptas, dolorum dignissimos ab
        id dicta nam veritatis. Reprehenderit, esse.
      </p>
      <h2>3.Le problème de toute monnaie est l'inflation.</h2>
      <p>
        Les monnaies "traditionnelles" (€, $, etc) sont créées par la dette, et
        doivent (en théorie) être "remboursée" par le travail
      </p>
      <p>
        Avec ce système de dette, il est possible de créer une grande quantité
        de monnaie en une seule fois. Mais le risque est de créer de
        l'inflation, si trop de monnaie est émise en même temps. Pour éviter
        cela, ce sont les banques (et les banquiers) qui ont le pouvoir de
        décider pour qui ils créent de la monnaie, en fonction des capacités de
        remboursement de leurs clients...
      </p>
      <h2>Le Krysto est basée sur un modéle mathématique bien different...</h2>
      <p>
        Avec Krysto, la monnaie n'est pas créée par la dette. Elle est créée
        quotidiennement, en petite quantité, et de façon équitable, pour tous
        ses utilisateurs. L'inflation est donc évitée de façon naturelle et
        mathématique.
      </p>
      <p>
        La répartition de la masse monétaire est sans cesse rééquilibrée par une
        création monétaire équitable, qui donne à chacun un même pouvoir
        d'achat, constant et limité. Il n'y a donc personne qui décide de créer
        plus de monnaie pour l'un ou pour l'autre. L'ensemble du système est
        automatique. Et donc parfaitement stable...
      </p>
      <h2>Une unité de mesure</h2>

      <p>
        Nous utilisons la monnaie comme unité de mesure. Mais comment appliquer
        cette unité de mesure si elle ne représente pas la même valeur dans
        l'espace et dans le temps.
      </p>
      <p>
        Le mètre a été défini comme la distance de l'équateur au pôle divisé par
        10 000 000. Le degré Celsius comme la différence de température entre le
        gel et l'évaporation de l'eau divisé par 100. La seconde du SI est
        définie par la durée d'un certain nombre d'oscillations (9 192 631 770
        exactement) liées à un phénomène physique concernant l'atome de césium.
        Ces unités de mesure sont invariantes et universelles pour tous les
        êtres humains dans le temps et l'espace.
      </p>


      <p>

      Pourtant, nous n'avons pas de repères pour définir la valeur d'une unité
      monétaire. Cette valeur varie dans le temps et l'espace. Une monnaie peut
      être dévaluée par simple création d'unités supplémentaires. Avec la
      monnaie libre, nous fabriquons une nouvelle unité de mesure : la quantité
      de monnaie produite chaque jour par chaque individu. Quand la monnaie
      libre sera pleinement en place, cette quantité représentera toujours la
      même portion de monnaie par rapport à la masse monétaire globale. Ce qui
      en fait un invariant à travers le temps et l'espace
      </p>
      <h2>

      Le DU en Krysto devient une unité de mesure de valeur universelle pour tous ces utilisateurs
      </h2>
   
   <p>Bravo vous avez maintenant toutes les cartes en mains pour comprendre en détails la  théorie relative de la monnaie (TRM) plus en détails !</p>
   
      <button  className='btn-cta'>
<Link to={"/trm-details"}>

    <div className="hover"></div>
        <span>La TRM en détails</span>
</Link>
    </button>
    </section>
  )
}

export default KrystoDetails

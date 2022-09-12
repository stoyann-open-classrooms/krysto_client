import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import './presentation.css'
import krystoCalcul from "../../assets/krystoc.jpg"
import firstKrysto from "../../assets/firstKrysto.jpg"
import recalc from "../../assets/recalc.jpg"

// ============ Doc  
// https://github.com/erichbehrens/react-animated-slider


const slides = [
  {
    title: 'Présentation du modèle mathémathique',
    par1:
      "Cette présentation s'attarde principalement sur le modèle mathématique de Krysto, et s'adresse donc plutôt à un public à l'aise avec les mathématiques.",
    par2: 'Cependant, les calculs sont plus simples qu’ils n’y paraissent',
    par3:
      'Ne vous laissez pas impressionner, il ne s’agit que d’additions, de multiplications et de divisions. Rien de bien plus compliqué…',
  },
  // ======================== Introduction
  {
    title: 'Introduction',
    par1:
      ' La monnaie Krysto peut-être considéré comme une crypto-monnaie  Ses données sont stockées sur une blockchain (base de donnée cryptée).',
    par2:
      'Ont peut aussi parler plus simplement d’une monnaie virtuelle. Cependant, Krysto n’est pas une monnaie comme les autres parce qu’elle est basée sur une philosophie et un modèle mathématique très differents des monnaies traditionelle et cryptomonnaie que l’on connait actuellement …  ',
  },
  {
    title: 'Le problème principal de toute monnaie est l’inflation.',
    par1:
      'Les monnaies “traditionnelles” sont créées par la dette et doivent (en théorie) être “remboursée” par le travail.',
    par2:
      "Mais le risque est de créer de l'inflation, si trop de monnaie est émise en même temps. Pour éviter cela, ce sont les banques (et les banquiers) qui ont le pouvoir de décider pour qui ils créent de la monnaie, en fonction des capacités de remboursement de leurs clients...",
    par3:
      "Avec Krysto, la monnaie n'est pas créée par la dette. Elle est créée  quotidiennement, en petite quantité, et de façon équitable, pour tous ses utilisateurs.",
  },
  {
    title: "L'inflation est évitée de façon naturelle et mathématique.",
    par1:
      "La répartition de la masse monétaire est sans cesse rééquilibrée par une création monétaire équitable, qui donne à chacun un même pouvoir d'achat, constant et limité.",
    par2:
      "Il n'y a donc personne qui décide de créer plus de monnaie pour l'un ou pour l'autre.",
    par3: '',
  },
  {
    title:
      "L'ensemble du système est automatique. Et donc parfaitement stable...",
    par1:
      "Imaginez qu'au lieu de recevoir 100 000 XPF en une seule fois en contractant un emprunt dans une banque, vous recevez simplement  1000 XPF tous les jours, que vous pouvez utiliser tout de suite, ou accumuler pour plus tard. ",
    par2: "En 3 ans, vous aurez reçu environ l'équivalent de 109 500 0 XPF",
  },
  {
    title:
      "L'avantage, c'est que vous n'avez pas besoin de convaincre un banquier pour qu'il vous accorde un emprunt... Et surtout : vous n'aurez rien à rembourser !",
    par1:
      "La monnaie vous sera distribuée automatiquement, tous les jours. Vous avez juste à vous inscrire sur la plateforme KRYSTO Et ensuite, vous n'aurez plus qu'à dépenser votre monnaie pour acheter ce qui vous plaira parmis les annonces publiées sur le site... ",
  },
  {
    title:
      "Le Krysto peut être considérée comme une monnaie virtuelle complémentaire, qui augmente votre pouvoir d'achat réel tous les jours..",
    par1:
      "L'objectif de Krysto est de devenir une vraie monnaie d'usage, que l'on peut utiliser directement pour faire des  achats réels et utiles, sur le marché de l'occasion. Cependant le but n’est pas de créer une nouvelle monnaie qui viendrait remplacer notre monnaie traditionnelle mais plutôt  de s’ajouter en complement de celle-ci. ",
  },
  {
    title:
      "Krysto n'est pas une monnaie spéculative. C'est une monnaie d'usage.",
    par1: 'Il est impossible de revendre vos krysto contre des XPF ',
    par2:
      "Le seul moyen d'utiliser vos Krysto, c'est d'acheter quelque chose de réel, parmis les petite-annonces publiées sur la plateforme. ",
  },

  // ======================== Définitions
  {
    title: 'Définitions',
    par1: 'La valeur d’ 1 Kysto',
    par2:
    'Le Krysto est une valeur relative le systéme ne créer pas directement des Krysto. Il crée des unités (ù)',
    par3: "La valeur d’un Krysto est toujours équivalente à une certaine quantité d’unités. Cette quantité est recalculée tous les jours. ",
    par4: "Exemple : 1 krysto = 0.032854209 ù",
  },
  {
    title: 'Définitions - Création monétaire',
    par1: 'Donc si 1 Krysto = 0.25469874 ù',
    par2:
    'chaque utilisateur reçoit  0.25469874 ù sur son compte courant',
    par3: "Chaque jour, 1 krysto est créé par le système, pour chaque utilisateur de la monnaie.",
    
  },
  {
    title: 'Définitions - Masse monétaire',
    par1: "La masse monétaire de Krysto c'est le nombre total d'unité (ù) créées depuis le lancement du système monétaire.",
    par2:
    'Ont peut aussi exprimer la masse monétaire en Krysto, selon le taux de conversion du moment.',
    
  },
  {
    title: 'Définitions - Constante universelles',
    par1: "La formule mathématique permettant de faire fonctionner l'ensemble du système monétaire utilise les constantes universelles suivantes :",
    pbox1: "362.25 : Le nombre de jours en moyenne dans une année.",
    pbox2: "12 : Le nombre de mois dans l'année.",
    pbox3: "30.4375 : 362.5/12   = le nombre de jours dans chaque mois de l’année"
  },
  { title: 'Formule mathématique - Calculer la valeur d’un Krysto.',
  par1: "1 Krysto est égal à la masse monétaire divisée par le nombre d’utilisateurs total, divisé par 30.4375 (le nombre moyen de jour dans chaque mois de l’année.",
  pbox1: "1 Krysto = (masse Monétaire) / (nbUtilisateurs) / 30.4375 ",
  imgCalc: {krystoCalcul}
  
},
  { title: 'Calculer la valeur du premier Krysto.',
  par1: "Pour le premier Krysto, la masse monétaire est initialisée à une unité (1 ù), et le nombre d'utilisateur est de 1",
  pbox1: "1 Krysto = 1(ù) / 1 /30.4375",
  imgFirst: {firstKrysto},
  par2:"1 Krysto est égal à 1 divisée par 1, divisé par 30.4375, soit 0.0328542 unités (ù) Ces 0.0328542 unités sont versées sur le compte courant de l'administrateur..."
  
  
},
  { title: "Calculer la valeur du premier Krysto",
  par1: "Puis on recalcule en considérant que la masse monétaire est égale à la valeur du premier Krysto :", 
  imgrecalc: {recalc},
  par2:"Les 0.03285 unités versées sur le compte courant de l'administrateur prennent alors automatiquement la valeur de 30.4375 Krysto !",
  par3: "0,03285 ÷ 0,001079 = 30.4375",
  par4: "On obtient alors la valeur du premier òto réellement en circulation :1 Krysto =   0.001079399 ù",
  par5:"Ensuite, chaque jour, la valeur de l'òto sera recalculée, toujours selon la même formule, en intégrant les nouveaux inscrits, et en prenant en compte le nouveau volume de la masse monétaire."
  
},
{ title: 'Gerer sa monnaie' },
  { title: 'Autonomie monétaire' },
]
function Presentation() {
  return (
    <main>
       <Link to={'/math-model'}>
            <div className="button mt-4 ml-6">stoper la présentation</div>
              </Link>
      <Slider>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="container p-3 presentation-content">
              <h1 className="title is-1">{slide.title}</h1>
             
              
              <div className="presentation-text-container p-2">
                <p>{slide.par1}</p>
                {slide.imgrecalc ? <img src={recalc} alt="" /> : ""
              }
                <p>{slide.par2}</p>
                <p>{slide.par3}</p>
                <p>{slide.par4}</p>
                <p>{slide.par5}</p>
                {slide.pbox1 ? 
                <div className="box">
                  <p>{slide.pbox1}</p>
                  <p>{slide.pbox2}</p>
                  <p>{slide.pbox3}</p>
                </div>
                : ""}
                 {slide.imgCalc ? <img src={krystoCalcul} alt="" /> : ""
              }
                 {slide.imgFirst ? <img src={firstKrysto} alt="" /> : ""
              }
             
   
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </main>
  )
}

export default Presentation

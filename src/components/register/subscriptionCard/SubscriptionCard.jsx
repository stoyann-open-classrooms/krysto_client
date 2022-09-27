import React from 'react'
import { FaCheck } from 'react-icons/fa'
import './SubscriptionCard.css'
function SubscriptionCard() {
  return (

    <div className="container-subscription-card">

    <div className='table basic'>
        <div className="price-section">
            <div className="price-area">
                <div className="inner-area">
                    <span className='price'>400</span>
                    <span className='text'>XPF</span>
                </div>
            </div>
        </div>
        <div className="package-name"></div>
        <div className="features">
            <li>
                <span className="list-name">Publier des annonces</span>
                <span className="icone"><FaCheck/></span>
            </li>
            <li>
                <span className="list-name">Répondre aux annonces</span>
                <span className="icone"><FaCheck/></span>
            </li>
            <li>
                <span className="list-name">Envoyer des Krysto</span>
                <span className="icone"><FaCheck/></span>
            </li>
            <li>
                <span className="list-name">Recevoir des Krysto</span>
                <span className="icone"><FaCheck/></span>
            </li>
        </div>
        <div className="button"><button>Choisir</button></div>
     
    </div>
    <div className='table premium'>
        <div className="ribbon">
            <span>Gratuit a vie</span>
        </div>
        <div className="price-section">
            <div className="price-area">
                <div className="inner-area">
                    <span className='price'>0</span>
                    <span className='text'>XPF</span>
                </div>
            </div>
        </div>
        <div className="package-name"></div>
        <div className="features">
            <li>
                <span className="list-name">Publier des annonces</span>
                <span className="icone"><FaCheck/></span>
            </li>
            <li>
                <span className="list-name">Répondre aux annonces</span>
                <span className="icone"><FaCheck/></span>
            </li>
            <li>
                <span className="list-name">Envoyer des Krysto</span>
                <span className="icone"><FaCheck/></span>
            </li>
            <li>
                <span className="list-name">Recevoir des Krysto</span>
                <span className="icone"><FaCheck/></span>
            </li>
        </div>
        <div className="button"><button>Choisir</button></div>
 
    </div>
    <div className='table pro'>
        <div className="price-section">
            <div className="price-area">
                <div className="inner-area">
                    <span className='price'>4000</span>
                    <span className='text'>XPF</span>
                </div>
            </div>
        </div>
        <div className="package-name"></div>
        <div className="features">
            <li>
                <span className="list-name">Publier des annonces</span>
                <span className="icone"><FaCheck/></span>
            </li>
            <li>
                <span className="list-name">Répondre aux annonces</span>
                <span className="icone"><FaCheck/></span>
            </li>
            <li>
                <span className="list-name">Envoyer des Krysto</span>
                <span className="icone"><FaCheck/></span>
            </li>
            <li>
                <span className="list-name">Recevoir des Krysto</span>
                <span className="icone"><FaCheck/></span>
            </li>
        </div>
     <div className="button"><button>Choisir</button></div>
    </div>
    </div>
  )
}

export default SubscriptionCard
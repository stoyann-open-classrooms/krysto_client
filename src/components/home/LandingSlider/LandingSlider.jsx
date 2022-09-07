 import { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import imageSlide1 from '../../../assets/images/paysage_caledonnien_2.jpeg'
import './landingSlider.css'

function LandingSlider() {
    const [slide ,setSlide] = useState({
        
    })
  return (
    <div className='slider-container'>
        <div className="left-slide">
            <div className='slide-1' style={{backgroundColor: "#252726"}}>
                <h1>Le troc nouvelle génèration.</h1>
                <p>petite-annonces en crypto-monnaie</p>
            </div>
        </div>
        <div className="right-slide">

            <div className='image-slide-1'>

            </div>
            <div className='image-slide-2'>

            </div>
            <div className='image-slide-3'>

            </div>
            <div className='image-slide-4'>

            </div>
        </div>
        {/* <div className="action-buttons">
            <button className="down-button">
                <FaArrowDown/>
            </button>
            <button className="up-button">
                <FaArrowUp/>
            </button>
        </div> */}
    </div>
  )
}

export default LandingSlider
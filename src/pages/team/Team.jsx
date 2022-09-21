import React from 'react'
import TristanImg from '../../assets/tristan.png'
import StoyannImg from '../../assets/stoyann_image.jpg'
import './team.css'

function Team() {
  return (
    <div className='page-content'>

 <div className="container-card-team p-2">
 <div class="card">
 
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src={TristanImg} alt="" />
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">Tristan Goguet,</p>
      
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris.
     
    
   
    </div>
  </div>
</div>

 </div>
    </div>
  )
}

export default Team
import React from 'react'
import TristanImg from '../../assets/tristan_image.jpg'
import StoyannImg from '../../assets/stoyann_image.jpg'
import './team.css'

function Team() {
  return (
    <main>
          <div className="hero p-4">
     
     <div className="hero-container">
        <h1>L'équipe Krysto</h1>
   </div>
 </div>

 <div className="container-card-team p-2">
 <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src={TristanImg} alt="" />
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src={TristanImg} alt="" />
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">Tristan Goguet,</p>
        <p class="subtitle is-6">tristan@gmail.com</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris.
     
      <br/>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
 <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src={StoyannImg} alt=""/>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src={StoyannImg} alt=""/>
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">Stoyann Velten</p>
        <p class="subtitle is-6">stoyann-nc@hotmail.com</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris.
     
      <br/>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
 </div>
    </main>
  )
}

export default Team
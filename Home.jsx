import React from 'react'

import Product from './Product';
import About from './About';
import Contact from './Contact';


const Home = () => {
  return (
    <>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./rede.jpg" class="d-block w-100" alt="redmi" height="500px"/>
          </div>
          <div class="carousel-item">
            <img src="./redmi12pro.png" class="d-block w-100" alt="redmi" height="500px"/>
          </div>
          <div class="carousel-item active">
            <img src="./re1.jpg" class="d-block w-100" alt="redmi" height="500px"/>
          </div>
          <div class="carousel-item">
            <img src="./telefon.jpg" class="d-block w-100" alt="redmi" height="500px"/>
          </div>
          
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <Product/>
      <About/>
    <Contact/>
    </>
    
    
  )
}

export default Home
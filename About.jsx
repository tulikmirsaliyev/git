import React from 'react'
import { NavLink } from 'react-router-dom'
import ima from './Images/mu.jpg'

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className='oo' fw='bold' align="center" mt="10px" mb="20px text-primary">About us</h1>
            <p className="lead" mb="4px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error qui quae beatae at unde itaque voluptatum accusantium fugit non voluptas architecto iure consectetur quaerat earum dolorum quam, ex, quia quis harum odio assumenda officia, fuga quo laboriosam! Labore doloribus ipsam nemo a ipsa ut rem, expedita fugit dolores officia laborum, magni, nam autem quidem repellendus asperiores alias dolore tempora pariatur illum reprehenderit! A culpa explicabo asperiores labore aliquid quam delectus cumque, consequatur doloribus vitae, aut reiciendis tenetur? Eos quis impedit inventore in quas voluptatum, recusandae delectus omnis. Odio animi sint quae est maxime ipsa. Porro ab quisquam aperiam quae blanditiis.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact us</NavLink>
            
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <img className='about' src={ima} alt="oyoq kiyim" />
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default About
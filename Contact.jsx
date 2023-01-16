import React from 'react'
import ime from './Images/imo.webp'

const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1 className="baliq" m="20px">Savollar uchun murojaat</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md 5 d-flex justify-content-center">
            <img src={ime} alt="fdg" ml="20px" mb="19px" height="250px" width="300px" />

          </div>
          <div className="col-md-6">
            <form>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="A.Muhammad"/>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <br/>
              <button type="submit" class="btn btn-outline-primary w-100%">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
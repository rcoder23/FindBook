import React from 'react'

import './Home.css';
import { useNavigate } from 'react-router-dom'   

export const Home = () => {
    const navigate = useNavigate()
 return (
    <>
      

      <section className='title'>
          <div className="container">
              <div className="heading1">
                  <h2 className='h'>Find Old/New Books</h2>
                  <br/>
                  <h2 className='h2'>Here</h2>
              </div>

              <div className="heading2">
                  <p>
                  Tired of Finding Second Hand Books at low cost ? Try Booking ✨. Search book and contact the user . Also want to donate books ,you can list your books here 

                  </p>
              </div>

              <div className="loginbtn">

                  
                  <button onClick={() => navigate("/FindBook")}>Find Book </button>
              </div>
          </div>
      </section>


      
    </>
  )
}

import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
export const Navbar = () => {
  return (
    <>
      <section className="nav">
        <div className="container">
            <div className="item">
                <h2><Link to="/">Booking</Link></h2>
            </div>

            <div className="item2">
                <h4><Link to="/FindBook">Find-Book</Link></h4>
            </div>

            <div className="item2">
              <h4><Link to="/AddBook">Add Books</Link></h4>
            </div>
        </div>
        </section>
    </>
  )
}

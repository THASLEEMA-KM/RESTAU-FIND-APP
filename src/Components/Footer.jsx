import { Utensils } from 'lucide-react'
import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="bg-black py-5 text-light" style={{height:'500px'}}>
    <div className="container container-fluid mt-5 w-100 ">
      <div className="d-lg-flex justify-content-between">
        <div className="intro ">
          <h5 className="py-2 text-warning fw-bolder">
          <Utensils size={35} className='text-warning' strokeWidth={3.5} absoluteStrokeWidth /> RestauFind
          </h5>
          <p>
          A restaurant is a fantasy—a kind <br/> 
          of living fantasy in which diners are<br/>
           the most important members of the cast.
          </p>
          <p>Code Licensed Luminar, docs CC by 3.0</p>
          <p>Currently v5.3.2.</p>
        </div>
        <div className="links d-flex flex-column">
          <h5 className="py-2 text-warning fw-bolder">Links</h5>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            Landing
          </Link>
          <Link to={"/home"} style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
        </div>
        <div className="Guides d-flex flex-column">
          <h5 className="py-2 text-warning fw-bolder">Guides </h5>
          <a
            href=""
            style={{ textDecoration: "none", color: "white" }}
            target="_blank"
          >
            React
          </a>
          <a
            href=""
            style={{ textDecoration: "none", color: "white" }}
            target="_blank"
          >
            Redux
          </a>
          <a
            href=""
            style={{ textDecoration: "none", color: "white" }}
            target="_blank"
          >
            React-Bootstrap
          </a>
        </div>
        <div className="Contact d-flex flex-column">
          <h5 className="py-2 text-warning fw-bolder">Contact Us</h5>
          <div className="d-flex">
            <input
              type="text"
              placeholder="Email id here"
              className="form-control rounded"
            />
            <Button className="btn rounded btn-warning ms-2">
              <i className="fa-solid fa-arrow-right-long"></i>
            </Button>
          </div>
          <div className="icons d-flex justify-content-between mt-3">
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              <i className="fa-solid fa-phone"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center p-4">
        <p>Copyright © 2024 RestauFind. Built with React.</p>
      </div>
    </div>
  </div>
  )
}

export default Footer
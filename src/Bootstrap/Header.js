
import React from 'react'

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark" id='nav_bg'>
  <div className="container-fluid">
    <a className="navbar-brand fw-bold" href="#">LOGO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#hero_bg">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#service">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
      <ul className="navbar-nav sm-icons">
        <li><a className="nav-link" href="#"><i className="bi bi-facebook"></i></a></li>
        <li><a className="nav-link" href="#"><i className="bi bi-instagram"></i></a></li>
        <li><a className="nav-link" href="#"><i className="bi bi-twitter"></i></a></li>
        <li><a className="nav-link" href="#"><i className="bi bi-pinterest"></i></a></li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header

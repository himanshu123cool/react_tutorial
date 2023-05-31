import React from "react";

function Hero() {
  return (
    <div id="hero_bg" className="container-fluid">
      <div className="row overlay">
            <div className="col-12">
            <h1 className="text-light">Welcome To My Website</h1>
            <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, hic aut? Iure error, voluptatibus, doloribus minima ipsam inventore, expedita excepturi ipsa odit debitis vel! Optio.<br/>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, voluptas!</p>
            <a href="#contact"><button className="btn hero_btn">Contact Us</button></a>
            </div>
      </div>
    </div>
  );
}

export default Hero;

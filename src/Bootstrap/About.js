import React from 'react'

function About() {
  return (
    <div className='container py-5' id='about'>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-5 d-flex align-items-center justify-content-center">
            <img src="https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?w=826&t=st=1685495730~exp=1685496330~hmac=3bee05dbdf2c5bec3095d9555d014f919b31fe562c3cc826e0c33409515ad5c1" alt="about"  className='img-fluid'/>
          </div>
          <div className="col-12 col-sm-12 col-md-7">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae est nostrum, illum eum magni ipsam, corrupti ipsa error quam veniam odit doloribus eligendi. Blanditiis vero doloremque et, fugiat reprehenderit, illo doloribus sunt illum, omnis dicta unde laudantium adipisci nesciunt? Sapiente rem quidem error ea suscipit, temporibus possimus similique nam deserunt quibusdam. Nisi nostrum quo, illum corrupti aliquam necessitatibus exercitationem quae.</p>
            <button className='btn hero_btn'>Read More</button>
          </div>
        </div>
    </div>
  )
}

export default About

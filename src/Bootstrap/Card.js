import React from 'react'

function Card() {
  return (
    <div className='d-flex align-items-center justify-content-center'>
      <div className="card" style={{width:"18rem"}}>
            <img src="https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595847.jpg?w=740&t=st=1685496512~exp=1685497112~hmac=d3ac4632da7acb5498378c38fd3f8b956f338ab64b756a738e9ef7e1e42096c4" className="card-img-top" alt="service" />
            <div className="card-body">
              <h5 className="card-title">Web Development</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn hero_btn">
                Read More
              </a>
            </div>
          </div>
    </div>
  )
}

export default Card

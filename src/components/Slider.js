import React from 'react'


function Slider() {
  return (
       <>
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-inner container">
            <div className="carousel-item container active">
            <div className="wrapper">  
              <iframe className="d-block w-100 " src="https://www.youtube.com/embed/XCjbU13UaBk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
            </div>
            </div>
            <div className="carousel-item container">
            <div className='wrapper'>
              <iframe className="d-block w-100 " src="https://www.youtube.com/embed/g7Ih8j0jwqE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            </div>
            <div className="carousel-item container">
            <div className='wrapper'>  
              <iframe className="d-block w-100 " src="https://www.youtube.com/embed/h-0mncOcGcA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
            </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
       </>
    
  )
}

export default Slider
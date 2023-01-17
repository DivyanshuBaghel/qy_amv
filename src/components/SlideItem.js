import React, { Component } from 'react'

export default class SlideItem extends Component {
  render() {
    let {title,vSrc,id,ac}=this.props;
   
    return (
        <div className={`carousel-item ${ac}`}>
            <div className="wrapper">  
                 <iframe className="d-block w-100 " src={vSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
            </div>
            <div className='d-flex' style={{height:"66.7px"}}><h1 className='text-primary'>{id}</h1><h1 className='text-light'>.{title}</h1></div>

        </div>
    )
  }
}

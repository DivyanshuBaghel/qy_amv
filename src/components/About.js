import React, { Component } from 'react'

export default class About extends Component {
    
  render() {
    return (
      <div className='container'>
        <div className="card text-center bg-dark text-secondary-emphasis my-3" data-bs-theme="dark">
          <div className="card-header">
            Featured
          </div>
          <div className="card-body">
            <h5 className="card-title">Get more Excusive Content</h5>
            <p className="card-text"> I am an Anime Music Video Creator. And This website is biuld to server you AMV. Specially Genshin Impact AMV. </p>
            <a href="https://www.youtube.com/@qy713/featured"  rel="noreferrer" target="_blank" className="btn btn-primary mx-3">Visit Youtube</a>
            <a href="https://www.patreon.com/user?u=86581080"  rel="noreferrer" target="_blank" className="btn btn-danger">Visit Petreon</a>
          </div>
          <div className="card-footer text-muted">
            
          </div>
        </div>
      </div>
    )
  }
}

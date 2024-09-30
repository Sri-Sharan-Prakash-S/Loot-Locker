import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import './Header.css'
import loot from '../../../Frontend/src/assets/gaming-pad.png'
import slide1 from '../../../Frontend/src/assets/slide1.jpg'
import slide2 from '../../../Frontend/src/assets/slide2.jpg'
import war from '../../../Frontend/src/assets/warzone.jpg'
import experts from '../../../Frontend/src/assets/experts.jpg'
import anime from '../../../Frontend/src/assets/anime.jpg'
import manga from '../../../Frontend/src/assets/manga.jpg'

const Header = () => {
  const slides={
    infinite:true,
    speed:500,
    dots:true,
    slidesToShow:1,
    slidesToScroll:1,
  }
  return (
    <div style={{height:'1200px'}}>
        <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid d-flex">
        <div>        
        <a className="navbar-brand" href="#home">
        <img
            src={loot}
            alt="Logo"
            className="img-fluid"
            style={{ width: '40px' }} 
          />
          </a>
          </div>
          <div className='fs-3 text-light'>
          Loot Locker
          </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex gap-5 mx-auto">
            <li className="nav-item">
              <a className="nav-link active text-light fs-5" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link fs-5 text-light"
                href="#"
                id="resourcesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </a>
              <ul className="dropdown-menu bg-warning" aria-labelledby="resourcesDropdown">
                <li><a className="dropdown-item text-dark" href="#resource1">Gaming Blog</a></li>
                <li><a className="dropdown-item text-dark" href="#resource2">Anime Blog</a></li>
                <li><a className="dropdown-item text-dark" href="#resource3">Latest News</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="start">
        <a className="btn text-light" href="#get-started">Get Started</a>
        </div>
      </div>
    </nav>
    <div style={{width:'100%'}} className='m-auto'>
      <div className='mt-20'>
        <Slider {...slides}>
          {dataslide.map((d)=>(
            <div style={{height:'450px',position:'relative'}} className='text-dark rounded mb-4'>
              <div className='rounded-top d-flex justify-content-center align-items-center'>
                <img src={d.img} style={{height:'600px', width:'100%'}}/>
                <div className='review'>
                  <h2>{d.review}</h2>
                </div>
              </div>
            </div>
          ))}
          </Slider>
      </div>
    </div>
    <div style={{width:'75%'}} className='m-auto'>
      <div className='gap-2 d-flex'>
          {data.map((d)=>(
            <div style={{height:'230px',paddingTop:'30px',marginTop:'30px',cursor:'pointer'}} className='card text-dark bulge rounded'>
              <div className='rounded-top d-flex justify-content-center align-items-center'>
                <img src={d.img} style={{height:'100px', width:'150px',borderRadius:'8px'}} className=''/>
              </div>
              <div className='d-flex flex-column justify-content-center align-items-center gap-4 p-4'>
                <p className='fw-bold fs-5'>{d.review}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
    </div>
  )
}

const data=[
  {
    img:war,
    review:'Gaming Related post'
  },
  {
    img:anime,
    review:'Anime Related post'
  },
  {
    img:experts,
    review:'Solutions from experts'
  },
  {
    img:manga,
    review:'Manga latest Update'
  },
  {
    img:war,
    review:'Top Gamers Connection'
  }
]

const dataslide=[
  {
    img:slide1,
    review:'Build Your Own gaming or anime post'
  },
  {
    img:slide2,
  }
]

export default Header
import React, { useContext } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../Frontend/src/assets/slide1.jpg'
import img2 from '../../../Frontend/src/assets/slide2.jpg'
import img3 from '../../../Frontend/src/assets/slide3.jpg'
import './Carouselpage.css'
import { StoreContext } from '../context/StoreContext';
const Carouselpage = ({setShowLogin}) => {
  const {token,setToken}=useContext(StoreContext);

  return (
    <div>
        <Carousel>
    <Carousel.Item>
      <img style={{height:'80vh'}}
        className="d-block w-100"
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h1>Loot Locker</h1>
        <h4>Get post update quick and have the latest anime and manga updates</h4>
        {!token?
        <button className='btn' onClick={()=>setShowLogin(true)}>Get Started</button>
        :<div>
        </div>}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'80vh'}}
        className="d-block w-100"
        src={img3}
        alt="First slide"
      />
      <Carousel.Caption>
        <h1>Trusted By</h1>
        <h4>Top Gamers,Verified Users and MNC</h4>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'80vh'}}
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />
      <Carousel.Caption>
        <h1>Create Your Own Blog</h1>
        <h4>
          Share experience, post, game update and get experts tips in Gaming
        </h4>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
  )
}

export default Carouselpage
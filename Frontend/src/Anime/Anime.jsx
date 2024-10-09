import React from 'react'
import './Anime.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Link} from 'react-router-dom';
import arrow from '../../../Frontend/src/assets/arrow-right.png'

const Anime = ({description,title,category,image,id}) => {
  return (
    <div>
    <div style={{backgroundColor:'white'}} className='hover-shadow ml-4 mb-4 mr-4'>
      <Link to={`/Pages/${id}`} state={{id}}>
      <img src={image} alt='' width={397} height={300} className='image-border'/>
      </Link>
      <p className='ml-3 mt-3 px-1 d-inline-block bg-dark text-white'>{category}</p>
      <div>
        <h5 className='ml-3 mb-2 fs-4 traking-tight'>{title}</h5>
        <p className='ml-3 mb-3 fs-6'>{description}</p>
        <div className=' ml-3 mb-5 d-inline-flex align-items-center py-2 fw-bold'>
          <Link to={`/Pages/${id}`} state={{id}}>
          Read more
          <img className='arrow ml-2' src={arrow} alt="" />
          </Link>
        </div>
      </div>
      </div>
      </div>
  )
}



export default Anime
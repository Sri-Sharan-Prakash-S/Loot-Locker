import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Locker.css'
import List from '../List/List';

const Locker = () => {
  return (
    <div>
        <div className='text-center my-8'>
            <h1 className='fs-1 mb-4 mt-3'>Blog Posts</h1>
            <p className='mx-auto fs-4 description'>Here you can find all the others post,ideas,solution,experience and latest news about Anime and Gaming Content</p>
            <form className='mt-5 d-flex justify-content-between scale-75 sm100 mx-auto' action="">
                <input type="email" placeholder='Enter Your Email' className='pl-4 outline'/>
                <button type='submit' className='border-black py-4 px-4 px-sm-8 subscribe'>Subscribe</button>
            </form>
        </div>
        <List/>
    </div>
  )
}

export default Locker
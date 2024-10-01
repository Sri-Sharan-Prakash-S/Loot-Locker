import React from 'react'
import './Anime.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import arrow from '../../../Frontend/src/assets/arrow-right.png'
import war from '../../../Frontend/src/assets/warzone.jpg'

const Anime = () => {
  return (
    <div style={{backgroundColor:'white'}} className='hover-shadow ml-4 mb-4 mr-4'>
      <img src={blog_data[0].image} alt='' width={397} height={300} className='image-border'/>
      <p className='ml-3 mt-3 px-1 d-inline-block bg-dark text-white'>{blog_data[0].category}</p>
      <div>
        <h5 className='ml-3 mb-2 fs-4 traking-tight'>{blog_data[0].title}</h5>
        <p className='ml-3 mb-3 fs-6'>{blog_data[0].description}</p>
        <div className=' ml-3 mb-5 d-inline-flex align-items-center py-2 fw-bold'>
          Read more
          <img className='arrow ml-2' src={arrow} alt="" />
        </div>
      </div>
    </div>
  )
}

const blog_data=[{
  id:1,
  title:"Far cry 5",
  description:"The game which is a FPV type game and Comes under Story Mode game",
  image:war,
  date:Date.now(),
  category:"Gaming",
  author:"Alex Bennett"
},
{
  id:2,
  title:"Far cry 3",
  description:"The game which is a FPV type game and Comes under Story Mode game",
  image:war,
  date:Date.now(),
  category:"Gaming",
  author:"Alex Bennett"
},
{
  id:3,
  title:"RDR 2",
  description:"The game which is a Open world type game and Comes under Story Mode game",
  image:war,
  date:Date.now(),
  category:"Gaming",
  author:"Alex Bennett"
},
{
  id:4,
  title:"Gta 5",
  description:"The game which is a open world type game and Comes under Story Mode game",
  image:war,
  date:Date.now(),
  category:"Gaming",
  author:"Alex Bennett"
},
{
  id:5,
  title:"Sekiro shadow die twice",
  description:"The game which is a Japenese and ninja related game with resseruction and Comes under Story Mode game",
  image:war,
  date:Date.now(),
  category:"Gaming",
  author:"Alex Bennett"
},
{
  id:6,
  title:"max payne 3",
  description:"The game which is a Third person view type game and Comes under Story Mode game",
  image:war,
  date:Date.now(),
  category:"Gaming",
  author:"Alex Bennett"
},
{
  id:7,
  title:"God Of War 4",
  description:"The game which is a Greek god methology game and Comes under Story Mode game",
  image:war,
  date:Date.now(),
  category:"Gaming",
  author:"Alex Bennett"
},
{
  id:8,
  title:"Assassin creed",
  description:"The game which is a game where play through memories and Comes under Story Mode game",
  image:war,
  date:Date.now(),
  category:"Gaming",
  author:"Alex Bennett"
},
{
  id:9,
  title:"Jujutsu kaisen",
  description:"The anime in which characters use cursed techniques and has a over-powered character named Satoru Gojo",
  image:war,
  date:Date.now(),
  category:"anime",
  author:"Alex Bennett"
},
{
  id:10,
  title:"Far cry 5",
  description:"The game which is a FPV type game and Comes under Story Mode game",
  image:war,
  date:Date.now(),
  category:"Gaming",
  author:"Alex Bennett"
},
{
  id:11,
  title:"Far cry 5",
  description:"The game which is a FPV type game and Comes under Story Mode game",
  image:war,
  date:Date.now(),
  category:"Gaming",
  author:"Alex Bennett"
},
{
  id:12,
  title:"Far cry 5",
  description:"The game which is a FPV type game and Comes under Story Mode game",
  image:war,
  date:Date.now(),
  category:"Gaming",
  author:"Alex Bennett"
}
]

export default Anime
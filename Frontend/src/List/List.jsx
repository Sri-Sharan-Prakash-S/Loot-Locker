import React, { useContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './List.css'
import { blog_data } from '../assets/gameassets';
import Anime from '../Anime/Anime';
import { StoreContext } from '../context/StoreContext';

const List = () => {
    const [menu,setMenu]=useState("All");
    const {list}=useContext(StoreContext);
  return (
    <div>
        <div className='d-flex justify-content-center gap-6 my-10 mt-5'>
          <button onClick={()=>setMenu('All')} className={menu==="All"?'bg text-white pr-5 pl-5 rounded-sm':"all pr-5 pl-5 fw-bold"}>All</button>
          <button onClick={()=>setMenu('Gaming')} className={menu==="Gaming"?'bg text-white pr-5 pl-5 rounded-sm':"all pl-5 pr-5 fw-bold"}>Gaming</button>
          <button onClick={()=>setMenu('anime')} className={menu==="anime"?'bg text-white pr-5 pl-5 rounded-sm':"all pl-5 pr-5 fw-bold"}>Anime</button>
        </div>
        <div className="d-flex flex-wrap justify-content-around gap-1 gap-10 mb-16 mx-xl-24 mt-5">
            {list.filter((item)=>menu==="All"?true:item.category==menu).map((item,index)=>{
            return <Anime key={index} id={index} image={item.image} title={item.name} description={item.authorname} category={item.category}/>
            })}
        </div>
        </div>
  )
}

export default List
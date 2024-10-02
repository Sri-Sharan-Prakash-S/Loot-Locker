import React, { useEffect, useState } from 'react'
import { blog_data } from '../assets/gameassets';
import { useLocation } from 'react-router-dom';
import logo from '../../../Frontend/src/assets/gaming-pad.png'
import './Page.css'

const Page = () => {
    const [data,setData]=useState(null);
    const location=useLocation();

    const fetchData=()=>{
        for(let i=0;i<blog_data.length;i++){
            if(location.state.id===blog_data[i].id){
                setData(blog_data[i]);
                break;
            }
        }
    }

    useEffect(()=>{
        fetchData();
    },[])
    console.log(data.title);

  return (
    <div className='bg-gray pt-2 pb-2'>
        <div className="d-flex justify-content-between align-items-center pr-2 pl-2">
            <img src={logo} width={40} className='w-20 w-sm-auto' alt="" />
            <button className='d-flex align-items-center gap-2 start'>Get Started</button>
        </div>
        <div className="text-center">
            <h1>{data.title}</h1>
        </div>
    </div>
  )
}

export default Page
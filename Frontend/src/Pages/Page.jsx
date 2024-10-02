import React, { useEffect, useState } from 'react'
import share from '../../../Frontend/src/assets/share.png'
import whatsapp from '../../../Frontend/src/assets/whatsapp.png'
import facebook from '../../../Frontend/src/assets/facebook.png'
import { blog_data } from '../assets/gameassets';
import { useParams } from 'react-router-dom';
import logo from '../../../Frontend/src/assets/gaming-pad.png'
import './Page.css'
import Footer from '../Footer/Footer';

const Page = () => {
    const [data,setData]=useState(null);
    let {id}=useParams();

    const fetchData=()=>{
        for(let i=0;i<blog_data.length;i++){
            if(parseInt(id)===blog_data[i].id){
                setData(blog_data[i]);
                break;
            }
        }
    }
    console.log(data);

    useEffect(()=>{
        fetchData();
    },[])

  return (data?<div>
    <div className='bg-gray pt-2 pb-5'>
        <div className="bg-gray d-flex justify-content-between align-items-center pr-2 pl-2">
            <img src={logo} width={40} className='w-20 w-sm-auto' alt="" />
            <button className='d-flex align-items-center gap-2 start'>Get Started</button>
        </div>
        <div className="text-center">
            <h1 className='fs-2 fw-bold text-light'>{data.title}</h1>
            <img className='author' src={data.image} width={60} height={60} alt="" />
            <p>{data.author}</p>
        </div>
        </div>
        <div className='content'>
            <img className='content-image' src={data.image} width={500} height={400} alt="" />
            <h1>Introduction:</h1>
            <p className='fs-5 my-3'>{data.description}</p>
            <h3 className='fs-4 my-5 fw-bold'>Step 1: Self-Reflection and Goal Setting</h3>
            <p className='fs-5 my-3'>{data.description}</p>
            <h3 className='fs-4 my-5 fw-bold'>Step 2: Self-Reflection and Goal Setting</h3>
            <p className='fs-5 my-3'>{data.description}</p>
            <h3 className='fs-4 my-5 fw-bold'>Step 3: Self-Reflection and Goal Setting</h3>
            <p className='fs-5 my-3'>{data.description}</p>
            <h3 className='fs-4 my-5 fw-bold'>Conclusion</h3>
            <p className='my-3'>{data.description}</p>
            <div>
                <p className='text-dark fw-bold my-5'>Share this article on social media</p>
                <div className='d-flex'>
                    <img className='mr-2' src={share} width={30} alt="" />
                    <img className='mr-2' src={whatsapp} width={30} alt="" />
                    <img src={facebook} width={30} alt="" />
                </div>
            </div>
        </div>
        <Footer/>
        </div>:<></>
  )
}

export default Page
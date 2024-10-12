import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import share from '../../../Frontend/src/assets/share.png'
import whatsapp from '../../../Frontend/src/assets/whatsapp.png'
import facebook from '../../../Frontend/src/assets/facebook.png'
import { blog_data } from '../assets/gameassets';
import { useParams } from 'react-router-dom';
import logo from '../../../Frontend/src/assets/gaming-pad.png'
import './Page.css'
import Footer from '../Footer/Footer';
import { StoreContext } from '../context/StoreContext'

const Page = () => {
    const [data,setData]=useState(null);
    const {list}=useContext(StoreContext);
    let {id}=useParams();
    console.log(list)
    const fetchData=()=>{
        for(let i=0;i<list.length;i++){
            if(parseInt(id)-1===list.indexOf(list[i])){
                setData(list[i]);
                break;
            }
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (data?<div>
    <div className='bg-gray pt-2 pb-5'>
        <div className="bg-gray d-flex justify-content-between align-items-center pr-2 pl-2">
            <Link to={'/'}>
            <img src={logo} width={40} className='w-20 w-sm-auto' alt="" />
            </Link>
            <button className='d-flex align-items-center gap-2 start'>Get Started</button>
        </div>
        <div className="text-center">
            <h1 className='fs-2 fw-bold text-light'>{data.title}</h1>
            <img className='author' src={data.image} width={60} height={60} alt="" />
            
        </div>
        </div>
        <div className='content'>
            <img className='content-image' src={data.image} width={500} height={400} alt="" />
            <div className="fs-5 my-3" dangerouslySetInnerHTML={{__html:data.description}}></div>
            <div className=''>
                <p className='text-dark fw-bold mb-4'>Share this article on social media</p>
                <div className='d-flex mb-5'>
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
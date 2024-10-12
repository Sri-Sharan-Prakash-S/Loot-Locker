import React, { useContext, useEffect, useState } from 'react'
import './admin.css'
import Adminnav from '../Adminnav/Adminnav'
import Adminbar from '../Adminbar/Adminbar'
import upload from '../../../Frontend/src/assets/upload.png'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/ReactToastify.css"
import close from "../../../Frontend/src/assets/close.png"
import Compressor from 'compressorjs'

const Admin = () => {
    const {admin,url,list,setList}=useContext(StoreContext);
    const [data,setData]=useState({
        name:"",
        description:"",
        category:"game"
    })

    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const handleImageChange=(event)=>{
        const file=event.target.files[0];
        if(file){
            new Compressor(file,{
                quality:0.6,
                success(result){
        var reader=new FileReader();
        reader.readAsDataURL(result);
        reader.onload=()=>{
            setData(data=>({...data,image:reader.result}))
            console.log(reader.result);
        }
        reader.onerror=error=>{
            console.log("Error: ",error);
        }}
            });
    }
    }
    useEffect(()=>{
        fetchList();
    })

    const fetchList=async()=>{
        const response=await axios.get("http://localhost:4000/api/lock/list");
        if (response.data.success) {
            setList(response.data.data);
        }
        else{
        }
    }

    const onSubmitHandler=async(event)=>{
        event.preventDefault();
        const response=await axios.post("http://localhost:4000/api/lock/add",data);
        if (response.data.success) {
            setData({
                name:"",
                description:"",
                category:"game",
                image:null,
                authorname:""
            })
            // setImage(false);
            toast("Post Added")
        }
    }
    

    const remove= async (postid)=>{
        const response=await axios.post("http://localhost:4000/api/lock/remove",{id:postid})
        await fetchList();
        if (response.data.success) {    
        toast("Post Deleted")
    }
    }

  return (
    <div>
        <ToastContainer/>
        <Adminnav/>
        <div className='admin-content'>
            <div>
            <Adminbar/>
            </div>
            <div className='admin-side-content'>
            {admin==="Add"?
            <div className='add'>
                <form className='flex-col' onSubmit={onSubmitHandler}>
                    <div className='add-img-upload flex-col'>
                        <input accept='image/' type='file' onChange={handleImageChange} name='image' />
                    </div>
                    <div className="add-product-name flex-col">
                        <p>Title of the Post</p>
                        <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
                    </div>
                    <div className="add-product-name flex-col">
                        <p>Title of the Post</p>
                        <input onChange={onChangeHandler} value={data.authorname} type="text" name='authorname' placeholder='Type here' />
                    </div>
                    <div className="add-product-description flex-col">
                        <p>Description</p>
                        <textarea onChange={onChangeHandler} value={data.description} name="description" rows="10" cols="100" placeholder='Write content' required/>
                    </div>
                    <div className="add-category flex-col">
                        <p>category</p>
                        <select onChange={onChangeHandler} name="category">
                            <option value="game">Game</option>
                            <option value="anime">Anime</option>
                        </select>
                    </div>
                    <button type='submit' className='post-btn'>Post</button>
                </form>
            </div>:<div className='list add flex-col'>
                            <p>Your Posts</p>
                            <div className="list-table">
                                <div className="list-table-format title">
                                    <b>Name</b>
                                    <b>category</b>
                                    <b>Action</b>
                                </div>
                                {list.map((item,index)=>{
                                return(
                                    <div key={index} className='list-table-format'>
                                            <p>{item.name}</p>
                                            <p>{item.category}</p>
                                            <img className='close' onClick={()=>remove(item._id)} src={close} width={10} alt="" />
                                    </div>
                                )
                            })}
                            </div>
                            
                            
            </div>
            }
            </div>
        </div>
    </div>
  )
}

export default Admin
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

const Admin = () => {
    const {admin,url}=useContext(StoreContext);
    const [image,setImage]=useState(false);
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

    useEffect(()=>{
        fetchList();
    })

    const onSubmitHandler=async(event)=>{
        event.preventDefault();
        const response=await axios.post("http://localhost:4000/api/lock/add",data);
        if (response.data.success) {
            setData({
                name:"",
                description:"",
                category:"game"
            })
            setImage(false);
            toast("Post Added")
        }
    }

    const [list,setList]=useState([]);

    const fetchList=async()=>{
        const response=await axios.get("http://localhost:4000/api/lock/list");
        if (response.data.success) {
            setList(response.data.data);
        }
        else{
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
                        {/* <p>Upload Image</p>
                        <label htmlFor='image'>
                            <img src={image?URL.createObjectURL(image):upload} width={100} alt="" />
                        </label> */}
                        {/* <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required/> */}
                    </div>
                    <div className="add-product-name flex-col">
                        <p>Title of the Post</p>
                        <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
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
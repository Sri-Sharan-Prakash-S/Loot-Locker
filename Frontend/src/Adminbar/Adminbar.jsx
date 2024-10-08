import React, { useContext } from 'react'
import './Adminbar.css'
import addpost from '../../../Frontend/src/assets/more.png'
import list from '../../../Frontend/src/assets/list.png'
import subscribers from '../../../Frontend/src/assets/bell.png'
import { StoreContext } from '../context/StoreContext'
import { NavLink, useNavigate } from 'react-router-dom'

const Adminbar = () => {
    const navigate=useNavigate();
    const {setAdmin}=useContext(StoreContext);
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <div onClick={()=>setAdmin("Add")} className="sidebar-option">
                <img src={addpost} alt="" />
                <p>Add post</p>
            </div>
            <div onClick={()=>setAdmin("Display")} className="sidebar-option">
                <img src={list} alt="" />
                <p>List Posts</p>
            </div>
            <div onClick={()=>navigate("/")} className="sidebar-option">
                <img src={subscribers} alt="" />
                <p>Subscribers</p>
            </div>
        </div>
    </div>
  )
}

export default Adminbar
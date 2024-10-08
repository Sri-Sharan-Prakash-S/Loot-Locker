import React, { useContext, useState } from 'react'
import './admin.css'
import Adminnav from '../Adminnav/Adminnav'
import Adminbar from '../Adminbar/Adminbar'
import Display from '../Display/Display'
import upload from '../../../Frontend/src/assets/upload.png'
import { StoreContext } from '../context/StoreContext'

const Admin = () => {
    const {admin}=useContext(StoreContext);
    const [image,setImage]=useState(false);
  return (
    <div>
        <Adminnav/>
        <div className='admin-content'>
            <div>
            <Adminbar/>
            </div>
            <div className='admin-side-content'>
            {admin==="Add"?
            <div className='add'>
                <form className='flex-col'>
                    <div className='add-img-upload flex-col'>
                        <p>Upload Image</p>
                        <label htmlFor='image'>
                            <img src={image?URL.createObjectURL(image):upload} width={100} alt="" />
                        </label>
                        <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required/>
                    </div>
                    <div className="add-product-name flex-col">
                        <p>Title of the Post</p>
                        <input type="text" name='name' placeholder='Type here' />
                    </div>
                    <div className="add-product-description flex-col">
                        <p>Description</p>
                        <textarea name="description" rows="10" cols="100" placeholder='Write content' required/>
                    </div>
                    <div className="add-category flex-col">
                        <p>category</p>
                        <select name="category">
                            <option value="game">Game</option>
                            <option value="anime">Anime</option>
                        </select>
                    </div>
                    <button type='submit' className='post-btn'>Post</button>
                </form>
            </div>:<div>Display</div>
            }
            </div>
        </div>
    </div>
  )
}

export default Admin
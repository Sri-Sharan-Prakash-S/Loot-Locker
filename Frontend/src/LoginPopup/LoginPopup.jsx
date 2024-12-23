import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import './LoginPopup.css'
import close from '../../../Frontend/src/assets/close.png'
import { StoreContext } from '../context/StoreContext'
import { ToastContainer,toast } from 'react-toastify'
import "react-toastify/ReactToastify.css"

const LoginPopup = ({setShowLogin}) => {
    const {url,setToken}=useContext(StoreContext)
    const [currState,setCurrState]=useState("Login")
    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })


    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onLogin=async(event)=>{
        event.preventDefault()
        let newUrl=url;
        if(currState==="Login"){
            newUrl+="/api/user/login"
        }
        else{
            newUrl+="/api/user/register"
        }

        const response=await axios.post(newUrl,data);
        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false)
            toast("Welcome Back")
        }
        else{
            alert(response.data.message)
        }
    }

    useEffect(()=>{
        console.log(data);
    },[data])

  return (
    <div className='login-popup'>
        <form onSubmit={onLogin} className='login-popup-container'>
            <div className="login-popup-title">
                <h3>{currState}</h3>
                <img onClick={()=>setShowLogin(false)} src={close} height={20} width={20} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:
                <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required/>}
                <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required/>
                <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required/>
            </div>
            <button type='submit'>{currState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Login"?
            <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:
            <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
        </form>
    </div>
  )
}

export default LoginPopup
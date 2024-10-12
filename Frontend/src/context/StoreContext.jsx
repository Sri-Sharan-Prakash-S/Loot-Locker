import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext=createContext(null)

const StoreContextProvider=(props)=>{
    const url="http://localhost:4000"
    const [token,setToken]=useState("");
    const [admin,setAdmin]=useState("Add")
    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })
    const [loginval,setLoginval]=useState("");



    const fetchFoodList = async() => {
        const response = await axios.get(url+"/api/lock/list")
    }

    useEffect(()=>{
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));   
            }
        }
        loadData();
    },[])

    const contextValue={
        url,
        token,
        setToken,
        admin,
        setAdmin,
        data,
        setData,
        loginval,
        setLoginval
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
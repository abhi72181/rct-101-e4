import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { store } from "../store/store";

const RequiredAuth = ({ children }) => {
 const navigate=useNavigate()
  const {pathname}=useLocation()
//  const [auths,setAuths]=useState()
  const {isAuthenticated}=useSelector((state)=>state.auth.data)
  // useEffect(()=>{
  //   console.log("isauth",isAuthenticated)
  //   setAuths(isAuthenticated)
  // },[isAuthenticated])
   
  // if(loading){
  //   <h1>loading...</h1>
  // }
  // else if(error){
  //   <h1>something went wrong...</h1>
  // }
  
  if(isAuthenticated){
    return children
  }
  
  return <Navigate to={"/login"} state={{from:pathname}} replace />
  
 
};

export default RequiredAuth;

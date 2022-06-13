import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/auth/auth.actions";

const Login = () => {
  const {isAuthenticated}=useSelector((state)=>state.auth.data)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [userInfo,setUserInfo]=useState({
    email:"",
    password:""
  })

  const handleChange=(e)=>{
  setUserInfo({...userInfo,[e.target.name]:e.target.value})
  }

  const submitLogin=(e)=>{
e.preventDefault()
  dispatch(login(userInfo))
  }

  useEffect(()=>{
  navigate("/")
  },[isAuthenticated])
  return (
    <div>
      <form >
        <input data-cy="login-email" placeholder="Enter Email" name="email" onChange={handleChange} />
        <input data-cy="login-password" placeholder="Enter Password" name="password" onChange={handleChange} />
        <button data-cy="login-submit" type="submit" onClick={submitLogin} >Submit</button>
      </form>
    </div>
  );
};

export default Login;

// Auth Actions here
import { AUTH_SIGN_IN_LOADING } from "./auth.types";
import { AUTH_SIGN_IN_SUCCESS } from "./auth.types";
import { AUTH_SIGN_IN_ERROR } from "./auth.types";
import { AUTH_SIGN_OUT } from "./auth.types";
import axios from "axios"
export const login=(data)=>(dispatch)=>{
   dispatch({type:AUTH_SIGN_IN_LOADING})
   axios.post("https://reqres.in/api/login",data).then((r)=>(
    // console.log(r.data,"r.data")
    dispatch({type:AUTH_SIGN_IN_SUCCESS,payload:r.data})
)).catch(()=>(
    dispatch({type:AUTH_SIGN_IN_ERROR})
   ))

}

export const logout=()=>(dispatch)=>{
  dispatch({type:AUTH_SIGN_OUT})
}
